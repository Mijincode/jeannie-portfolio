import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="image-container">
        <img src={project.img} alt={project.title} className="project-image" />

        <div className="overlay-text">
          <p style={{ color: "black" }}>{project.hoverText}</p>
        </div>
      </div>

      {/*
      <Card.Text style={{ textDecoration: "none" }}>
        {project.description}
      </Card.Text> */}
    </div>
  );
};

export default ProjectCard;
