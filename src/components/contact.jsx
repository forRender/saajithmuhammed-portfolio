import React from "react";
import Navbar from "./navbar.jsx";
function Contact(){
    return(
        <div className="container-fluid">
        <Navbar />   
            <h1 className="contactHead">Contact Me</h1>
              <div className="container-fluid form-body">
                <div className="row">
                <div className="col-12">
                  <div className=" formElement">
                  <div className="container ">
                    <form action="mailto:pmsaajith@gmail.com" method="POST" className="formPadding">
                        <div class="form-group">
                         <input type="text" className="form-control" placeholder="Enter your good name."/>
                        </div>
                        <div class="form-group">
                          <input type="text" className="form-control" placeholder="Your email id"/>
                        </div>
                        <div class="form-group">
                           <textarea name="message" rows="10" cols="50" className="form-control" placeholder="message">

                           </textarea> 
                        </div>
                        <div class="form-group">
                          <button type="submit" class="btn btn-light btn-block">Submit</button>
                        </div>
                      </form>
                  </div>
                      
                   </div>  
                 </div>
               </div>
              </div>   
        </div>
    )
}

export default Contact;