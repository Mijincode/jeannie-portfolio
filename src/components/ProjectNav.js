// src/ProjectNav.js
import React from "react";
import { Link, useLocation } from "react-router-dom";
import projectData from "./ProjectData";
import getPrevNext from "./getPrevNext";
import "./ProjectNav.css";

export default function ProjectNav() {
  const { pathname } = useLocation();
  const { prev, next } = getPrevNext(projectData, pathname);

  if (!prev && !next) return null;

  return (
    <nav className="project-nav">
      {prev ? (
        <Link
          to={prev.link}
          className="nav-arrow prev"
          aria-label={`Previous: ${prev.title}`}
        >
          ← Previous
        </Link>
      ) : (
        <span className="nav-placeholder" />
      )}

      {next ? (
        <Link
          to={next.link}
          className="nav-arrow next"
          aria-label={`Next: ${next.title}`}
        >
          Next →
        </Link>
      ) : (
        <span className="nav-placeholder" />
      )}
    </nav>
  );
}
