import React from "react";

export default function Navbar () {
    return (
        <nav className="navbar">
            <ul>
                <li>About Me</li>
                <li className="active">Portfolio</li>
                <li>Contact</li>
                <li>Resume</li>
            </ul>
        </nav>
    )
}