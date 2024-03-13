import React from "react";
import './Cardsgallery.css';
import Cardholder from './Cardholder';
import projectData from '../pages/Projects.json';

function Cardsgallery() {
    return( 
      <div className="pageContainer">
      <div className="pageWrapper">
        <div className="title">
          <h1>Projects</h1>
        </div>  
        <div>
          <p>The projects below are a number of projects that I have completed</p>
        </div>

        <div className="cardContainer">
          {projectData.map((project) => (
            <Cardholder 
            key={project.id}
            id={project.id}
            name={project.name}
            image={project.image}
            deployed={project.deployed}
            github={project.github}
            description={project.description}
          />
          ))}
      
        </div>
      </div>
      </div>
    );
}
export default Cardsgallery; 