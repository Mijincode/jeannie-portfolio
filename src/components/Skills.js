import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./css/skills.css";
import figma from "./images/figma.png";
import javaScript from "./images/javaScript.png";
import html from "./images/html.png";
import css from "./images/css.png";
import react from "./images/react.png";
import mySQL from "./images/mySQL.png";
import nodeJS from "./images/nodeJS.png";

gsap.registerPlugin(ScrollTrigger);

const skillsData = [
  { name: "HTML5", icon: html },
  { name: "CSS3", icon: css },
  { name: "JavaScript", icon: javaScript },
  { name: "React", icon: react },
  { name: "Figma", icon: figma },
  { name: "Node.js", icon: nodeJS },
  { name: "MySQL", icon: mySQL },
];

export default function Skills() {
  const sectionRef = useRef();

  useEffect(() => {
    const el = sectionRef.current;

    const scrollTriggerInstance = ScrollTrigger.create({
      trigger: el,
      start: "top center",
      end: "bottom center",
      onEnter: () => {
        gsap.to("body", { backgroundColor: "#617864", duration: 0.5 });
        gsap.to("h1, h2", {
          color: "#FFFFFF",
          duration: 0.5,
        });
      },
      onEnterBack: () => {
        gsap.to("body", { backgroundColor: "#617864", duration: 0.5 });
        gsap.to("h1, h2", {
          color: "#FFFFFF",
          duration: 0.5,
        });
      },
    });

    return () => {
      if (scrollTriggerInstance) {
        scrollTriggerInstance.kill();
      }
    };
  }, []);
  return (
    <section id="skills">
      <div className="skills-container">
        <div className="skills-header">
          <h2 className="skills-heading">Skills &amp; Technologies</h2>
        </div>

        <div className="skills-slider">
          <div className="skills-track">
            {skillsData.concat(skillsData).map((skill, index) => (
              <div key={index} className="skill-slide">
                <div className="skill-card">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="skill-icon"
                  />
                  <span className="skill-name">{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
