import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";
import PDF from "../assets/resume-full-stack.pdf";
import MobileNav from './MobileNav.js'
import logoImg from "../assets/logoImg.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [colorChange, setColorChange] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const changeNavbar = () => {
    if (window.scrollY > 100) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  const navbarVisible = () => {
    setDropdown(!dropdown);
  };

  window.addEventListener("scroll", changeNavbar);

  const navbarStyles = colorChange ? "navbar filled" : "navbar transparent";

  return (
    <>
      <nav className={navbarStyles}>
        <Link to={"/"}><img className="logoImg" src={logoImg} alt="Leon Forsythe logo" /></Link>
        
        <ul className="navbar-links">
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
        <i onClick={navbarVisible} className="fa-solid fa-bars hamburger"></i>
      </nav>
      {dropdown && <MobileNav color={colorChange} />}
    </>
  );
}
