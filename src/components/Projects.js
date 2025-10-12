import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import projectData from "./ProjectData";
import "./css/project.css";

function useMediaQuery(query) {
  const [match, setMatch] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = (e) => setMatch(e.matches);
    setMatch(mq.matches);
    mq.addEventListener?.("change", onChange) || mq.addListener(onChange);
    return () =>
      mq.removeEventListener?.("change", onChange) ||
      mq.removeListener(onChange);
  }, [query]);
  return match;
}

export default function Projects() {
  const projectRefs = useRef([]);
  const [expanded, setExpanded] = useState(() => new Set());
  const isMobile = useMediaQuery("(max-width: 900px)");

  const toggleExpand = (key) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) =>
          entry.isIntersecting
            ? entry.target.classList.add("animate")
            : entry.target.classList.remove("animate")
        );
      },
      { threshold: 0.1 }
    );

    const curr = projectRefs.current;
    curr.forEach((ref) => ref && observer.observe(ref));
    return () => curr.forEach((ref) => ref && observer.unobserve(ref));
  }, []);

  return (
    <section id="projects">
      <div className="project-container">
        <h2 className="project-heading">Projects</h2>
        <div className="project-list">
          {Object.keys(projectData).map((projectKey, index) => {
            const project = projectData[projectKey];
            const isExpanded = expanded.has(projectKey);

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

                    <p
                      className={`project-description ${
                        isExpanded ? "expanded" : ""
                      } ${isMobile ? "tap-to-expand" : ""}`}
                      onClick={() => isMobile && toggleExpand(projectKey)}
                      onKeyDown={(e) => {
                        if (!isMobile) return;
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          toggleExpand(projectKey);
                        }
                      }}
                      role={isMobile ? "button" : undefined}
                      tabIndex={isMobile ? 0 : undefined}
                      aria-expanded={isExpanded}
                    >
                      {project.description}
                    </p>

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
