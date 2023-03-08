import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import About from "./pages/About"
import Work from "./pages/Work"
import Resume from "./pages/Resume"
import Contact from "./pages/Contact"
import Footer from "./Footer";


export default function Portfolio() {


    return (
        <>
            <Navbar />
            <About />
            <Work />
            <Contact />
            <Footer />
        </>
    )
}
