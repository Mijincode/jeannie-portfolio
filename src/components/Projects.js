import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";

import "./css/project.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import projectData from "./ProjectData";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef();
  useEffect(() => {
    const el = sectionRef.current;
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top center",
      end: "bottom center",
      onEnter: () =>
        gsap.to("body", { backgroundColor: "#4224D2", duration: 0.5 }),
      onEnterBack: () =>
        gsap.to("body", { backgroundColor: "#4224D2", duration: 0.5 }),
    });
  }, []);

  return (
    <section id="projects" ref={sectionRef}>
      {/* <section id="projects" className="projects"> */}
      <div className="project-container">
        <h2 className="project-heading">Projects</h2>
        <div className="card-container">
          {Object.keys(projectData).map((projectKey) => {
            const project = projectData[projectKey];
            return (
              <div className="project-wrapper" key={projectKey}>
                {project.link ? (
                  <Link to={project.link}>
                    <ProjectCard project={project} />
                  </Link>
                ) : (
                  <ProjectCard project={project} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
