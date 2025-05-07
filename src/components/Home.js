import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import image8 from "./images/8.png";
import "./css/home.css";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const sectionRef = useRef();

  useEffect(() => {
    const scrollTriggerInstance = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top center",
      end: "bottom center",
      onEnter: () => {
        gsap.to("body", {
          backgroundColor: "#F2C744",
          color: "#000000",
          duration: 0.5,
        });
        gsap.to("h1, h2, p, .text", { color: "#000000", duration: 0.5 });
      },
      onEnterBack: () => {
        gsap.to("body", {
          backgroundColor: "#F2C744",
          color: "#000000",
          duration: 0.5,
        });
        gsap.to("h1, h2, p, .text", { color: "#000000", duration: 0.5 });
      },
    });

    return () => {
      scrollTriggerInstance.kill();
    };
  }, []);

  return (
    <section id="home" className="home" ref={sectionRef}>
      <div className="home-container">
        <div className="home-content">
          <div className="text-column">
            <h1 className="greeting">Hi, I'm Jeannie</h1>
            <h2 className="greeting-title">
              A UI/UX Designer & Full-Stack Developer
            </h2>
          </div>

          <div className="image-column">
            <img src={image8} alt="Portrait" className="image-me" />
          </div>
        </div>

        <p className="description">
          Driven by empathy, simplicity, and curiosity
        </p>
      </div>
    </section>
  );
}
