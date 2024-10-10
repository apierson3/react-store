// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faUser, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import Carabiner from './images/Carabiner.png';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase-config';

function Navbar({ isAuth, setIsAuth }) {
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
      <h1 className="navbar-logo">MoVert</h1>
      <div className="navbar-links-container">
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
            <div className='navbar-account'>
            {!isAuth ? (
              <Link to="/login">Login</Link>
            ) : (
              <div className="dropdown">
                <button className="dropbtn">
                  Account  <FontAwesomeIcon icon={faChevronDown} />
                </button>
                <div className="dropdown-content">
                  <Link to="/createpost">Create a Post</Link>
                  <Link to="/profile">
                    <FontAwesomeIcon icon={faUser} /> Profile
                  </Link>
                  <button onClick={signUserOut} className="logout-button">
                    <FontAwesomeIcon icon={faSignOutAlt} /> Log Out
                  </button>
                </div>
              </div>
              
            )}
            </div>
      </div>
    </div>
  );
}

export default Navbar;
