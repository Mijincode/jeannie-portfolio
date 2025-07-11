import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import projectData from "./ProjectData";
import "./css/project.css";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef();

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top center",
      end: "bottom center",
      onEnter: () => {
        gsap.to("body", {
          backgroundColor: "#4224D2",
          color: "#FFFFFF",
          duration: 0.5,
        });
        gsap.to(" h1,h2,p, text", {
          color: "#FFFFFF",
          duration: 0.5,
        });
      },
      onEnterBack: () => {
        gsap.to("body", {
          backgroundColor: "#4224D2",
          color: "#FFFFFF",
          duration: 0.5,
        });
        gsap.to("h1, h2, p, .text", {
          color: "#FFFFFF",
          duration: 0.5,
        });
      },
    });

    return () => {
      trigger.kill();
    };
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
