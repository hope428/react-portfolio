import React from "react";
import Navbar from "../Navbar";
import "../../styles/CaseStudy.css";
import Footer from "../Footer";
import img1 from "../../assets/project-2/img1.png";
import img2 from "../../assets/project-2/img2.png";
import img3 from "../../assets/project-2/img3.png";
import img4 from "../../assets/project-2/img4.png";
import img5 from "../../assets/project-2/img5.png";

export default function Project2() {
  return (
    <>
      <Navbar />
      <main id="case-study-main">
        <h1 className="case-study-header">
          Travel HQ - Your Next Destination Awaits
        </h1>
        <div className="case-study-overview">
          <img src={img1} />
          <p>
            This project was created for travel enthusiasts to find inspiration
            and accommodations for their next adventure. It is designed to
            provide travel guides and accommodations for the user based on
            location. The inspiration that inspired me to create this project is
            a website called Wanderlog. It is a travel tracking and journaling
            application. I was greatly inspired by this application to create a
            version of my own.
          </p>
        </div>
        <div className="case-study-process">
          <h1 className="case-study-header">Process</h1>
          <div className="case-study-process-inner">
            <p>
              The project is created using HTML, CSS, Javascript, and jQuery.
              The about section and landing header were created using jQuery.
              The sign up form currently uses the browser’s local storage to
              store the users information. I also created the travel inspiration
              section using Unsplash’s free API to give users stunning images of
              their destinations.
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
              At this time the project features a landing page that explains the
              main features of the project, as well as a sign up form. The
              project also features a unique “destination inspiration” section
              to show the user photos of potential destinations. In the future,
              this application will include ways to help the user with finding
              accommodations as well as flights. Live project can be viewed
              here: https://hope428.github.io/travel-hq/
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
