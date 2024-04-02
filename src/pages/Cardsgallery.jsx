import React from "react";
import '../pages/Cardsgallery.css';
import Cardholder from './Cardholder';
import projectData from './Projects.json';

function Cardsgallery() {
    return( 
      <div className="container">
      <div className="wrapper">
        <div className="title">
          <h1>Projects</h1>
        </div>  

        <div className="container wide" id="container-bcg"> 
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