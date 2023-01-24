import React from "react";
import Project from "../Project"
import projectsData from "../../data/projectsData"

export default function Work(){
    return (
        <div className="container">
            {projectsData.map((item) => {
               return <Project item={item}/>
            })}
        </div>
    )
}