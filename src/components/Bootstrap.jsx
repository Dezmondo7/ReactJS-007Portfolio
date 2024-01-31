import React from "react";
import myPhoto from "../images/mypic.jpg";

function Bootstrap() {
    return  <div className="card" >
    <img src={myPhoto} className="card-img-top" alt="Image of me." />
    <div className="card-body">
      <h5 className="card-title">Dale Warburton</h5>
      <p className="card-text">HTML5, CSS3, JavaScript, Python, JQuery, React, Bootstrap 5.3, Git
        .</p>
      <a href="#" className="btn btn-primary">Projects</a>
    </div>
  </div>
}

export default Bootstrap