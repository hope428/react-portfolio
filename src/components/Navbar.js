import React from "react";

export default function Navbar({ handlePageChange, page }) {
  return (
    <nav className="navbar">
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
        <li className={page === 'about' ? 'resume' : ''}>
          <a href="#resume" onClick={() => handlePageChange("resume")}>
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
