import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-blur">
      <h1>About Us</h1>
      <section>
        <h2>Our Mission</h2>
        <p>
          At iClimb, our mission is to empower climbers of all levels with the highest quality gear and innovative solutions. We believe that climbing is not just a sport, but a way of life that fosters resilience, adventure, and a deep connection with nature.
        </p>
      </section>
      <section>
        <h2>Our Story</h2>
        <p>
          Founded by passionate climbers, iClimb started as a small ecommerce shop and has grown into a trusted name in the climbing community. Our journey began with a simple goal: to provide climbers with gear that combines performance, safety, and sustainability. Over the years, we've expanded our product range and built a community of climbers who share our love for the sport.
        </p>
      </section>
      <section>
        <h2>What We Offer</h2>
        <ul>
          <li><strong>Innovative Gear:</strong> From ultra-ergonomic harnesses to eco-friendly ropes, our products are designed to enhance your climbing experience.</li>
          <li><strong>Expert Advice:</strong> Our team of experienced climbers is here to offer personalized advice and support, whether you're a beginner or a seasoned pro.</li>
          <li><strong>Community Engagement:</strong> We host events, workshops, and climbing trips to bring climbers together and foster a supportive community.</li>
        </ul>
      </section>
      <section>
        <h2>Our Values</h2>
        <ul>
          <li><strong>Quality:</strong> We are committed to offering only the best products that meet the highest standards of performance and safety.</li>
          <li><strong>Sustainability:</strong> We prioritize eco-friendly materials and practices to minimize our environmental impact.</li>
          <li><strong>Innovation:</strong> We continuously seek out new technologies and designs to improve our gear and your climbing experience.</li>
          <li><strong>Community:</strong> We believe in the power of community and strive to create a welcoming and inclusive environment for all climbers.</li>
        </ul>
      </section>
      <section>
        <h2>Join Us</h2>
        <p>
          Whether you're scaling your first wall or tackling advanced routes, iClimb is here to support your climbing journey. Explore our range of products, connect with fellow climbers, and join us in celebrating the spirit of adventure.
        </p>
      </section>
      </div>
    </div>
  );
}

export default About;
