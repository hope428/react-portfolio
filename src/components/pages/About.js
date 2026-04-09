import React from "react";
import bioImg from "../../assets/IMG_0597.JPG";
import Skills from "../Skills"; 
import "../../styles/About.css";

export default function About() {
  return (
    <>
      <div className="about-wrapper">
        <h1 className="about-header">Meet the developer</h1>
        <div className="about-section" id="about">
          <img className="bioImg" src={bioImg} alt="Leon outside smiling" />
          <p>
            Hey, my name is Leon Forsythe. I am a full-stack software developer
            passionate about solving problems and making cool user experiences.
            I hold a certificate in Full-Stack Development from the University
            of Pennsylvania and a Bachelor's of Science in Graphic Information
            Technology, with a focus Full-Stack Web Development from Arizona
            State University. Thank you for taking the time to look through some
            of my work. Enjoy!
          </p>
        </div>
        <Skills />
      </div>
    </>
  );
}
