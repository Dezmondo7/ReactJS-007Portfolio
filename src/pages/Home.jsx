import React from "react";
import myImage from "../images/header-image.avif";
import myPhoto from "../images/mypic.jpg";


function Home() {

    return  ( <div className="top-image">
    <img src={myImage} height="200px" width="100%" alt="faded orange strip going across the page with the words project work in white in the bottom right corner" />
    <div className="bottom-right">
        <p>Project Work</p>
    </div>
    <div className="card" >
    <img src={myPhoto} className="card-img-top" alt="Image of me." />
    <div className="card-body">
      <h5 className="card-title">Dale Warburton</h5>
      <p className="card-text">HTML5, CSS3, JavaScript, ReactJS, Python, JQuery, Node JS, Bootstrap 5.3, Tailwind
        .</p>
      <a href="#" className="btn btn-primary">Projects</a>
    </div>
  </div>
  </div>
    );
}

export default Home;
