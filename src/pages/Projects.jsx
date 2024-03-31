import React from "react";
import Netflix from "../images/netflix_tv.avif";
import Bootrap2 from "../images/BS2.jpg";
import './Projects.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ironman from '../images/ironman-venom.png';
import Curated from '../images/Curated.png';


function Projects() {
  return (
    <div className="container">
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Netflix} className="d-block w-100 h-50" alt="Netflix Desktop Logo" />
            <div className="carousel-caption d-none d-md-block">
            <button type="button" class="btn btn-dark"><a href="#">Netflix Clone  <i class="fa-solid fa-arrow-pointer"></i></a></button>
              <p>Site built using HTML5, CSS3 & JavaScript.</p>
              <a href=""><i class="fa-brands fa-github fa-2xl"></i></a>
            </div>
          </div>
          <div className="carousel-item">
            <img src={ironman} className="d-block w-100 h-50" alt="..." />
            <div className="carousel-caption d-none d-md-block">
            <button type="button" class="btn btn-dark"><a href="https://dezmondo7.github.io/movie-recommender/" target="_blank">FlickFinder  <i class="fa-solid fa-arrow-pointer"></i></a></button>
              <p>Code Crusaders project built using HTML5, CSS3, JavaScript & API's.</p>
              <a href=""><i class="fa-brands fa-github fa-2xl"></i></a>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Curated} className="d-block w-100 h-25" alt="Image of the Curated application home page" />
            <div className="carousel-caption d-none d-md-block">
            <button type="button" class="btn btn-dark"><a href="https://curatedcanvas.netlify.app/ ." target="_blank">Curated  <i class="fa-solid fa-arrow-pointer"></i></a></button>
              <p>Code Crusaders project built using Harvard API, HTML5, CSS3 & Tailwind</p>
              <a href="https://github.com/yrezvani/curated?tab=readme-ov-file" target=" blank"><i class="fa-brands fa-github fa-2xl"></i></a>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
};

export default Projects;