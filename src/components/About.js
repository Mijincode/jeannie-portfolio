import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./css/about.css";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef();

  useEffect(() => {
    const el = sectionRef.current;

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top center",
      end: "bottom center",
      onEnter: () => applyTheme(),
      onEnterBack: () => applyTheme(),
    });

    function applyTheme() {
      gsap.to("body", { backgroundColor: "#617864", duration: 0.5 });
      gsap.to("h1, h2, p, li", { color: "#F9F9F6", duration: 0.5 });
    }

    return () => trigger.kill();
  }, []);

  return (
    // <section id="about" ref={sectionRef}>
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="about-heading">About Me</h2>
        <div className="about-content">
          <div className="sub-title-about">
            <p>From Teaching to Tech</p>
          </div>
          <p>
            I began my career as an educator—where I honed empathy, clarity, and
            structured thinking. These strengths naturally translate into tech:
            understanding users, planning intuitive experiences, and
            communicating effectively with teams.
          </p>
          <p>
            Now, with formal training in web development, I blend my teaching
            mindset with design and code to solve real-world problems.
          </p>

          <div className="sub-title-about">
            <p>From Design to Code</p>
          </div>

          <p>
            With experience in both UX/UI design and front-end development, I
            don’t just design beautiful interfaces—I build them. I understand
            how design decisions impact code, and how development constraints
            shape design.
          </p>

          <p>
            I balance structured thinking with a strong sense of user flow,
            always considering both the client’s business goals and the user’s
            perspective. My approach ensures the designs I create are not only
            visually engaging, but also easy to build, maintain, and scale in
            real-world projects.
          </p>

          <p>
            Whether wireframing a user journey or coding responsive layouts, I
            focus on clarity, usability, and scalability. Every solution I craft
            balances business goals with user needs.
          </p>

          <div className="sub-title-about">
            <p>My Approach</p>
          </div>
          {/* 
          <div className="key-points-box">
            <h3 className="key-heading">My Approach</h3> */}
          <ul className="key-points-list">
            <li>
              <strong>Design × Code Synergy:</strong> I design with
              implementation in mind, making developer handoff smoother—or
              skipping it entirely by building it myself.
            </li>
            <li>
              <strong>Structured Thinking:</strong> I plan user journeys and
              content structure with precision.
            </li>
            <li>
              <strong>Client-Centered UX:</strong> My work aligns with business
              goals and drives real user value.
            </li>
            <li>
              <strong>Developer Mindset:</strong> I write clean, maintainable
              code to bring interfaces to life.
            </li>
            <li>
              <strong>Pixel + Logic:</strong> I care about visual precision and
              functionality
            </li>
          </ul>
          <p
            style={{
              fontStyle: "italic",
              marginTop: "2rem",
              textAlign: "center",
              color: "#555",
            }}
          >
            “Detail-oriented and goes beyond expectations” — feedback I’ve
            consistently received
          </p>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
}
