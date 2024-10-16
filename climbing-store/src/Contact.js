import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-blur">
        <h1>Contact Us</h1>
        <section>
          <h2>Get in Touch</h2>
          <p>We'd love to hear from you! Whether you have questions about our products, need assistance with an order, or just want to chat about climbing ideas, reach out to us.</p>
        </section>
        <section>
          <h2>Contact Information</h2>
          <ul>
            <li><strong>Email:</strong> aptest123mizzou@gmail.com </li>
            <li><strong>Address:</strong> Kansas City, Missouri</li>
          </ul>
        </section>
        <section>
          <h2>Follow Us</h2>
          <ul>
            <li><strong>Instagram:</strong> pierson_andrew</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Contact;
