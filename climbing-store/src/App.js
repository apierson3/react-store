// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Products from './Products';
import Contact from './Contact';
import Login from './Login';
import './App.css';
import CreatePost from './CreatePost';

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/about" element={<About isAuth={isAuth} />} />
        <Route path="/products" element={<Products isAuth={isAuth} />} />
        <Route path="/contact" element={<Contact isAuth={isAuth} />} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth}/>}/>
      </Routes>
    </Router>
  );
}


export default App;