import React from "react";

function Header() {
    return    <header>
        <div class="navbar">
            <div class="logo"><a href="index.html">Dezmondo7 Portfolio</a></div>
            <ul class="links">
                <li><a href="#box-a">About Me</a></li>
                <li><a href="#box-c">Projects</a></li>
                <li><a href="netflix.html">Netflix</a></li>
                <li><a href="#contactme">Contact Me</a></li>
            </ul>
            <a href="#" class="action_button">Cirriculum Vitae</a>
            <div class="toggle_button">
                <i class="fa-solid fa-bars"></i>
            </div>
        </div>
        <div class="dropdown_menu">
            <li><a href="hero">About Me</a></li>
            <li><a href="about">Projects</a></li>
            <li><a href="services">Contact Me</a></li>
            <li><a href="contact">Cirriculem Vitae</a></li>
            <li><a href="#" class="action_button"></a></li>
        </div>
    </header>
}

export default Header;