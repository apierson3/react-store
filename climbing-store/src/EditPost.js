import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from './firebase-config';
import './ManagePosts';

function EditPost() {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({ Title: '', Body: '' });

  useEffect(() => {
    const fetchPost = async () => {
      const docRef = doc(db, "posts", postId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setPost(docSnap.data());
      } else {
        console.log("No such document!");
      }
    };
    fetchPost();
  }, [postId]);

  const handleUpdate = async () => {
    const docRef = doc(db, "posts", postId);
    await updateDoc(docRef, post);
    navigate('/'); // Change to a route that makes sense for your app
  };

  return (
    <div className='editpost-container'>
      <div className='editpost-card'>
        <h2 className='editpost-title'>Edit Post</h2>
        <input
          type="text"
          className="editpost-input"
          value={post.Title}
          onChange={(e) => setPost({ ...post, Title: e.target.value })}
          placeholder="Title"
        />
        <textarea
          className="editpost-textarea"
          value={post.Body}
          onChange={(e) => setPost({ ...post, Body: e.target.value })}
          placeholder="Body"
        />
        <button className="editpost-button" onClick={handleUpdate}>Update Post</button>
      </div>
    </div>
  );
}

export default EditPost;
