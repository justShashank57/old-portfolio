import React from "react";
import ProgressBar from "./progressWheel";
import { motion } from "framer-motion";

export default function Skills(){
    const[showSkills,setShowSKills] = React.useState(true);
    const[flip,setFlip] = React.useState(true);
    function handleClick(){
        changeFlip();
        setTimeout(()=>{
            setShowSKills(prevState=>!prevState);
        },400)
    }
    function changeFlip(){
        setFlip(prev=>!prev);
   }
    const variants = {
        initial:{
           opacity:0,
           scale:0
        },
        animate:{
          opacity:1,
          scale:1,
          transition:{
            duration:0.5
          }
        },
        flip:{
          opacity:0,
          rotateY:180,
          duration:{
            duration:0.6
          }
        },
        flipOff:{
            // scale:0,
            opacity:0,
            rotateY:180,
            transition:{
                  duration:0.5
            },
            
      }
    }
    return(
        <div id="skillRoot"
        > 
                 
            {
                showSkills ?
                <motion.div
                variants={variants}
                id="skills"
                initial={{scale:0.5,opacity:0}}
                animate={flip?{scale:1,opacity:1}:"flipOff"}
                transition={{duration:0.6}}
                onClick={handleClick}
                >
            <motion.h1 whileHover={{letterSpacing:"10px"}} id="skillText">Skills</motion.h1>
            <div id="skillBox">
                <div className="skill">
                    <ProgressBar percentage={80} circleWidth={90}/>
                    <h4 className="lang">C</h4>
                </div>
                <div className="skill">
                    <ProgressBar percentage={82} circleWidth={90}/>
                    <h4 className="lang">C++</h4>
                </div>
                <div className="skill">
                    <ProgressBar percentage={75} circleWidth={90}/>
                    <h4 className="lang">SQL</h4>
                </div>
                <div className="skill">
                    <ProgressBar percentage={85} circleWidth={90}/>
                    <h4 className="lang">HTML</h4>
                </div>
                <div className="skill">
                    <ProgressBar percentage={85} circleWidth={90}/>
                    <h4 className="lang">CSS</h4>
                </div>
                <div className="skill">
                    <ProgressBar percentage={80} circleWidth={90}/>
                    <h4 className="lang">JavaScript</h4>
                </div>
                <div className="skill">
                    <ProgressBar percentage={80} circleWidth={90}/>
                    <h4 className="lang">MongoDB</h4>
                </div>
                <div className="skill">
                    <ProgressBar percentage={80} circleWidth={90}/>
                    <h4 className="lang">ExpressJS</h4>
                </div>
                <div className="skill">
                    <ProgressBar percentage={83} circleWidth={90}/>
                    <h4 className="lang">React</h4>
                </div>
                <div className="skill">
                    <ProgressBar percentage={83} circleWidth={90}/>
                    <h4 className="lang">NodeJs</h4>
                </div>
            </div>
            </motion.div>
            :
               <motion.div 
                 variants={variants} 
                 whileHover={{scale:1.1}} 
                 initial="initital" 
                 animate={flip?"flip":"animate"}
                 transition={{duration:0.5}} 
                 id="skillCard" 
                 onClick={handleClick}
                 >
                      <h1 id="quote">- Knowledge is not skill,<br/>Knowledge plus ten thousand times is Skill.</h1>
                 </motion.div>
            }
            
            
        </div>
    )
}