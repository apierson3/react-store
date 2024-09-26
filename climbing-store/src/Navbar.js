// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Carabiner from './images/Carabiner.png';

function Navbar() {
  return (
    <div className="navbar-container">
      <img className="navbar-img" src={Carabiner} alt="Carabiner" />
      <h1 className="navbar-logo">MyApp</h1>
      <div className="navbar-links-container">
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      </div>
    </div>
  );
}

export default Navbar;
