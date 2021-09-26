import React from "react";

function Portfolio(props) {
    console.log(props.project.class)
    return (
        <div className={props.project.class}>
        <a
            href={props.project.deploy}
            target="_blank"
            rel='noopener noreferrer'>
            <h3>Password Generator</h3>
        </a>
        <span>
        <a
                    href={props.project.GitHub}
                    target='_blank'
                    rel='noopener noreferrer'>
                    <h3>GitHub link</h3>
                </a>{' '}
            </span>
        </div>
    );
}

export default Portfolio;