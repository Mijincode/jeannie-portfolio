import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import peteCat from "./images/blueCat.png";
import shoe from "./images/shoe.png";
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
            With a background in education, I bring both empathy and structured
            thinking into tech. These skills naturally align with UX design —
            understanding users, designing with clarity, and creating intuitive
            journeys — as well as development, where logical thinking,
            problem-solving, and communication are essential.
          </p>
          <p>
            Now, with formal training in web development, I combine structured
            thinking from my teaching career with creative problem-solving to
            build meaningful digital solutions.
          </p>

          <div className="sub-title-about">
            <p>Design Meets Development</p>
          </div>

          <p>
            As a designer and developer, I bring a unique perspective that
            blends creative vision with technical execution. With hands-on
            experience in both front-end development and UX/UI design, I craft
            solutions that are not only beautiful—but also functional, scalable,
            and user-focused.
          </p>

          <p>
            I balance <strong>structured thinking</strong> with a strong sense
            of <strong>user flow</strong>, always considering both the{" "}
            <strong>client’s business goals</strong> and the{" "}
            <strong>user’s perspective</strong>. My approach ensures the designs
            I create are not only visually engaging, but also easy to build,
            maintain, and scale in real-world projects.
          </p>

          <p>
            Whether I'm wireframing user journeys or coding responsive
            interfaces, I focus on creating seamless experiences. I often
            receive feedback such as <em>"detail-oriented"</em> and{" "}
            <em>"beyond expectations"</em>, which reinforces that my
            design-to-dev workflow delivers clarity and impact.
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
              <strong>Client-Centered UX:</strong> My work supports business
              goals and delivers real value.
            </li>
            <li>
              <strong>Developer Mindset:</strong> I write clean, maintainable
              code to bring interfaces to life.
            </li>
            <li>
              <strong>Pixel + Logic:</strong> Detail in visuals, and precision
              in logic.
            </li>
          </ul>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
}
