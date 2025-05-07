import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import chaeumImg from "./images/chaeulBeauty/chaeTwo.png";
import SerenityImg from "./images/styleSerenity/styleSerenity.png";
import LmsImg from "./images/LMS/Frame6.png";
import LaptopHappy from "./images/happyToo/Frame5.png";
import "./css/project.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef();

  useEffect(() => {
    const el = sectionRef.current;

    ScrollTrigger.create({
      trigger: el,
      start: "top center",
      end: "bottom center",
      onEnter: () =>
        gsap.to("body", { backgroundColor: "#4224D2", duration: 0.5 }),
      onEnterBack: () =>
        gsap.to("body", { backgroundColor: "#4224D2", duration: 0.5 }),
    });
  }, []);

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

    HappyToo: {
      hoverText: "Happy Too",
      // videoSrc: HappyTooVideo,
      // img: HappyTooImg,
      img: LaptopHappy,
      description:
        "A Busniess Consulting web application designed for a small and medium business",
    },
    // HappinessApp: {
    //   title: "Happiness Ranking",
    //   videoSrc: "https://www.youtube.com/embed/U-Vrown8XYM",
    //   description:
    //     "A React-based web application for analyzing happiness survey data, enabling users to filter and visualize information across demographics.",
    //   githubUrl: "https://github.com/Mijincode/HappinessApp",
    // },

    // FlightRoutes: {
    //   title: "Flight Routes and Airports",
    //   videoSrc: "https://www.youtube.com/embed/n7On5x0mXxo",
    //   description:
    //     "This interactive platform allows users to explore flight routes and airport information across Australia.",
    //   githubUrl: "https://github.com/Mijincode/FlightRoutes",
    // },

    // MovieApp: {
    //   title: "Movie Search",
    //   videoSrc: "https://www.youtube.com/embed/kMa4L73EOr8",
    //   description:
    //     "A movie search app that features user authentication, movie detail lookups via IMDb, and image upload for movie posters.",
    //   githubUrl: "https://github.com/Mijincode/MovieApp",
    // },
  };

  return (
    <section id="projects" ref={sectionRef}>
      <div className="project-container">
        <h2 className="project-heading">Projects</h2>
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
