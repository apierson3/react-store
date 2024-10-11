import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "./firebase-config";
import { useNavigate } from "react-router-dom";
import './CreatePost.css'; // Import the CSS file

function CreatePost({ isAuth }) {
  const [Title, setTitle] = useState("");
  const [Body, setPostText] = useState("");

  const postsCollectionRef = collection(db, "posts");
  let navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      Title,
      Body,
      Author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1>Create A Post</h1>
        <div className="inputContainer">
          <div className="inputGp">
            <label> Title:</label>
            <input
              placeholder="Title..."
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </div>
          <div className="inputGp">
            <label> Post:</label>
            <textarea
              placeholder="Post..."
              onChange={(event) => {
                setPostText(event.target.value);
              }}
            />
          </div>
          <button onClick={createPost}> Submit Post</button>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
