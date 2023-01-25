import React from "react";
import '../styles/Navbar.css'

export default function Navbar({ handlePageChange, page }) {
  return (
    <nav className="navbar">
      <h1>Leon Forsythe</h1>
      <ul>
        <li className={page === 'about' ? 'active' : ''}>
          <a href="#about" onClick={() => handlePageChange("about")}>
            About Me
          </a>
        </li>
        <li className={page === 'work' ? 'active' : ''}>
          <a href="#work" onClick={() => handlePageChange("work")}>
            Portfolio
          </a>
        </li>
        <li className={page === 'contact' ? 'active' : ''}>
          <a href="#contact" onClick={() => handlePageChange("contact")}>
            Contact
          </a>
        </li>
        <li className={page === 'resume' ? 'active' : ''}>
          <a href="#resume" onClick={() => handlePageChange("resume")}>
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
