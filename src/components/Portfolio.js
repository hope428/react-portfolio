import { render } from "@testing-library/react";
import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import Home from "./pages/Home"
import About from "./pages/About"
import Portfolio from "./pages/Portfolio"
import Resume from "./pages/Resume"

export default function Portfolio() {

    const [page, setPage] = useState('home')

    const renderPage = () => {
        if(page === 'home'){
            return <Home />
        } else if (page === 'portfolio'){
            return <About />
        } else if (page === 'resume'){
            console.log("at resume page");
        } else {
            console.log("at contact");
        }
    }

    const handlePageChange = (selectedPage) => {setPage(selectedPage)}

    return (
        <>
            <Navbar />
            {renderPage()}
        </>
    )
}
