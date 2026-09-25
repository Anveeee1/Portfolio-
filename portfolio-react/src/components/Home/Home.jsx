import React from "react";
import "./Home.css";
import Particles from "../Particles/Particles";

const Home = () => {
  return (
    <section id="home" className="home">
       <Particles count={20} /> 
      <h1 className="home-title">Hi, I'm Anvee </h1>
      <p className="home-subtitle">A Web Developer | Designer | Coder</p>
    </section>
  );
};

export default Home;
