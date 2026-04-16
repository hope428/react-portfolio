import React from "react";
import Navbar from "../Navbar";
import "../../styles/CaseStudy.css";
import Footer from "../Footer";
import img1 from "../../assets/project-4/img1.png";
import img2 from "../../assets/project-4/img2.png";
import img3 from "../../assets/project-4/img3.png";
import img4 from "../../assets/project-4/img4.png";
import img5 from "../../assets/project-4/img5.png";

export default function Project4() {
  return (
    <>
      <Navbar />
      <main id="case-study-main">
        <h1 className="case-study-header">Guitar Chord Mastery</h1>
        <div className="case-study-overview">
          <img src={img1} />
          <p>
            This project was created with HTML, CSS, and Javascript to help beginner and intermediate guitarists with chords. Initially, I defined the wireframes in Figma, and transferred them to VS Code with HTML and CSS. The user is able to view chords by categories and save / unsave chords from a list of favorites stored in their browser's localStorage variables.
          </p>
        </div>
        <div className="case-study-process">
          <h1 className="case-study-header">Process</h1>
          <div className="case-study-process-inner">
            <p>
              I started out with wireframes created in Figma and transferred them to HTML and CSS. Most of the dynamic contant was left blank in the HTML code and filled in on button click with Javascript. I also utilized the browser's localStorage function so the user could save chords to a library of their own. My regret was not creating a login and database for individual users, as this would create a more secure and long-lasting favorites list, but this will be added at a later date. I designed all the chord diagrams on a free resource called <a href="chordpic.com">Chordpic.com</a> !
            </p>
            <div className="imgs">
              <img src={img2} className="top" />
              <img src={img3} />
              <img src={img5} />
            </div>
          </div>
        </div>
        <div className="case-study-reflection">
          <h1 className="case-study-header">Results</h1>
          <div className="case-study-process-inner">
            <img src={img4} />
            <p>
              The finished project had the minimum features of chord diagrams, a favorites section, a welcome page, and the chord library sections based off category. What I would have really like to implement was a flashcard feature, where the user could see their favorite chord cards with a countdown of 3-5 seconds, and play their guitar along with the chord on the screen. This will definitely be the next step for future development.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
