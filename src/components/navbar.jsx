import React from "react";

function Navbar(){
    
    return(
        <div className="container-fluid">
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler">
               <span class="navbar-toggler-icon"></span>
            </button>
           <div className="collapse navbar-collapse" id="navbarToggler">

            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">About Me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/works">Works</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact</a>
            </li>
          </ul>
           </div>

           </nav>
        </div>
    )
}

export default Navbar;