// src/Home.js
import React from 'react';
import './Home.css';
import Hero from './Hero';
import Posts from './Posts';

function Home() {
  return (
      <div>
        <Hero />
        <Posts />
      </div>
  );
}

export default Home;