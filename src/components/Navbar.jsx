import React from "react";

function Navbar() {
    return    <header>
        <div class="navbar">
            <div className="logo"><a href="index.html">Dezmondo7 Portfolio</a></div>
            <ul className="links">
                <li><a href="#box-a">Home</a></li>
                <li><a href="#box-c">Projects</a></li>
                <li><a href="#contactme">Contact Me</a></li>
            </ul>
            <a href="#" className="action_button">Cirriculum Vitae</a>
            <div className="toggle_button">
                <i className="fa-solid fa-bars"></i>
            </div>
        </div>
        <div className="dropdown_menu">
            <li><a href="hero">About Me</a></li>
            <li><a href="about">Projects</a></li>
            <li><a href="services">Contact Me</a></li>
            <li><a href="contact">Cirriculem Vitae</a></li>
            <li><a href="#" className="action_button"></a></li>
        </div>
    </header>
}

export default Navbar;