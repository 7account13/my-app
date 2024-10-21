import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-heading">Contact Us</h2>
      <p className="contact-description">
        We’d love to hear from you! Please fill out the form below to get in touch with us.
      </p>
      
      <form className="contact-form">
        <label className="form-label" htmlFor="name">Name</label>
        <input className="form-input" type="text" id="name" name="name" placeholder="Your Name" required />
        
        <label className="form-label" htmlFor="email">Email</label>
        <input className="form-input" type="email" id="email" name="email" placeholder="Your Email" required />
        
        <label className="form-label" htmlFor="message">Message</label>
        <textarea className="form-textarea" id="message" name="message" rows="4" placeholder="Your Message" required></textarea>
        
        <button className="submit-button" type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
