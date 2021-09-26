import React from "react";
import pic from "../images/profile_image.jpg";

function Header() {
    return(
        <header>
        <img src={pic} className="profile-photo" alt="Photo coming soon!" width="20%" height="20%"/>
        <h1>Jason Viox</h1>
        <nav className="links">
            <a href="#about">About Me</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact Me</a>

            <a href="./Jason Viox_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
        </nav>
    </header>
    )
}

export default Header;