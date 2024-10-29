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

  const extractVideoId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|\/v\/|youtu.be\/|\/v\/|^youtu.be\/|^v\/|\/embed\/|\/shorts\/|watch\?v=|&v=|watch\?v=|embed\/|^youtu.be\/|^embed\/|\/v=|\/embed=|v=|embed\/)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  return (
    <div className='blogpost-container'>
      <div className='blogpost-card'>
        {post ? (
          <>
            <h2 className='blogpost-title'>{post.Title}</h2>
            <p className='blogpost-body'>{post.Body}</p>
            {post.youtubeLink && (
              <div className="video-responsive">
                <iframe
                  src={`https://www.youtube.com/embed/${extractVideoId(post.youtubeLink)}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Embedded YouTube"
                ></iframe>
              </div>
            )}
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default BlogPost;
