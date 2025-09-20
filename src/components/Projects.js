import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import projectData from "./ProjectData";
import "./css/project.css";

export default function Projects() {
  const projectRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          } else {
            entry.target.classList.remove("animate");
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRefs = projectRefs.current;
    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="projects">
      <div className="project-container">
        <h2 className="project-heading">Projects</h2>
        <div className="project-list">
          {Object.keys(projectData).map((projectKey, index) => {
            const project = projectData[projectKey];
            return (
              <div
                className="project-wrapper"
                key={projectKey}
                ref={(el) => (projectRefs.current[index] = el)}
              >
                <div className="project-card vertical-layout">
                  <div className="image-container">
                    {project.img && (
                      <img
                        src={project.img}
                        alt={project.title || project.hoverText || project.role}
                        className={`project-image ${
                          project.hoverText === "Chaeul-Beauty"
                            ? "large-image"
                            : ""
                        }`}
                      />
                    )}
                  </div>

                  <div className="project-info">
                    <h3 className="project-title">
                      {project.title || project.hoverText || project.role}
                    </h3>
                    {project.role && (
                      <p className="project-role">
                        <strong>Role:</strong> {project.role}
                      </p>
                    )}
                    <p className="project-description">{project.description}</p>
                    <div className="project-actions">
                      {project.link && (
                        <Link to={project.link} className="project-button">
                          View case study
                        </Link>
                      )}
                      {project.webPage && (
                        <a
                          href={project.webPage}
                          className="project-button"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Live Site
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
