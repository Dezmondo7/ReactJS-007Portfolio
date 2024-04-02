import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/Cardholder.css';

function Cardholder(props) {
    return (
            <div className="card" >
                <img src={props.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.description}</p>
                    <div class="in-line">
                    <a href={props.github} target="_blank" rel="noreferrer"><i class="fa-brands fa-github fa-xl"></i><p>Github</p></a> &nbsp; &nbsp; &nbsp;
                    <a href={props.deployed} target="_blank" rel="noreferrer"><i class="fa-solid fa-globe fa-xl"></i><p>Deployed Site</p></a> 
                    </div>                   
                </div>
            </div>
    )
}

export default Cardholder;