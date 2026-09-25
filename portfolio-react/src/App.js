import React from "react";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Project from "./components/Projects/Project";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Particles from "./components/Particles/Particles";

function App() {
  return (
    <div>
     <Particles count />    {/* change count */}
      <div className="site-content"></div>
      
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
      <Navbar />
    
    </div>
  );
}

export default App;
