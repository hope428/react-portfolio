import React from "react";
import '../styles/Navbar.css'
import PDF from "../assets/resumefile.pdf";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>Leon Forsythe</h1>
      <ul>
        <li>
          <a href="#about">
            About Me
          </a>
        </li>
        <li>
          <a href="#work">
            Portfolio
          </a>
        </li>
        <li>
          <a href="#contact">
            Contact
          </a>
        </li>
        <li>
          <a href={PDF} target="_blank">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
