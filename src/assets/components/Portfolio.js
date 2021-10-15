import React from "react";
import MainProject from './MainProject';
import projects from './ProjectData.json'

function Portfolio() {
    return (
        <section className="page-section">
        <div>
                      {projects.map((project, index) => (
                      <MainProject key={index} project={project} />
                      ))}
                      </div>
                  </section>
    );
}

export default Portfolio;