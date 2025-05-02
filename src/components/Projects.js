import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import chaeumImg from "./images/chaeulBeauty/Instagram.png";
import SerenityImg from "./images/laptop.png";
import LmsImg from "./images/LMS.png";
import "./css/project.css";

const projects = {
  ChaeulBeauty: {
    hoverText: "Chaeul-Beauty",
    img: chaeumImg,
    webPage: "https://chaeul-mi.com/",
    description:
      "A beauty tattoo web application for my client in South Korea to enhance customer engagement and operational efficiency.",
    link: "/projects/chaeul-beauty",
  },

  StyleSerenityEcommerce: {
    hoverText: "Style Serenity",
    img: SerenityImg,
    description:
      "A fashion e-commerce web application designed for a seamless shopping experience.",
    link: "/projects/style-serenity",
  },

  StudyPlan: {
    hoverText: "Learning Management System",
    img: LmsImg,
    description:
      "This is a Learning Management System (LMS) web application for Future Leaders Network, enhancing educational experiences through interactive tools",
    githubUrl: "https://github.com/Mijincode/StudyPlanApp",
    link: "/projects/study-plan",
  },

  HappinessApp: {
    title: "Happiness Ranking",
    videoSrc: "https://www.youtube.com/embed/U-Vrown8XYM",
    description:
      "A React-based web application for analyzing happiness survey data, enabling users to filter and visualize information across demographics.",
    githubUrl: "https://github.com/Mijincode/HappinessApp",
  },

  FlightRoutes: {
    title: "Flight Routes and Airports",
    videoSrc: "https://www.youtube.com/embed/n7On5x0mXxo",
    description:
      "This interactive platform allows users to explore flight routes and airport information across Australia.",
    githubUrl: "https://github.com/Mijincode/FlightRoutes",
  },

  MovieApp: {
    title: "Movie Search",
    videoSrc: "https://www.youtube.com/embed/kMa4L73EOr8",
    description:
      "A movie search app that features user authentication, movie detail lookups via IMDb, and image upload for movie posters.",
    githubUrl: "https://github.com/Mijincode/MovieApp",
  },
};

const Projects = () => {
  return (
    <section id="projects">
      <div className="project-container">
        <h2 className="text-4xl font-bold text-center mb-8 mt-0">Projects</h2>
        <div className="card-container">
          {Object.keys(projects).map((projectKey) => {
            const project = projects[projectKey];
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
};

export default Projects;
