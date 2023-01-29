import React from "react";
import Navbar from "./navbar";
function About(){
    return(
       <div className="container-fluid ">
       <Navbar /> 
         <div className="icon content">
           <a href="https://www.linkedin.com/in/saajith-muhammed-797605222/">Linkedin<i class="fa fa-linkedin lnkdn " aria-hidden="true"></i></a> 
           <a href="#">+974 50097305<i class="fa fa-phone phn " aria-hidden="true"></i></a> 
         </div>

         <div className="abtmainContent">
            <h1 className="heading">about me</h1>
           <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 firstIntro">
              <h2>
                Hi. I'm Saajith, please look around and check my Linkedin profile to know more about my experience and background.
              </h2>  
            </div> 
            <div className="col-lg-6 col-md-6 secondIntro">
                <p>
              I'm a young passionate Civil Architectural Senior Draftsman who's having more than ten years of experience
              in Qatar. By this time I have worked on several complex, large-scale construction projects of GCC. I'm an Indian national and a Civil Engineering Diploma holder and a certified draftsman from an Autodesk authorised CAD intitute in Thrissur, Kerala.Get in touch with me for further work related queries. 
                </p>
           </div>
         </div>
         </div>
         
       </div>
        
    )
}

export default About;

