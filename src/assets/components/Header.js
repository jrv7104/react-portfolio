import React from "react";
import pic from "../images/profile_image.jpg";
import { Link, withRouter } from "react-router-dom";

function Header(props) {
    return(
        <header>
        <img src={pic} className="profile-photo" alt="Photo coming soon!" width="20%" height="20%"/>
        <h1>Jason Viox</h1>
        <nav className="links">
            <Link to="/">About Me</Link>
            <Link to="/portfolio">Work</Link>
            <Link to="/contact">Contact Me</Link>

            <a href="https://docdro.id/TcD5scf" target="_blank" rel="noopener noreferrer">Resume</a>
        </nav>
    </header>
    )
}

export default withRouter(Header);