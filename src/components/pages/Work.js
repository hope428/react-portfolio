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
      <h1>My Projects</h1>
      <Swiper
        scrollbar={{
          hide: false,
        }}
        navigation={true}
        modules={[Scrollbar, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Project item={projectsData[0]} />
        </SwiperSlide>
        <SwiperSlide>
          <Project item={projectsData[1]} />
        </SwiperSlide>
        <SwiperSlide>
          <Project item={projectsData[2]} />
        </SwiperSlide>
        <SwiperSlide>
          <Project item={projectsData[3]} />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
