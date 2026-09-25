import React from "react";
import "./About.css"; // import CSS

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="about-title">About Me</h2>
      <p className="about-text">
        Hi, I’m <span className="highlight">Anvee Verma</span>.  
        A passionate learner and aspiring developer. Currently pursuing , <span className="highlight">
        BCA with a specialization in Data Science & Artificial Intelligence</span>.  
        I’m driven by curiosity and the desire to build meaningful digital solutions.
        I enjoy exploring modern technologies, solving real-world problems through data, and continuously improving my skills in web development, AI, and programming .
        Outside of coding, I enjoy <span className="highlight"> Gaming, Music and Designing</span>, which keeps me inspired and creative.
       My goal is to grow as a tech professional while contributing to innovative projects that make an impact.

 
      </p>
    </section>
  );
};

export default About;
