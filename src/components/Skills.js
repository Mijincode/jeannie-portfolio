import React from "react";
import "./css/skills.css";
import figma from "./images/figma.png";
import javaScript from "./images/javaScript.png";
import html from "./images/html.png";
import css from "./images/css.png";
import react from "./images/react.png";
import mySQL from "./images/mySQL.png";
import nodeJS from "./images/nodeJS.png";

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
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-center mb-8 mt-8">
            Skills &amp; Technologies
          </h2>
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
