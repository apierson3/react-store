import React, { useEffect, useState } from 'react';
import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";
import { Link } from 'react-router-dom';
import { db } from './firebase-config';
import './Posts.css';

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const q = query(collection(db, "posts"), orderBy("CreatedAt", "desc"), limit(3));
      const querySnapshot = await getDocs(q);
      const postsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setPosts(postsData);
    };
    fetchPosts();
  }, []);

  return (
    <div className='posts-container'>
      <div className='posts-card'>
        <h2 className='posts-recent-posts'>Recent Blog Posts</h2>
        {posts.map(post => (
          <div key={post.id} className='posts-post'>
            <h3 className='posts-title'>
              <Link to={`/post/${post.id}`}>{post.Title}</Link>
            </h3>
            <p className='posts-body'>{post.Body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
