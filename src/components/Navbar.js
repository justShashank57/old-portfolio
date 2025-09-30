import React from "react";
import { motion } from "framer-motion";
export default function Navbar(){
    const[clickedPage,setClickedPage] = React.useState(0n);
        
        function handleClick(event){
            let key = parseInt(event.target.getAttribute('data-key'));
            console.log(key)
            setClickedPage(key);
        }
        
        document.querySelectorAll('.smooth-scroll').forEach(anchor => {
           anchor.addEventListener('click', function (e) {
           e.preventDefault();
           
           const target = document.querySelector(this.getAttribute('href'));
           const offsetTop = target.offsetTop;
           
           window.scrollTo({
             top: offsetTop,
             behavior: 'smooth'
           });
         });
       });
    return (
        <nav>
            <ul>
                <motion.li whileHover={{letterSpacing:"5px"}}>
                <a data-key={0} style={clickedPage===0?{borderBottom:"1px solid #333333"}:{borderBottom:"none"}} onClick={handleClick}  className="link smooth-scroll" href="#main">Home</a>
                </motion.li>
                <motion.li whileHover={{letterSpacing:"5px"}}>
                <a data-key={1} style={clickedPage===1?{borderBottom:"1px solid #333333"}:{borderBottom:"none"}} onClick={handleClick} className="link smooth-scroll" href="#skillRoot">Skills</a>
                </motion.li>
                <motion.li  whileHover={{letterSpacing:"5px"}}>
                <a data-key={2} style={clickedPage===2?{borderBottom:"1px solid #333333"}:{borderBottom:"none"}} onClick={handleClick} className="link smooth-scroll" href="#projectRoot">Projects</a>
                </motion.li>
                <motion.li  whileHover={{letterSpacing:"5px"}}>
                <a data-key={3} style={clickedPage===3?{borderBottom:"1px solid #333333"}:{borderBottom:"none"}} onClick={handleClick} className="link smooth-scroll" href="#contactMe">Contact me</a>
                </motion.li>
            </ul>
        </nav>
        
    )
}