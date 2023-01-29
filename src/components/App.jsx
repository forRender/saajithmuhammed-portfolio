import React from "react";
import About from "./about.jsx";
import Contact from "./contact.jsx";
import Home from "./Home.jsx";
import Works from "./works.jsx";
import drawings from "../myDrawings.js";

import {Routes,Route} from "react-router-dom";

function App(){
    return (
        <div>
        
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/works" element={<Works/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
        
        </div>
    )
}

export default App;