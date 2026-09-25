import React, { useState, useEffect, useRef } from "react";
import { Home, UserPen, Image,BookOpen, PhoneCall } from "lucide-react"; // icons
import "./Navbar.css";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const hideTimeout = useRef(null); // store timeout reference

  useEffect(() => {
    const handleMouseMove = (e) => {
      const distanceFromBottom = window.innerHeight - e.clientY;

      if (distanceFromBottom < 50) {
        // near bottom → show navbar
        clearTimeout(hideTimeout.current);
        setShowNav(true);
      } else {
        // away from bottom → wait 2s before hiding
        clearTimeout(hideTimeout.current);
        hideTimeout.current = setTimeout(() => {
          setShowNav(false);
        }, 1000); // 👈 delay before hiding
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(hideTimeout.current);
    };
  }, []);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id.toLowerCase()); // make id safe
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`navbar-container ${showNav ? "show" : ""}`}>
      <ul className="navbar">
        <li className="nav-item" onClick={() => handleScrollTo("home")}>
          <Home className="nav-icon" />
          <span>Home</span>
        </li>
        <li className="nav-item" onClick={() => handleScrollTo("about")}>
          <UserPen className="nav-icon" />
          <span>About</span>
        </li>
        <li className="nav-item" onClick={() => handleScrollTo("skills")}>
          <BookOpen className="nav-icon" />
          <span>Skills</span>
        </li>
        <li className="nav-item" onClick={() => handleScrollTo("projects")}>
          <Image className="nav-icon" />
          <span>Project</span>
        </li>
        <li className="nav-item" onClick={() => handleScrollTo("Contact")}>
          <PhoneCall className="nav-icon" />
          <span>Contact</span>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
