import React from "react";
import PDF from "../assets/resume-full-stack.pdf";

export default function MobileNav({ color }) {
  const styles = color
    ? "mobile-navbar-menu filled"
    : "mobile-navbar-menu transparent";

  return (
    <ul className={styles}>
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
