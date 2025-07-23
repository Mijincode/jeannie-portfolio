import React from "react";
import LaptopFrame from "./images/laptop.png";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="image-container">
        {project.images ? (
          project.images.map((imgSrc, index) => (
            <img
              key={index}
              src={imgSrc}
              alt={`${project.title || project.hoverText || project.role}  ${
                index + 1
              }`}
              className={`project-image ${
                project.hoverText === "Chaeul-Beauty" ? "large-image" : ""
              }`}
            />
          ))
        ) : project.img ? (
          <img
            src={project.img}
            alt={project.title || project.hoverText || project.role}
            className={`project-image ${
              project.hoverText === "Chaeul-Beauty" ? "large-image" : ""
            }`}
          />
        ) : project.videoSrc ? (
          <div className="laptop-frame">
            <img src={LaptopFrame} alt="Laptop Frame" className="frame-img" />
            <div className="video-wrapper-inside-laptop">
              <iframe
                src={project.videoSrc}
                title={project.title || "Video Project"}
                className="project-video"
                allowFullScreen
              />
            </div>
          </div>
        ) : null}
      </div>

      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        {project.description && (
          <p className="project-description">{project.description}</p>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
