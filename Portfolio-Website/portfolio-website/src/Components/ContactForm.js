import React from "react";
import "./contactForm.css";

export default function ContactForm() {
  return (
    <div id="contact-form-container">
      <h1>Contact Me</h1>
      <form className="contact-form-inputs-container">
      
        <div className="input-container name-container">
          <label htmlFor="name">Full Name</label>
          <input id="name" type="text" placeholder="Vishwjeet Ujgare" />
        </div>

        <div className="input-container email-container">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="vrvishwujgare@gmail.com" />
        </div>

        <div className="input-container phone-container">
          <label htmlFor="phone">Phone Number</label>
          <input id="phone" type="number" placeholder="9284452980" />
        </div>

        <div className="input-container message-container">
          <label htmlFor="message">Your Message</label>
          <textarea id="message" rows="4" placeholder="Write your message here"></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
