import React from "react";
import '../pages/Cardsgallery.css';
import Cardholder from './Cardholder';
import projectData from './Projects.json';

function Cardsgallery() {
    return( 
      <div className="Container">
      <div className="Wrapper">
        <div className="title">
          <h1>Projects</h1>
        </div>  
        <div>
          <p>The projects below are a number of projects that I have completed</p>
        </div>

        <div className="container wide">
          <div className="innercontainer">
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
      </div>
    );
}
export default Cardsgallery; 