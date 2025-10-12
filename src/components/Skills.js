import React, { useEffect, useRef } from "react";
import "./css/skills.css";
import figma from "./images/figma.png";
import javaScript from "./images/javaScript.png";
import html from "./images/html.png";
import css from "./images/css.png";
import react from "./images/react.png";
import mySQL from "./images/mySQL.png";
import nodeJS from "./images/nodeJS.png";

const skillsData = [
  { name: "Figma", icon: figma },
  { name: "HTML5", icon: html },
  { name: "CSS3", icon: css },
  { name: "JavaScript", icon: javaScript },
  { name: "React", icon: react },
  { name: "Node.js", icon: nodeJS },
  { name: "MySQL", icon: mySQL },
];

export default function Skills() {
  const trackRef = useRef(null);
  const firstSetRef = useRef(null);

  useEffect(() => {
    if (!trackRef.current || !firstSetRef.current) return;
    const width = firstSetRef.current.getBoundingClientRect().width;
    trackRef.current.style.setProperty("--loop-width", `${width}px`);
    // Optionally tune speed based on width:
    // trackRef.current.style.setProperty("--speed", `${Math.max(12, width / 40)}s`);
  }, []);

  return (
    <section id="skills">
      <div className="skills-container">
        <div className="skills-header">
          <h2 className="skills-heading">Skills &amp; Technologies</h2>
        </div>

        <div className="skills-slider">
          <div className="skills-track" ref={trackRef}>
            {/* First set (measured for width) */}
            <div
              className="loop-set"
              ref={firstSetRef}
              style={{ display: "flex", alignItems: "center", gap: 16 }}
            >
              {skillsData.map((skill, idx) => (
                <div key={`a-${idx}`} className="skill-slide">
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

            {/* Second set (clone for seamless loop) */}
            <div
              className="loop-set"
              style={{ display: "flex", alignItems: "center", gap: 16 }}
            >
              {skillsData.map((skill, idx) => (
                <div key={`b-${idx}`} className="skill-slide">
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
      </div>
    </section>
  );
}
