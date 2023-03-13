import React from "react";
import bioImg from "../../assets/IMG_0597.JPG";
import "../../styles/About.css";

export default function About() {
  return (
    <>
      <h1 className="about-header">Meet the developer</h1>
      <div className="about-section" id="about">
        <img className="bioImg" src={bioImg} alt="Leon outside smiling" />
        <p>
          Hey, my name is Leon Forsythe. I am a full-stack software developer
          passionate about solving problems and making cool user experiences. I
          hold a certificate in Full-Stack Development from the University of
          Pennsylvania and an Associates of Liberal Sciences from the Community
          College of Allegheny County.
        </p>
      </div>
    </>
  );
}
