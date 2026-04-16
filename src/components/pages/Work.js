import React, { useRef, useState } from "react";
import Project from "../Project";
import projectsData from "../../data/projectsData";
import "../../styles/Project.css";

export default function Work() {
  return (
    <section className="projects" id="work">
      <h1 className="case-studies-head">Case Studies</h1>

      <Project item={projectsData[0]} />
      <Project item={projectsData[1]} />
      <Project item={projectsData[2]} />
      <Project item = {projectsData[3]}/>

    </section>
  );
}
