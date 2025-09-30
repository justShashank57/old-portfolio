import React from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";

export default function Card(props){
      const[showDetails,setShowDetails] = React.useState(false);
      const[flip,setFlip] = React.useState(false);
      const cardRef = React.useRef(null);
      const tiltInstanceRef = React.useRef(null);
      
      React.useEffect(()=>{
            
            if (!showDetails) {
                  tiltInstanceRef.current = VanillaTilt.init(cardRef.current, {
                    max: 25,
                    speed: 400,
                  });
                } else {
                  console.log("destroying")
                  tiltInstanceRef.current && cardRef.current.VanillaTilt.destroy();
                }
      },[showDetails])
      

      function changeFlip(){
            setFlip(prev=>!prev);
       }

      function changeFormat(event){
            props.setClickedIndex(props.index)
            changeFlip();
            setTimeout(()=>{
                  setShowDetails(prevState=>!prevState);
            },400)
            
            // stopTilt(event.target);
      }
      // function stopTilt(element){
      //       VanillaTilt.default.destroy(element)
      // }
     
     let pos = `cardBorder ${props.obj.class}`;
     const styles = {
      backgroundImage:"none"
     }
      const variants = {
            initial:{
                  opacity:1,
                  scale:0.5
            },
            animate:{
                  opacity:1,
                  scale:1,
                  transition:{
                        duration:0.5
                  },
            },
            flipOn:{
                  // scale:0,
                  opacity:0,
                  rotateY:180,
                  transition:{
                        duration:0.5
                  },
                  
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
      return (
            
                  <>
                  {
                   !showDetails &&
                   <motion.div
                    ref={cardRef}
                    variants={variants} 
                  //   initial="initial" 
                    animate={flip?"flipOn":"animate"}
                    className={pos} 
                    style={showDetails?styles:{backgroundImage:`url(${props.obj.img})`}}
                    onClick={changeFormat}
                    data-tilt-glare
                    data-tilt-max-glare="1"
                    >    
                                <div id="frontPart">
                                      <h1 id="frontText">{props.obj.name}</h1>
                                </div>
                    </motion.div>
                  }
                  {
                        showDetails&&
                        <motion.div
                        variants={variants}
                        className={pos}
                        animate={flip?{scale:2}:"flipOff"}
                        transition={{duration:0.4}}
                         id="backpart"
                         onClick={changeFormat}
                         >
                        <h1 id="backText">{props.obj.name}</h1>
                        <h3 id="backTech">Tech Stack: {props.obj.tech}</h3>
                        <p id="backDesc">{props.obj.desc}</p>
                        <a href={props.obj.link} target="_blank" rel="noreferrer">
                        <motion.div id="visit" whileHover={{scale:1.1}}>Visit</motion.div>
                        </a>
                        </motion.div>
                  }
                  </>
                  

            
            
      )
}