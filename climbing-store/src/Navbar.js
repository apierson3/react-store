// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Carabiner from './images/Carabiner.png';
import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase-config';

function Navbar({ isAuth, setIsAuth }) {
  // const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'));
  

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = '/login';
    });
  };

  return (
    <div className="navbar-container">
      <img className="navbar-img" src={Carabiner} alt="Carabiner" />
      <h1 className="navbar-logo">iClimb</h1>
      <div className="navbar-links-container">
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li>{!isAuth ? (<Link to="/login">Login</Link>) : 
          (<>
            <Link to="/createpost"> Create Post </Link>
            <button onClick={signUserOut}> Log Out </button>
          </>)}
        </li>
      </ul>
      </div>
    </div>
  );
}

export default Navbar;
