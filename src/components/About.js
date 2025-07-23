// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";
import "./css/about.css";

// gsap.registerPlugin(ScrollTrigger);

export default function About() {
  // const sectionRef = useRef();

  // useEffect(() => {
  //   const el = sectionRef.current;

  //   const trigger = ScrollTrigger.create({
  //     trigger: el,
  //     start: "top center",
  //     end: "bottom center",
  //     onEnter: () => applyTheme(),
  //     onEnterBack: () => applyTheme(),
  //   });

  //   function applyTheme() {
  //     gsap.to("body", { backgroundColor: "#617864", duration: 0.5 });
  //     gsap.to("h1, h2, p, li", { color: "#F9F9F6", duration: 0.5 });
  //   }

  //   return () => trigger.kill();
  // }, []);

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
            I first discovered UX/UI design while studying full-stack
            development. As I built more front-end features, I found myself
            constantly asking: "Would this feel intuitive for the user?" or "Is
            this the clearest path to the goal?" This curiosity led me to
            explore UX principles on my own—like usability, accessibility, and
            user-centered design.
          </p>

          <p>
            What started as a developer's mindset gradually evolved into a
            designer's lens. I began designing wireframes and user journeys not
            just to prototype features, but to understand how real people would
            interact with them. I realized that I care deeply about clarity,
            flow, and reducing cognitive load—cornerstones of good UX.
          </p>

          <p>
            I found myself genuinely excited about every project I worked on. I
            wanted to keep learning, keep building, and create products that
            feel meaningful and seamless. Design wasn't separate from
            development anymore—it was part of how I thought through problems.
          </p>

          <p>
            Today, I bridge both worlds. I don't just design beautiful
            interfaces—I build them. I understand how layout, hierarchy, and
            micro-interactions shape the user experience, and how technical
            decisions affect usability. My goal is always to align business
            needs with user goals—to craft products that are both practical and
            delightful.
          </p>

          {/* <div className="sub-title-about">
            <p>My Approach</p>
          </div> */}
          {/* 
       
          <ul className="key-points-list">
            <li>
              <strong>Design × Code Synergy:</strong> I design with
              implementation in mind, making developer handoff smoother—or
              skipping it entirely by building it myself.
            </li>
            <li>
              <strong>Structured Thinking:</strong> I map out user journeys and
              content hierarchies with clarity and intention, ensuring intuitive
              flow and accessibility.
            </li>

            <li>
              <strong>Client-Centered UX:</strong> I create solutions that
              support business goals while solving real user problems—balancing
              usability with measurable impact.
            </li>
            <li>
              <strong>Developer Mindset:</strong> With a background in
              full-stack development, I write clean, scalable code and
              collaborate effectively with developers.
            </li>
            <li>
              <strong>Pixel + Logic:</strong> I pay close attention to
              detail—down to the last pixel—while ensuring the product functions
              beautifully across devices.
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
