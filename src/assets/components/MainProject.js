import React from "react";


function MainProject(props) {
    console.log(props.project)
    return(
        <div className="project mainP">
        {/* <a href={props.deploy} target="_blank" rel="noopener noreferrer"> */}
            {/* <h3>Featured Project - myDaily</h3>
        </a>
        <span><a href={props.GitHub} target="_blank" rel="noopener noreferrer"><h3>GitHub link</h3></a> </span> */}
    </div>
    )
}

export default MainProject;