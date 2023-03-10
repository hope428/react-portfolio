import React from "react";
import Navbar from "./Navbar";
import About from "./pages/About"
import Work from "./pages/Work"
import Contact from "./pages/Contact"
import Footer from "./Footer";
import Header from "./Header";
import Skills from "./Skills";


export default function Portfolio() {


    return (
        <>
            <Navbar />
            <Header />
            <Skills />
            <Work />
            {/* <About /> */}
            {/* <Contact /> */}
            <Footer />
        </>
    )
}
