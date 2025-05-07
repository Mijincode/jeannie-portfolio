import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import peteCat from "./images/blueCat.png";
import shoe from "./images/shoe.png";
import "./css/about.css";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef();
  const peteRef = useRef();
  const shoeRef = useRef();

  useEffect(() => {
    const el = sectionRef.current;
    const pete = peteRef.current;
    const shoe = shoeRef.current;
    gsap.set(pete, { x: -200, rotation: -20, opacity: 0 });
    gsap.set(shoe, { transformOrigin: "bottom center", y: 0, rotation: 0 });

    const scrollTriggerInstance = ScrollTrigger.create({
      trigger: el,
      start: "top center",
      end: "bottom center",

      onEnter: () => {
        gsap.to("body", { backgroundColor: "#617864", duration: 0.5 });
        gsap.to("h1, h2, p, li", {
          color: "#F9F9F6",
          duration: 0.5,
        });

        gsap.to(pete, {
          x: 0,
          rotation: 20,
          opacity: 1,
          duration: 4,
          ease: "power3.out",
        });

        const shoeBounce = gsap.timeline({ repeat: -1, yoyo: true });
        shoeBounce
          .to(shoe, {
            y: -30,
            rotation: 15,
            duration: 0.4,
            ease: "power1.inOut",
          })
          .to(shoe, {
            y: 0,
            rotation: -15,
            duration: 0.4,
            ease: "power1.inOut",
          });
      },
      onLeave: () => {
        gsap.to(pete, {
          x: -200,
          rotation: -20,
          opacity: 0,
          duration: 1,
          ease: "power3.in",
        });
      },
      onEnterBack: () => {
        gsap.to("body", { backgroundColor: "#617864", duration: 0.5 });
        gsap.to("h1, h2, p, li", {
          color: "#F9F9F6",
          duration: 0.5,
        });

        gsap.to(pete, {
          x: 0,
          rotation: 20,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        });

        const shoeBounce = gsap.timeline({ repeat: -1, yoyo: true });
        shoeBounce
          .to(shoe, {
            y: -30,
            rotation: 15,
            duration: 0.4,
            ease: "power1.inOut",
          })
          .to(shoe, {
            y: 0,
            rotation: -15,
            duration: 0.4,
            ease: "power1.inOut",
          });
      },
      onLeaveBack: () => {
        gsap.to(pete, {
          x: -200,
          rotation: -20,
          opacity: 0,
          duration: 1,
          ease: "power3.in",
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
    <section id="about" ref={sectionRef}>
      <div className="about-container">
        <h2 className="custom-heading">About Me</h2>
        <div className="max-w-3xl mx-auto text-base leading-relaxed">
          <div className="sub-title-about">
            <p>From Classrooms to Code</p>
          </div>
          <p>
            My journey has been shaped by curiosity, creativity, and a deep
            appreciation for the transformative power of technology. After
            transitioning from the education sector to the tech industry, I’ve
            been eager to explore how UI/UX design and full-stack development
            can reshape digital experiences.
          </p>
          <p>
            It all began in high school, when I first experimented with
            Microsoft Office and explored the basics of coding. These early
            experiences sparked a fascination with technology, even though I
            initially pursued a teaching career. While inspiring students in the
            classroom, my passion for technology quietly grew stronger in the
            background, eventually guiding me to pursue a Graduate Certificate
            in Information Technology (Web Development).
          </p>
          <div className="sub-title-about">
            <p>Designing Beyond the Code</p>
          </div>
          <p>
            As I delved deeper into the field, my passion naturally evolved
            toward front-end development, UI/UX design, and crafting exceptional
            user experiences. Now, I am fully immersed in the world of UI/UX
            design, eager to make a meaningful impact by merging creativity with
            technology.
          </p>
          <p>
            In every project, I approach design with creativity and innovation,
            always striving to build solutions that are both functional and
            inspiring. I believe that the fusion of thoughtful design and
            cutting-edge technology can break barriers, solve complex problems,
            and leave a lasting mark on the digital world. Driven by a passion
            for pushing the boundaries of what's possible, I continually strive
            to create designs that prioritize creativity, functionality, and
            seamless user experience. For me, this journey is not just about
            coding and design—it's about crafting digital experiences that truly
            make a difference.
          </p>
          <p>
            Passionate about crafting visually engaging and user-friendly web
            experiences. With a strong foundation in design and development, I
            enjoy bringing ideas to life by focusing on aesthetics,
            functionality, and seamless user interactions. My experience in
            building responsive websites and intuitive interfaces allows me to
            create digital solutions that are both beautiful and efficient.
            Always eager to learn and grow, I strive to enhance user experiences
            through thoughtful design and clean, maintainable code.
          </p>
          <h2 className="custom-heading">Education: </h2>
          <ul className="leading-relaxed text-base">
            <li className="flex items-center mb-4">
              Graduate Certificate in Information Technology (Web Development) -
              (QUT) | 2023 - 2024
            </li>
            <li>Master of Teaching (Primary) - (QUT) | 2018 - 2021</li>
          </ul>
        </div>
        <div className="images-container">
          <img
            ref={peteRef}
            src={peteCat}
            alt="Pete the Cat"
            className="pete-the-cat"
            style={{
              position: "absolute",
              top: "80vh",
              left: "10vw",
              height: "40vh",
              opacity: 0,
              maxWidth: "100%",
              transition: "opacity 1s ease-out",
            }}
          />
          <img
            ref={shoeRef}
            src={shoe}
            alt="Shoe"
            className="shoe"
            style={{
              position: "absolute",
              top: "90vh",
              right: "8vw",
              width: "20vw",
              maxWidth: "90%",
              transition: "transform 0.3s ease-in-out",
            }}
          />
        </div>
      </div>
    </section>
  );
}
