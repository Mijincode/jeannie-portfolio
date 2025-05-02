import React from "react";
import { Card, Button } from "react-bootstrap";
// import { AiFillGithub } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

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
    <Card className="border border-gray-200 rounded-lg">
      <Card.Body>
        <Card.Title className="text-lg font-semibold text-center">
          {project.title}
        </Card.Title>

        <div className="image-container">
          {/* Check if there's an image or video */}
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
          {/* Show hover text */}
          {(project.img || project.videoSrc) && (
            <div className="overlay-text">
              <p>{project.hoverText}</p> {/* Dynamic hover text */}
            </div>
          )}
        </div>

        <Card.Text className="text-gray-700 mt-2 no-underline">
          {project.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
