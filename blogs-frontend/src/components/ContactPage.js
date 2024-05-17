import React from 'react';
import '../ContactPage.css';
import Header from './Header';
import Footer from './Footer';

const ContactPage = () => {
  return (
    <>
    <Header />
    <div className="contact-page">
      
      <h1>Contact Us</h1>
      <div className="contact-form">
        <h2>Contact Form</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default ContactPage;