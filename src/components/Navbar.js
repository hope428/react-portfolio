import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";
import PDF from "../assets/resumefile.pdf";

export default function Navbar() {
  const [colorChange, setColorChange] = useState(false);

  const changeNavbar = () => {
    if (window.scrollY > 100) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  window.addEventListener('scroll', changeNavbar)

  const navbarStyles = colorChange ? "navbar filled" : "navbar transparent"

  return (
    <nav className={navbarStyles}>
      <h1>Leon Forsythe</h1>
      <ul>
        <li>
          <a href="#about">About Me</a>
        </li>
        <li>
          <a href="#work">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
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
