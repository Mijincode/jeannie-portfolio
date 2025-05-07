import React from "react";
import { Card, Button } from "react-bootstrap";
// import { AiFillGithub } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  // const handleNavigate = () => {
  //   if (project.link) {
  //     navigate(project.link);
  //   }
  // };
  // const handleGithubClick = (githubUrl) => {
  //   window.open(githubUrl, "_blank");
  // };

  // const handleWebpageClick = (webPage) => {
  //   window.open(webPage, "_blank");
  // };

  return (
    <div className="project-card">
      <Link to={project.link}>
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
      </Link>
      {/* 
      <Card.Text style={{ textDecoration: "none" }}>
        {project.description}
      </Card.Text> */}
    </div>
  );
};

export default ProjectCard;
