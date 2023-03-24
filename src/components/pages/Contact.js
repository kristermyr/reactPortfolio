import React from 'react';
export default function Contact() {
  return (
    <div className="containerForm">
      <form>
        <h3>Get in touch!</h3>
        <input type="text" id="name" placeholder="Your Name" required></input>
        <input type="text" id="email" placeholder="Your Email" required></input>
        <textarea type="text" id="message" rows="4" placeholder="Write your message" required></textarea>
        <button type="submit">Send message</button>
      </form>
    </div>
  );
}