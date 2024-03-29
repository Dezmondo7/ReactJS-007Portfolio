import React from 'react';
import { Link } from 'react-router-dom';

function Cardholder(props) {
    return (
            <div className="card">
                <img src={props.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.description}</p>
                    <a href=""><i class="fa-brands fa-github fa-2xl"></i></a>
                    
                </div>
            </div>
    )
}

export default Cardholder;