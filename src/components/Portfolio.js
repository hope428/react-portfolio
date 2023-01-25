import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import About from "./pages/About"
import Work from "./pages/Work"
import Resume from "./pages/Resume"
import Contact from "./pages/Contact"
import Footer from "./Footer";


export default function Portfolio() {

    const [page, setPage] = useState('about')

    const renderPage = () => {
        if (page === 'about'){
            return <About />
        } else if (page === 'resume'){
            return <Resume />
        } else if (page === 'work') {
            return <Work />
        } else {
            return <Contact />
        }
    }

    const handlePageChange = (selectedPage) => {setPage(selectedPage)}

    return (
        <>
            <Navbar handlePageChange={handlePageChange} page={page}/>
            {renderPage()}
            <Footer />
        </>
    )
}
