import React from "react";
import projectData from "../ProjectData";
import "./FlightRoutes.css";
import ProjectNav from "../ProjectNav";

export default function FlightRoutes() {
  const project = projectData["FlightRoutes"];

  return (
    <section className="case-study-section-flight">
      <div className="case-study-container">
        <h1 className="case-study-title-flight">
          Australian Flight Routes and Airports — Web App
        </h1>

        <div className="case-block-flight">
          <h2 className="section-title">1. Project Overview</h2>
          <p>
            <strong>My Role:</strong> Front-End Developer
          </p>
          <p>
            <strong>Tools:</strong> JavaScript, HTML, CSS
          </p>
          <p>
            <strong>Duration:</strong> 5 weeks
          </p>
          <p>
            A data visualization web app built with vanilla JavaScript that
            helps users explore Australian flight routes and airport data. This
            app integrates two large JSON datasets, enabling users to search,
            filter, and analyze routes and airport information with real-time
            rendering.
          </p>
        </div>

        <div className="case-block-flight">
          <h2>2. Problems</h2>
          <ul>
            <li>Difficulty in accessing structured flight and airport data</li>
            <li>
              Lack of interactivity for exploring multiple filter criteria
            </li>
            <li>No integrated way to calculate or visualize distances</li>
          </ul>
        </div>

        <div className="case-block-flight">
          <h2>3. Goals</h2>
          <ul>
            <li>
              Enable filtering of flight data by airport, airline, and aircraft
            </li>
            <li>Allow searching airport names by city or keyword</li>
            <li>Visualize distances between source and destination airports</li>
            <li>Render sortable tables and update DOM dynamically</li>
          </ul>
        </div>

        <div className="case-block-flight">
          <h2>4. Design & Development Process</h2>

          <h3 className="process-step">UI Planning & Components</h3>
          <p>
            Designed a single-page layout that separates flight and airport
            data. Dropdowns and search fields enable filtering, while dynamic
            tables display results with distances calculated using the Haversine
            formula.
          </p>

          <h3 className="process-step">Data Parsing & DOM Binding</h3>
          <p>
            Parsed large JSON datasets and constructed combined flight objects
            with metadata. Used vanilla JS to manage event listeners, state, and
            filter logic. Applied custom logic for dropdown population,
            conditional filtering, and distance calculation.
          </p>
        </div>

        <div className="case-block-flight">
          <h2>5. Key Features</h2>
          <ul>
            <li>
              Dropdown filtering by source, destination, airline, aircraft
            </li>
            <li>Live search on airport names</li>
            <li>Distance calculation using Haversine formula</li>
            <li>Custom-built table rendering without external libraries</li>
            <li>Summary metrics: min, max, average flight counts</li>
          </ul>
        </div>

        <div className="case-block-flight">
          <h2>6. Tech Stack</h2>
          <ul>
            <li>JavaScript (ES6)</li>
            <li>HTML/CSS</li>
            <li>JSON (Static data)</li>
            <li>Haversine Formula (for geospatial calculations)</li>
          </ul>
        </div>

        <div className="case-block-flight">
          <h2>7. Outcomes & Reflections</h2>
          <ul>
            <li>
              Learned data filtering, transformation, and DOM manipulation
            </li>
            <li>Improved problem-solving by implementing geospatial logic</li>
            <li>
              Built a custom data visualization from scratch using only JS
            </li>
          </ul>
          <p>
            This project deepened my understanding of structuring real-world
            datasets, client-side rendering, and user interaction in pure
            JavaScript. Building everything from scratch taught me valuable
            lessons in performance and UX considerations.
          </p>
        </div>

        <div className="case-block-flight">
          <h2>8. Demo & Code</h2>
          <div className="video-wrapper">
            <iframe
              width="100%"
              height="315"
              src={project.videoSrc}
              title="Flight Routes Demo"
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
              className="button-flight"
            >
              View GitHub
            </a>
          </div>
        </div>
        <ProjectNav />
      </div>
    </section>
  );
}
