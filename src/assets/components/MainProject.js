import React from 'react';

function mainProject(props) {
    return (
        <div className='project mainP'>
            <a
                href={props.project.deploy}
                target='_blank'
                rel='noopener noreferrer'>
                <h3>Featured Project - myDaily</h3>
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

export default mainProject;