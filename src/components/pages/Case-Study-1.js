import React from "react";
import Navbar from "../Navbar";
import "../../styles/CaseStudy.css";
import Footer from "../Footer";
import img1 from "../../assets/project-1/img1.png";
import img2 from "../../assets/project-1/img2.png";
import img3 from "../../assets/project-1/img3.png";
import img4 from "../../assets/project-1/img4.png";
import img5 from "../../assets/project-1/img5.png";

export default function Project1() {
  return (
    <>
      <Navbar />
      <main id="case-study-main">
        <h1 className="case-study-header">
          SagaV - An immersive e-commerce experience
        </h1>
        <div className="case-study-overview">
          <img src={img1} />
          <p>
            The project goal was to take a set of products, designs, and
            branding from the marketing team and create an immersive website
            experience to sell and advertise the products. This work is a line
            of mocktails - alcohol free beverages that consumers can enjoy
            anytime and anywhere. The project is inspired by 0 alcohol beverage
            alternatives, as well as the theming being inspired by tarot cards
            and magic.
          </p>
        </div>
        <div className="case-study-process">
          <h1 className="case-study-header">Process</h1>
          <div className="case-study-process-inner">
            <p>
              The project was first broken into teams. As part of the web
              development team, I was given a set of designs and products from
              the marketing and branding teams. The development team first
              created multiple wireframes on Figma for the initial page layouts
              and functionality - both desktop and mobile. We then developed the
              live software, using Github for collaboration and version control.
              The software was created using Javascript. I was solely
              responsible for the product shop page - where I created responsive
              and dynamic layouts to showcase each product. I also contributed
              to multiple other pages on the website and wireframes.
            </p>
            <div className="imgs">
              <img src={img2} className="top"/>
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
              The work met each minimum requirement for the first deadline. We
              were able to get a complete web page, cart page, shop, and about
              pages by the deadline. The project can be viewed at
              https://tourmaline-trifle-f8573d.netlify.app/
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
