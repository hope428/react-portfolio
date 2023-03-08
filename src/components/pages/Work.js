import React from "react";
import Project from "../Project"
import projectsData from "../../data/projectsData"
import "../../styles/Project.css"

export default function Work(){
    return (
        <section>
        <h1>My Projects</h1>
        <div className="container" id="work">
            {projectsData.map((item) => {
               return <Project item={item}/>
            })}
        </div>
        </section>
    )
}