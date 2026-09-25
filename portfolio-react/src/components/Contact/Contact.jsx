
import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-container">
      <h2>Let's Connect</h2>
      
      <div className="social-icons">
        <a href="mailto:vrmanvee@gmail.com" target="_blank" rel="noopener noreferrer">
          <Mail size={32} />
        </a>
        <a href="https://github.com/Anveeee1" target="_blank" rel="noopener noreferrer">
          <Github size={32} />
        </a>
        <a href="https://www.linkedin.com/in/anveevrm/" target="_blank" rel="noopener noreferrer">
          <Linkedin size={32} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
