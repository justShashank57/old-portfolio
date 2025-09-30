import React from "react";
import { motion } from "framer-motion";
import my_image from '../images/me.webp';
import express_logo from '../images/express.webp';
import mongo_logo from '../images/mongo.webp';
import react_logo from '../images/react.webp';
import node_logo from '../images/nodejs_2.webp';

export default function Home(){
         
    return(
        <div id="main">
        <section id="home">
            <div id="homeContent">
                 <div id="introBox">
                      <h1 id="hola">Hola, I am</h1>
                      <div id="name">
                         <motion.div initial={{opacity:0}} animate={{opacity:1}} whileHover={{scale:1.2,rotate:90}} whileTap={{scale:0.8,rotate:-90,borderRadius:"100%"}} className="letter">S</motion.div>
                         <motion.div initial={{opacity:0}} animate={{opacity:1}} whileHover={{scale:1.2,rotate:90}} whileTap={{scale:0.8,rotate:-90,borderRadius:"100%"}} className="letter">H</motion.div>
                         <motion.div initial={{opacity:0}} animate={{opacity:1}} whileHover={{scale:1.2,rotate:90}} whileTap={{scale:0.8,rotate:-90,borderRadius:"100%"}} className="letter">A</motion.div>
                         <motion.div initial={{opacity:0}} animate={{opacity:1}} whileHover={{scale:1.2,rotate:90}} whileTap={{scale:0.8,rotate:-90,borderRadius:"100%"}} className="letter">S</motion.div>
                         <motion.div initial={{opacity:0}} animate={{opacity:1}} whileHover={{scale:1.2,rotate:90}} whileTap={{scale:0.8,rotate:-90,borderRadius:"100%"}} className="letter">H</motion.div>
                         <motion.div initial={{opacity:0}} animate={{opacity:1}} whileHover={{scale:1.2,rotate:90}} whileTap={{scale:0.8,rotate:-90,borderRadius:"100%"}} className="letter">A</motion.div>
                         <motion.div initial={{opacity:0}} animate={{opacity:1}} whileHover={{scale:1.2,rotate:90}} whileTap={{scale:0.8,rotate:-90,borderRadius:"100%"}} className="letter">N</motion.div>
                         <motion.div initial={{opacity:0}} animate={{opacity:1}} whileHover={{scale:1.2,rotate:90}} whileTap={{scale:0.8,rotate:-90,borderRadius:"100%"}} className="letter">K</motion.div>
                      </div>
                      <h2 id="summary">A Passionate Full-Stack Developer and a Blockchain Enthusiast.<br/> Always a Seeker and Learner.</h2>
                      <div id="socials">
                        <a href="https://github.com/justShashank57" target="_blank"><motion.img whileHover={{opacity:1}} id="github" src="square-github.svg"></motion.img></a>
                        <a href="https://www.linkedin.com/in/shashank-bidhuri-47a892249/" target="_blank"> <motion.img whileHover={{opacity:1}} id="linked" src="linkedin.svg"></motion.img></a>
                    </div>
                      
                 </div>
                 <motion.div id="bigCircle">
                    <motion.div whileHover={{scale:1.1}} drag dragConstraints={{left:0,right:0,top:0,bottom:0}} whileTap={{scale:0.9}} dragElastic={0.5} whileDrag={{scale:0.9}} className="circle" animate={{scale:1,opacity:1}} initial={{scale:0,opacity:0}} transition={{duration:0.5}}>
                       <img src={my_image} id="myPhoto"></img>
                    </motion.div>
                    <h1 id="fullStackDeveloper">Full-Stack Web Developer</h1>
                 </motion.div>
            </div>
            <div id="stack">
             <div id="techStack">
                           <h1 id="techText">Tools I Use :</h1>
                           <div id="stackBox">
                              <motion.img whileHover={{scale:1.1}} transition={{duration:0.2}} id="tool" src={mongo_logo}></motion.img>
                              <motion.img whileHover={{scale:1.1}} transition={{duration:0.2}} id="tool" src={express_logo}></motion.img>
                              <motion.img whileHover={{scale:1.1}} transition={{duration:0.2}} id="tool" src={react_logo}></motion.img>
                              <motion.img whileHover={{scale:1.1}} transition={{duration:0.2}} id="tool" src={node_logo}></motion.img>
                           </div>
             </div>
            </div>
         </section>
        </div>
    )
}