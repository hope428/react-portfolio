import React, { useRef, useState } from "react";
import Project from "../Project";
import projectsData from "../../data/projectsData";
import "../../styles/Project.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";

export default function Work() {
  return (
    <section className="projects" id="work">
      <h1>Case Studies</h1>

      <Project item={projectsData[0]} />
      <Project item={projectsData[1]} />
      <Project item={projectsData[2]} />
      
    </section>
  );
}
