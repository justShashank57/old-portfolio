import React from "react";
import data from "./projectData";
import ProjectCard from "./projectCard";
import { motion } from "framer-motion";

export default function Projects(){
    const[clickedIndex,setClickedIndex] = React.useState(-1);
    console.log(clickedIndex)
    const projectElements= data.map((obj,index)=>{
        return(
            <ProjectCard obj={obj} index={index} clickedIndex={clickedIndex} setClickedIndex={setClickedIndex}/>
        )
    })
    return(
        <div id="projectRoot">
        <div><motion.h1 whileHover={{letterSpacing:"10px"}} id="projectText" style={{textAlign:"center"}}>Projects</motion.h1></div>
        <div id="cardBox">
            {projectElements}
        </div>
        </div>
    )
}