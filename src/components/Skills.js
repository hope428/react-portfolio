import React from "react";
import "../styles/Skills.css";
import PDF from "../assets/resumefile.pdf";

export default function Skills() {
  const technologies = [
    "fa-html5",
    "fa-css3-alt",
    "fa-js",
    "fa-react",
    "fa-bootstrap",
    "fa-node",
    "fa-square-github",
  ];

  const element = technologies.map((item) => {
    return (
      <span className="tech-item">
        <i className={`fa-brands ${item}`}></i>
      </span>
    );
  });
  return (
    <div className="tech">
      <h1>My Skills</h1>
      <div className="tech-list">{element}</div>
      <h3>
        To See all my skills, check out my{" "}
        <a className="resume-link" href={PDF} target="_blank">
          resume
        </a>
      </h3>
    </div>
  );
}
