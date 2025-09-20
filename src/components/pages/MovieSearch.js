import React from "react";
import projectData from "../ProjectData";
import "./MovieSearch.css";
import ProjectNav from "../ProjectNav";

export default function MovieSearch() {
  const project = projectData["MovieSearch"];

  return (
    <section className="case-study-section-movie">
      <div className="case-study-container">
        <h1 className="case-study-title-movie">Movie Search — Web App</h1>

        <div className="case-block-movie">
          <h2 className="section-title">1. Project Overview</h2>
          <p>
            <strong>My Role:</strong> Full-Stack Developer
          </p>
          <p>
            <strong>Tools:</strong> Express.js, Knex.js, JavaScript, HTML, CSS
          </p>
          <p>
            <strong>Duration:</strong> 5 weeks
          </p>
          <p>
            A full-stack movie search web app using The Movie Database API and a
            PostgreSQL database. The app allows users to search movies, view
            details, and manage their movie posters with authentication and
            secure user accounts.
          </p>
        </div>

        <div className="case-block-movie">
          <h2>2. Problems</h2>
          <ul>
            <li>
              Public movie databases are vast but not always user-friendly for
              personal search and management.
            </li>
            <li>
              Users want personalized experiences, including login, poster
              uploads, and secure data handling.
            </li>
            <li>
              Need for structured movie data and media retrieval using RESTful
              architecture.
            </li>
          </ul>
        </div>

        <div className="case-block-movie">
          <h2>3. Goals</h2>
          <ul>
            <li>Enable movie search by title and optional year.</li>
            <li>Provide detailed movie data retrieval by IMDb ID.</li>
            <li>Support poster upload and retrieval.</li>
            <li>Implement user registration and login with secure hashing.</li>
          </ul>
        </div>

        <div className="case-block-movie">
          <h2>4. Design & Development Process</h2>

          <h3 className="process-step">Wireframes & UI</h3>
          <p>
            The frontend UI is built with HTML/CSS and vanilla JavaScript,
            focusing on responsive layout and accessible input forms. I
            wireframed key views: Search Page, Movie Detail View, and Poster
            Upload Form.
          </p>

          <h3 className="process-step">Backend Development</h3>
          <p>
            Built with Express.js using a RESTful approach. Middleware is used
            for validation, sanitization, and authorization. Knex.js handles all
            SQL queries.
          </p>
        </div>

        <div className="case-block-movie">
          <h2>5. Key Features</h2>
          <ul>
            <li>
              Search movies by title and year: <code>/movies/search</code>
            </li>
            <li>
              Retrieve movie data by IMDb ID: <code>/movies/data/:imdbID</code>
            </li>
            <li>
              Upload posters (authenticated): <code>/posters/add/:imdbID</code>
            </li>
            <li>
              Retrieve posters by IMDb ID: <code>/posters/:imdbID</code>
            </li>
            <li>User registration & login with hashed passwords</li>
          </ul>
        </div>

        <div className="case-block-movie">
          <h2>6. Tech Stack</h2>
          <ul>
            <li>Express.js (Backend)</li>
            <li>Knex.js & PostgreSQL (Database)</li>
            <li>HTML, CSS, JavaScript (Frontend)</li>
            <li>REST API</li>
          </ul>
        </div>

        <div className="case-block-movie">
          <h2>7. Outcomes & Reflections</h2>
          <ul>
            <li>
              Developed and deployed a fully functional movie database app
            </li>
            <li>Strengthened backend REST API skills and secure auth flow</li>
            <li>Learned to manage user input and file uploads securely</li>
          </ul>
          <p>
            This project helped me bridge backend data architecture with
            frontend UX. I gained deeper insights into database joins, RESTful
            endpoints, and the challenges of file handling in production
            environments.
          </p>
        </div>

        <div className="case-block-movie">
          <h2>8. Demo & Code</h2>
          <div className="video-wrapper">
            <iframe
              width="100%"
              height="315"
              src={project.videoSrc}
              title="Movie Search Demo"
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
              className="button-movie"
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
