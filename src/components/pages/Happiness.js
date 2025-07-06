import React from "react";
import projectData from "../ProjectData";
import "./Happiness.css";

export default function Happiness() {
  const project = projectData["Happiness"];

  return (
    <section className="case-study-section-happiness">
      <div className="case-study-container">
        <h1 className="case-study-title-happiness">
          Happiness Ranking : Web Development
        </h1>

        <div className="case-block-happiness">
          <h2>1. Overview</h2>
          <p>
            <strong>Project Type:</strong> UI & Full-Stack Development
          </p>
          <p>
            <strong>Role:</strong> UI & Full-Stack Developer
          </p>
          <p>
            <strong>Tools:</strong> HTML, CSS, Express.js, REST API, Node.js
          </p>
          <p>
            <strong>Timeline:</strong> 4 week
          </p>
          <p></p>
        </div>

        <div className="case-block-happiness">
          <h2>About This App</h2>
          <p>{project.description}</p>
          <img
            src={project.img}
            alt="StudyPlan Screenshot"
            className="portfolio-image"
          />
        </div>

        <div className="case-block-happiness">
          <h2>Tech Stack</h2>
          <ul>
            <li>React (with React Router and React Spring)</li>
            <li>JavaScript ES6+</li>
            <li>Custom REST APIs</li>
            <li>CSS Modules</li>
          </ul>
        </div>

        <div className="case-block-happiness">
          <h2>Key Features</h2>
          <ul>
            <li>Responsive UI</li>
            <li>Dynamic course scheduling</li>
            <li>Progress tracking</li>
            <li>Clash detection in timetables</li>
          </ul>
        </div>

        <div className="case-block-happiness">
          <h2> Demo & Code</h2>
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
              className="button-happiness"
            >
              View GitHub
            </a>
            <a
              href={project.webPage}
              target="_blank"
              rel="noopener noreferrer"
              className="button-happiness"
            >
              Visit Live App
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
