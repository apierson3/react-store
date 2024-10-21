import React, { useEffect, useState } from 'react';
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { Link, useNavigate } from 'react-router-dom';
import { db } from './firebase-config';
import './ManagePosts.css';

function ManagePosts() {
  const [posts, setPosts] = useState([]);
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

  return (
    <div className='manageposts-container'>
      <h2 className='manageposts-title'>Manage Posts</h2>
      {posts.map(post => (
        <div key={post.id} className='manageposts-post'>
          <h3 className='manageposts-title'>{post.Title}</h3>
          <button className='manageposts-button' onClick={() => handleEditClick(post.id)}>Edit Post</button>
        </div>
      ))}
    </div>
  );
}

export default ManagePosts;
