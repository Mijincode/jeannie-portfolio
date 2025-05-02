import React from "react";
import "../index.css";
import "./styles.css";
// import { AcademicCapIcon } from "@heroicons/react/outline";

function About() {
  return (
    <section id="about">
      <div className="about-container">
        <h2 className="text-4xl font-bold text-center mb-20 mt-10">About Me</h2>

        <div className="max-w-3xl mx-auto text-base leading-relaxed">
          <div className="sub-title-about">
            <strong>From Classrooms to Code</strong>
          </div>
          <p>
            my journey has been shaped by curiosity, creativity, and a deep
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
            <strong>Designing Beyond the Code</strong>
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
          <h2 className="custom-heading">Education: </h2>{" "}
          <ul className="leading-relaxed text-base">
            <li className="flex items-center mb-4">
              <span className="inline-block w-5 h-5 mr-2 text-green-500" />
              Graduate Certificate in Information Technology (Web Development) -
              (QUT) | 2023 - 2024
            </li>
            <li>
              <span className="inline-block w-5 h-5 mr-2 text-green-500" />
              Master of Teaching (Primary) - (QUT) | 2018 - 2021
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default About;
