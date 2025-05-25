import React from "react";
import "../pages/StudyPlan.css";
import { useSpring, animated } from "react-spring";
import projectData from "../ProjectData";

const StudyPlan = () => {
  const project = projectData["StudyPlan"];

  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <main className="case-study-container">
      <header className="case-study-header">
        <animated.h1 className="case-study-title" style={fadeIn}>
          {project.hoverText}: Web Development
        </animated.h1>
        <animated.p className="case-study-subtitle" style={fadeIn}>
          I designed and developed this full-featured Learning Management System
          (LMS) from scratch to help students organize their study schedules and
          learning resources.
        </animated.p>
      </header>

      <section className="case-study-section">
        <h2 className="section-title">About This App</h2>
        <p>{project.description}</p>
        <img
          src={project.img}
          alt="StudyPlan Screenshot"
          className="portfolio-image"
        />
      </section>

      <section className="case-study-section">
        <h2 className="section-title">Tech Stack</h2>
        <ul>
          <li>React (with React Router and React Spring)</li>
          <li>JavaScript ES6+</li>
          <li>Custom REST APIs</li>
          <li>CSS Modules</li>
          <li>Deployed on Netlify</li>
        </ul>
      </section>

      <section className="case-study-section">
        <h2 className="section-title">Key Features</h2>
        <ul>
          <li>Responsive UI</li>
          <li>Dynamic course scheduling</li>
          <li>Progress tracking</li>
          <li>Clash detection in timetables</li>
        </ul>
      </section>

      <section className="case-study-section">
        <h2 className="section-title">Demo & Code</h2>
        <div className="video-wrapper">
          <iframe
            width="100%"
            height="315"
            src={project.videoSrc}
            title="Study Plan Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="button-group">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            View GitHub
          </a>
          <a
            href={project.webPage}
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            Visit Live App
          </a>
        </div>
      </section>
    </main>
  );
};

export default StudyPlan;
