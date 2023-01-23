import React from "react";

export default function Navbar({ handlePageChange, page }) {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="#about" onClick={() => handlePageChange("about")}>
            About Me
          </a>
        </li>
        <li>
          <a href="#work" onClick={() => handlePageChange("work")}>
            Portfolio
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => handlePageChange("contact")}>
            Contact
          </a>
        </li>
        <li>
          <a href="#resume" onClick={() => handlePageChange("resume")}>
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
