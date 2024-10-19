import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import { db } from './firebase-config';
import './BlogPost.css';

function BlogPost() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  

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

  return (
    <div className='blogpost-container'>
      {post ? (
        <>
          <h2 className='blogpost-title'>{post.Title}</h2>
          <p className='blogpost-body'>{post.Body}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default BlogPost;
