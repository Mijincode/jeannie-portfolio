import React from "react";
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import "./css/contact.css";

export default function Contact() {
  return (
    // <section id="contact" ref={sectionRef} className="contact-section">
    <section id="contact" className="contact-section">
      <div className="contact-content">
        <h1 className="contact-heading">Contact Me</h1>
        <div className="contact-links">
          <a href="mailto:jeannieuxdesign@gmail.com" className="contact-link">
            <AiOutlineMail className="contact-icon" /> Email
          </a>
          <a
            href="https://www.linkedin.com/in/mijin-lee-35b09b1b7/"
            className="contact-link"
          >
            <AiFillLinkedin className="contact-icon" /> LinkedIn
          </a>
          <a href="https://github.com/Mijincode" className="contact-link">
            <AiFillGithub className="contact-icon" /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
