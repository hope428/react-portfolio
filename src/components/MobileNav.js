import React from "react";
import PDF from "../assets/resumefile.pdf";

export default function MobileNav() {
  return (
    <ul className="mobile-navbar-menu">
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
  );
}
