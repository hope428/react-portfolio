import React from "react";
import Project from "../Project";
import projectsData from "../../data/projectsData";
import "../../styles/Project.css";

export default function Work() {
  return (
    <section className="projects" id="work">
      <h1>My Projects</h1>
      <div className="flex-row">
        <swiper-container>
          <swiper-slide>
            <Project item={projectsData[0]} />
          </swiper-slide>
          <swiper-slide>
            <Project item={projectsData[1]} />
          </swiper-slide>
          <swiper-slide>
            <Project item={projectsData[2]} />
          </swiper-slide>

          <swiper-slide>
            <Project item={projectsData[3]} />
          </swiper-slide>
        </swiper-container>
      </div>
    </section>
  );
}
