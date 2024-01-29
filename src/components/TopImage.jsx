import React from "react";
import myImage from "../assets/header-image.avif";

function TopImage() {
    return  <div class="top-image">
    <img src={myImage} height="200px" width="100%" alt="faded orange strip going across the page with the words project work in white in the bottom right corner" />
    <div class="bottom-right">
        <p>Project Work</p>
    </div>
</div>
  
}

export default TopImage;