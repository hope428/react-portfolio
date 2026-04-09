import React from "react";
import Navbar from "../Navbar";
import "../../styles/CaseStudy.css";
import Footer from "../Footer";
import img1 from "../../assets/project-3/img1.png";
import img2 from "../../assets/project-3/img2.png";
import img3 from "../../assets/project-3/img3.png";
import img4 from "../../assets/project-3/img4.png";
import img5 from "../../assets/project-3/img5.png";

export default function Project3() {
  return (
    <>
      <Navbar />
      <main id="case-study-main">
        <h1 className="case-study-header">Ibanez Guitar E-Commerce site</h1>
        <div className="case-study-overview">
          <img src={img1} />
          <p>
            This project was created to showcase some of Ibanez guitar’s best
            selling products. Another reason the project was created was to
            showcase a basic e-commerce layout, complete with a contact form and
            a functional cart with products, tax, and price calculations. The
            inspiration behind this project was the official website for Ibanez
            guitars. They are my favorite guitar brand and they have a stunning
            website. However, for my project I wanted to take it in more of an
            e-commerce direction, while the official website showcases other
            areas.
          </p>
        </div>
        <div className="case-study-process">
          <h1 className="case-study-header">Process</h1>
          <div className="case-study-process-inner">
            <p>
              I built this application using HTML, CSS, and Javascript. The
              project guidelines explicitly stated that it be a one page
              application. The top portion of the page features a hero image and
              an about section, while the bottom portion of the page features a
              list of products, each with an add to cart button, and a cart with
              options to remove products or checkout. I was able to create a
              fully functioning cart for this project using Javascript. I also
              used Javascript and CSS to create a light/dark mode feature.
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
              The project performed as expected and met all criteria. The cart
              was fully functional and there was a list of products for the user
              to purchase. The project also fulfilled the contact form
              requirement. Live demo of the project can be viewed here:
              https://hope428.github.io/ibanez-guitars-single-page/
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
