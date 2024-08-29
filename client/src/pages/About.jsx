import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to <strong>Journay link</strong>, your ultimate solution for seamless and convenient bus travel bookings. We are dedicated to making your travel experience as smooth and enjoyable as possible with our user-friendly platform.
      </p>

      <h2>Our Mission</h2>
      <p>
        At <strong>Journay link</strong>, our mission is to simplify the process of booking bus tickets. We aim to provide a reliable, efficient, and transparent service that helps you find the best routes and fares, all in one place.
      </p>

      <h2>Features</h2>
      <ul>
        <li><strong>Easy Booking:</strong> Book your bus tickets in just a few clicks with our intuitive interface.</li>
        <li><strong>Real-Time Availability:</strong> Get real-time updates on bus schedules and seat availability.</li>
        <li><strong>Secure Transactions:</strong> Enjoy peace of mind with our secure payment gateway and data protection measures.</li>
        <li><strong>Flexible Options:</strong> Choose from a variety of bus types and routes to suit your travel needs.</li>
        <li><strong>Customer Support:</strong> Access dedicated customer support for assistance with bookings, cancellations, or any queries.</li>
      </ul>

      <h2>Our Team</h2>
      <p>
        Our team comprises travel enthusiasts and tech experts who are passionate about enhancing your travel experience. We are constantly working to improve our services and incorporate the latest technology to meet your expectations.
      </p>

      <h2>Get in Touch</h2>
      <p>
        Have questions or feedback? Feel free to reach out to us at:
      </p>
      <ul>
        <li><strong>Email:</strong> <a href="mailto:support@[appname].com">support@[appname].com</a></li>
        <li><strong>Phone:</strong> [Phone Number]</li>
        <li><strong>Social Media:</strong> <a href="[Social Media Link]" target="_blank" rel="noopener noreferrer">[Link to Social Media Profiles]</a></li>
      </ul>

      <p>
        Thank you for choosing <strong>[App Name]</strong>. We look forward to serving you and making your journeys memorable!
      </p>
    </div>
  );
};

export default About;
