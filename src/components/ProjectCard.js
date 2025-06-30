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
              alt={`${project.title || project.hoverText} ${index + 1}`}
              className="project-image"
            />
          ))
        ) : project.img ? (
          <img
            src={project.img}
            alt={project.title || project.hoverText}
            className="project-image"
          />
        ) : project.videoSrc ? (
          <div className="laptop-frame">
            <img src={LaptopFrame} alt="Laptop Frame" className="frame-img" />
            <iframe
              src={project.videoSrc}
              title={project.title || "Video Project"}
              className="project-video"
              allowFullScreen
            />
          </div>
        ) : null}

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
