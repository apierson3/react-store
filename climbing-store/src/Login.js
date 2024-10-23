import React from 'react';
import { auth, provider } from './firebase-config';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const db = getFirestore();

function Login({ setIsAuth }) {
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then(async (result) => {
      const user = result.user;
      const userUID = user.uid;
      localStorage.setItem("isAuth", "true"); // Ensure this is a string

      // Check if user exists in Firestore
      const userDoc = await getDoc(doc(db, "users", userUID));

      if (!userDoc.exists()) {
        // Add new user to Firestore if they don't exist
        await setDoc(doc(db, "users", userUID), {
          uid: user.uid,
          email: user.email,
          displayName: user.email, // Use email as displayName
          role: 'user' // Default role
        });
      }

      // Fetch user role from Firestore
      const userRole = userDoc.exists() ? userDoc.data().role : 'user';
      if (userRole === 'admin') {
        localStorage.setItem("isAdmin", "true"); // Ensure this is a string
      } else {
        localStorage.setItem("isAdmin", "false"); // Ensure this is a string
      }

      setIsAuth(true);
      navigate('/');
    }).catch((error) => {
      console.error("Error signing in with Google: ", error);
    });
  };

  return (
    <div className="loginPage">
      <p>Sign In With Google to Continue</p>
      <button className="login-with-google-btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </div>
  );
}

export default Login;
