import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="image-container">
        {project.img && !project.videoSrc && (
          <img
            src={project.img}
            alt={project.title}
            className="project-image"
          />
        )}
        {project.videoSrc && !project.img && (
          <iframe
            title={project.title}
            src={project.videoSrc}
            width="100%"
            height="400"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}

        {(project.img || project.videoSrc) && (
          <div className="overlay-text">
            <p style={{ color: "black" }}>{project.hoverText}</p>
          </div>
        )}
      </div>

      {/*
      <Card.Text style={{ textDecoration: "none" }}>
        {project.description}
      </Card.Text> */}
    </div>
  );
};

export default ProjectCard;
