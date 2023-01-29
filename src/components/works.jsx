import React from "react";
import Navbar from "./navbar.jsx";
import drawings from "../myDrawings.js";
import Structure from "./workStructure.jsx";


function Works(){
    
    return(
        <div className="container-fluid">
           <Navbar /> 
           <h1 className="heading">Rice Control Building</h1>
           <div className="col-12">
              {drawings.map((item)=>{
                 return(
                    <Structure 
                    subHeading={item.title}
                    drawing={item.sheet}
                     />
                       )
              })}
           </div>
        </div>
    )
}

export default Works;


