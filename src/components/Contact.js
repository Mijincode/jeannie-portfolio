import React, { useEffect, useRef } from "react";
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./css/contact.css";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef();

  useEffect(() => {
    const el = sectionRef.current;

    const scrollTrigger = ScrollTrigger.create({
      trigger: el,
      start: "top center",
      end: "bottom center",
      onEnter: () => {
        gsap.to("body", { backgroundColor: "#DB7A00", duration: 0.5 });
        gsap.to("body", { color: "#FFFFFF", duration: 0.5 });
      },
      onEnterBack: () => {
        gsap.to("body", { backgroundColor: "#DB7A00", duration: 0.5 });
        gsap.to("body", { color: "#FFFFFF", duration: 0.5 });
      },
    });

    return () => {
      scrollTrigger.kill();
    };
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="contact-section">
      <div className="contact-content">
        <h1 className="contact-heading">Contact me</h1>
        <div className="contact-links">
          <a href="mailto:jeanniedoig@hotmail.com" className="contact-link">
            <AiOutlineMail className="contact-icon" /> Email
          </a>

          <a
            href="https://www.linkedin.com/in/mijin-lee-35b09b1b7/"
            className="contact-link"
          >
            <AiFillLinkedin className="contact-icon" /> LinkedIn
          </a>

          <a href="https://github.com/Mijincode" className="contact-link">
            <AiFillGithub className="contact-icon" /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
