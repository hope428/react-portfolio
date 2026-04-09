import React from "react";
import Navbar from "../Navbar";
import "../../styles/CaseStudy.css";
import Footer from "../Footer";


export default function Project2() {
  return (
    <>
      <Navbar />
      <main id="case-study-main">
        <h1 className="case-study-header">Project 2</h1>
        <div className="case-study-overview">
          <img src="https://placehold.co/600x400" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            lacinia ac felis ac semper. Vestibulum in lobortis diam. Praesent
            sit amet felis eleifend, ultrices felis quis, placerat nunc. Integer
            consequat elit non tellus laoreet, quis rutrum risus eleifend.
            Nullam fringilla porta mollis. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Praesent
            malesuada at neque et congue.
          </p>
        </div>
        <div className="case-study-process">
          <h1 className="case-study-header">Process</h1>
          <div className="case-study-process-inner">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse lacinia ac felis ac semper. Vestibulum in lobortis
              diam. Praesent sit amet felis eleifend, ultrices felis quis,
              placerat nunc. Integer consequat elit non tellus laoreet, quis
              rutrum risus eleifend. Nullam fringilla porta mollis. Vestibulum
              ante ipsum primis in faucibus orci luctus et ultrices posuere
              cubilia curae; Praesent malesuada at neque et congue.
            </p>
            <img src="https://placehold.co/600x400" />
          </div>
        </div>
        <div className="case-study-reflection">
          <h1 className="case-study-header">Reflection</h1>
          <div className="case-study-process-inner">
            <img src="https://placehold.co/600x400" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse lacinia ac felis ac semper. Vestibulum in lobortis
              diam. Praesent sit amet felis eleifend, ultrices felis quis,
              placerat nunc. Integer consequat elit non tellus laoreet, quis
              rutrum risus eleifend. Nullam fringilla porta mollis. Vestibulum
              ante ipsum primis in faucibus orci luctus et ultrices posuere
              cubilia curae; Praesent malesuada at neque et congue.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
