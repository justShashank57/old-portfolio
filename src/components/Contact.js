import React from "react";
import { motion } from "framer-motion";
import Email from "./email.js"
export default function Contact(){
    return(
        <div id="contactMe">
            <div id="first">
                <h1 id="collab">Wanna Collab ?</h1>
                <h1 id="quoteTwo">"Alone, we can do so little; together, we can do so much."</h1>
                <h3 id="quoteTwo">Thanks for stopping by my Profile. If you have any questions, project ideas, or <br/>just want to chat, I'd love to hear from you.<br/><br/>Let's Chat</h3>
            </div>

            <div id="second">
            <motion.h1 whileHover={{letterSpacing:"8px"}} id="findMe">Find me on:</motion.h1>
            <div id="mediaHandles">
                <a href="https://github.com/justShashank57" target="_blank" rel="noreferrer"><motion.img whileHover={{opacity:1}} id="github" src="square-github.svg" alt="GitHub"></motion.img></a>
                <a href="https://www.linkedin.com/in/shashank-bidhuri-47a892249/" target="_blank" rel="noreferrer"><motion.img whileHover={{opacity:1}} id="linked" src="linkedin.svg" alt="LinkedIn"></motion.img></a>
                <a href="https://www.instagram.com/just_shashank__/" target="_blank" rel="noreferrer"><motion.img whileHover={{opacity:1}} id="instagram" src="square-instagram.svg" alt="Instagram"></motion.img></a>
            </div>
            <h1 id="hola">or</h1>
            <Email/>
            </div>
        </div>
    )
}