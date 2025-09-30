import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Contact from "./components/Contact";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Project";
import Navbar from "./components/Navbar";

export default function App(){

    return (
        <Router>
                
                <Navbar/>
                <Home/>
                {/* <Routes>
                  <Route exact path="/" element={<Home/>}/>
                  <Route path="/skills" element={<Skills/>}/>
                  <Route path="/Projects" element={<Projects/>}/>
                  <Route path="/contact" element={<Contact/>}/>
                </Routes> */}
                <Skills/> 
                <Projects id="projects"/>
                <Contact/>
      </Router>
    )
}