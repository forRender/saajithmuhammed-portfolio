import React from "react";

function Structure(props){
    return(
        <div className="card">
          <div class="card-header">
            <h3>{props.subHeading}</h3>
          </div>
          <div className="card-body">
            <img src={props.drawing} alt="sheet-drawings" className="imageProps" />
          </div>
        </div>
    )
}

export default Structure;