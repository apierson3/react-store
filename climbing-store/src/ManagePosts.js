import React, { useEffect, useState } from 'react';
import { collection, query, orderBy, getDocs, deleteDoc, doc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import { db } from './firebase-config';
import ConfirmDeleteModal from './ConfirmDeleteModal'; // Import the modal
import './ManagePosts.css';

function ManagePosts() {
  const [posts, setPosts] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      const q = query(collection(db, "posts"), orderBy("CreatedAt", "desc"));
      const querySnapshot = await getDocs(q);
      const postsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setPosts(postsData);
    };
    fetchPosts();
  }, []);

  const handleEditClick = (postId) => {
    navigate(`/editpost/${postId}`);
  };

  const handleDeleteClick = (postId) => {
    setSelectedPostId(postId);
    setIsModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    await deleteDoc(doc(db, "posts", selectedPostId));
    setPosts(posts.filter(post => post.id !== selectedPostId));
    setIsModalOpen(false);
  };

  return (
    <div className='manageposts-container'>
      <h2 className='manageposts-title'>Manage Posts</h2>
      {posts.map(post => (
        <div key={post.id} className='manageposts-post'>
          <h3 className='manageposts-title'>{post.Title}</h3>
          <button className='manageposts-button' onClick={() => handleEditClick(post.id)}>Edit Post</button>
          <button className='manageposts-delete-button' onClick={() => handleDeleteClick(post.id)}>Delete Post</button>
        </div>
      ))}
      <ConfirmDeleteModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
}

export default ManagePosts;
