import React from 'react';
import './Hero.css';
import videoSrc from './vids/samplevid.mp4'; // Make sure to place your video in the appropriate directory

function Hero() {
  return (
    <div className="hero-container">
        <div className="hero-blur">
            <video className="hero-video" src={videoSrc} autoPlay loop muted />
            <div className="hero-overlay">
                <h1>Innovative Climbing</h1>
                <p>Discover the latest in climbing technology with our cutting-edge gear designed for performance, comfortability, and safety. 
                    From ultra-ergonomic 'quick' personal anchor systems to sustainable climbing swag, our products are crafted to elevate your climbing experience.</p>
                <button className="hero-button">Start Shopping</button>
            </div>
      </div>
    </div>
  );
}

export default Hero;
