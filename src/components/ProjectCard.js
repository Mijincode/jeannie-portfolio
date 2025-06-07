import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="image-container">
        {project.images ? (
          project.images.map((imgSrc, index) => (
            <img
              key={index}
              src={imgSrc}
              alt={`${project.title || project.hoverText} ${index + 1}`}
              className="project-image"
            />
          ))
        ) : (
          <img
            src={project.img}
            alt={project.title || project.hoverText}
            className="project-image"
          />
        )}

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
