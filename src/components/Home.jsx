import React from "react";

function Home(){
    return(
        <div className="container-fluid">

        <div className="row">
           <div className="col-lg-6 intro vh-100" >
              <h1 className="name" >Saajith Muhammed</h1>
              <h4 className="subHead">CIVIL ARCHITECTURAL DRAFTSMAN</h4>
           </div>
           <div className="col-lg-6 btnSec vh-100">
           
           <div className="profilePic">
             <img className="pic" src="/drawings/saajith.jpg"></img>
           </div>
           
             <div className="btnArrange">
             <div className="btnGroup">
               <a href="/about" class="btn btn-secondary btn-lg btn-block " role="button">Know About Me</a>
               <a href="/works" class="btn btn-secondary btn-lg btn-block " role="button">Works</a>
               <a href="/contact" class="btn btn-secondary btn-lg btn-block " role="button">Contact</a> 
             </div>
               
             </div>
             
           </div>
        </div>
        </div>
        
    )
}

export default Home;