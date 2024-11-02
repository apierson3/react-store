import React, { useState } from 'react';
import { auth, provider } from './firebase-config';
import { signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const db = getFirestore();

function Login({ setIsAuth }) {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(false);

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then(async (result) => {
      const user = result.user;
      const userUID = user.uid;
      localStorage.setItem("isAuth", "true");

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
        localStorage.setItem("isAdmin", "true");
      } else {
        localStorage.setItem("isAdmin", "false");
      }

      setIsAuth(true);
      navigate('/');
    }).catch((error) => {
      console.error("Error signing in with Google: ", error);
    });
  };

  const handleEmailSignIn = async (event) => {
    event.preventDefault();
    try {
      let userCredential;
      if (newAccount) {
        userCredential = await createUserWithEmailAndPassword(auth, email, password);
      } else {
        userCredential = await signInWithEmailAndPassword(auth, email, password);
      }
      const user = userCredential.user;
      const userUID = user.uid;
      localStorage.setItem("isAuth", "true");

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
        localStorage.setItem("isAdmin", "true");
      } else {
        localStorage.setItem("isAdmin", "false");
      }

      setIsAuth(true);
      navigate('/');
    } catch (error) {
      console.error("Error with email/password authentication: ", error);
    }
  };

  return (
    <div className="loginPage">
      <p>Sign In With Google to Continue</p>
      <button className="login-with-google-btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
      <hr />
      <form onSubmit={handleEmailSignIn}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">
          {newAccount ? 'Create Account' : 'Sign In'}
        </button>
      </form>
      <p onClick={() => setNewAccount(!newAccount)}>
        {newAccount ? 'Already have an account? Sign In' : 'Create new account'}
      </p>
    </div>
  );
}

export default Login;
