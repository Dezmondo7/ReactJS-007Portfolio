import React from "react";
import "./NavBar.css";

function NavBar() {
  return ( 
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Dezmondo7REACTJS</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#Projects">Projects</a>
        <a class="nav-link" href="#Cards">Cards</a>
        <a class="nav-link" href="#contacts">Contact</a>
      </div>
      <div class ="Links">
        <li><a href="https://www.linkedin.com/in/dalewarburton1/"><i class="fa-brands fa-linkedin"></i></a></li>
     </div>
     <div class="Link2">
       <li><a href="https://github.com/Dezmondo7"><i class="fa-brands fa-github"></i></a></li>
     </div>
    </div>
  </div>
</nav>

  );
}

export default NavBar;