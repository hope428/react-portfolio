import React from "react";
import '../styles/Header.css'

export default function Header(){
    return (
        <div className="header">
            <span className="typewriter introduction"><h1>Hi, I'm Leon Forsythe.</h1></span>
            <span className="typewriter subtitle">Full-Stack Developer.</span>
            <span className="arrow"></span>
        </div>
    )
}