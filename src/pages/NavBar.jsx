import { useState, useEffect } from "react";
import { Navbar, Container } from "react-bootstrap";
import logo from '../assets/spyroweb.png';
import { NavLink } from "react-router-dom";
import '../pages/NavBar.css';
{/*import navIcon1 from '';
import navIcon2 from '';
import navIcon3 from '';*/}

import React from 'react';

function NavBar() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, seScrolled] = useState(false);

  useEffect(() => {
     const onScroll = () => {
      if (window.scrollY > 50) {
        seScrolled(fasle);
      }
     }

     window.addEventListener("scroll", onScroll);

     return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const onUpdateActieLink = (value) => {
    setActiveLink(value);
  }


  return (
    <div className="navbar123">
    <Navbar  expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#Home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle ari-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon">/</span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
            <Navbar className="me-auto">
              <NavLink href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActieLink('home')}>Home</NavLink>
              <NavLink href="#Skils" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActieLink('skills')}>Skills</NavLink>
              <NavLink href="#Projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActieLink('projects')}>Projects</NavLink>
            </Navbar>
            <span className="Navbar-text">
              <div className="social-icon">
                <a href="#"><img src={""} alt="" /></a>
                <a href="#"><img src={""} alt="" /></a>
                <a href="#"><img src={""} alt="" /></a>
              </div>
              <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
            </span>
        </Navbar.Collapse>

      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar;