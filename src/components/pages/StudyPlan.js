import React from "react";
import "./StudyPlan.css";

import projectData from "../ProjectData";

export default function StudyPlan() {
  const project = projectData["StudyPlan"];

  return (
    <section className="case-study-section-lms">
      <div className="case-study-container">
        <h1 className="case-study-title-lms">
          Learning Management System (LMS)
        </h1>

        <div className="case-block-lms">
          <h2>1. Project Overview</h2>
          <p>
            <strong>Client:</strong> Future Leaders Network (FNs Network)
          </p>
          <p>
            <strong>Team:</strong> 4 members (2 front-end, 1 back-end)
          </p>
          <p>
            <strong>My Role:</strong> Front-End Developer – Student Page
          </p>
          <p>
            <strong>Tools:</strong> React, REST API, JavaScript, CSS Modules
          </p>
          <p>
            <strong>Duration:</strong> 5 weeks | Agile Sprints
          </p>
          <p>
            The goal was to address the mismatch between standardized education
            and the unique pacing of individual students. We built a platform
            where learners can design their own study paths while educators
            manage structured modules.
          </p>
          <p>
            A full-stack Learning Management System (LMS) tailored for students
            and educators to create personalized study plans, track academic
            progress, and enhance self-guided learning experiences.
          </p>
        </div>

        <div className="case-block-lms">
          <h2>2. Problems</h2>
          <p>
            Traditional LMS platforms assume linear progression. This approach
            doesn’t work for students who need personalized pacing or
            flexibility.
          </p>
          <ul>
            <li>Students often feel “behind” or “ahead” with no support.</li>
            <li>Learning ends when the course ends—growth doesn’t continue.</li>
            <li>No structure for individualized learning plans.</li>
          </ul>
        </div>

        <div className="case-block-lms">
          <h2>2. Goals</h2>
          <ul>
            <li>
              Build tools for students to plan and personalize their studies
            </li>
            <li>
              Support teacher-created learning modules and progress oversight
            </li>
            <li>Provide admin access for role management and analytics</li>
          </ul>
        </div>

        <div className="case-block-lms">
          <h2>3. My Role</h2>
          <p>As the student page front-end developer, I was responsible for:</p>
          <ul>
            <li>Responsive dashboard UI for students</li>
            <li>Progress bars and visual components for weekly plans</li>
            <li>REST API integration for live student data</li>
            <li>Accessible design for mobile & desktop</li>
            <li>Coordination with back-end to align data structures</li>
          </ul>
        </div>

        <div className="case-block-lms">
          <h2>4. Design & Development Process</h2>

          <h3 className="process-step">Wireframes & UI</h3>
          <p>
            I created wireframes focused on student-centered flows, especially
            for plan creation and weekly schedule management. UI design
            emphasized readability, progress visualization, and modular
            component reuse.
          </p>
          <h3 className="process-step">Team Collaboration</h3>
          <p>
            We used Miro, Slack and Azure DevOps to manage our sprints. I
            collaborated closely with the back-end developer to ensure real-time
            sync for student data (plans, tasks, milestones) and worked
            alongside the second front-end teammate on layout consistency.
          </p>
        </div>

        <div className="case-block-lms">
          <h2>5. Key Features</h2>
          <ul>
            <li>Personalized Study Plan Builder with Drag-and-Drop</li>
            <li> Progress Dashboard with Visual Feedback</li>
            <li>Clash Detection in Timetables</li>
            <li> Teacher Module Management (Instructor View)</li>
            <li> Responsive Layout (Student Dashboard)</li>
          </ul>
        </div>

        <div className="case-block-lms">
          <h2>6. Tech Stack</h2>
          <ul>
            <li>React.js with React Router & Spring (animations)</li>
            <li>JavaScript (ES6+)</li>
            <li>REST API (Node.js + Express)</li>
            <li>CSS Modules</li>
          </ul>
        </div>

        <div className="case-block-lms">
          <h2>7. Outcomes & Reflections</h2>
          <ul>
            <li>
              Successfully delivered student dashboard with real-time features
            </li>
            <li>Improved collaboration skills through Agile team workflows</li>
            <li>Learned to balance technical feasibility with UX priorities</li>
          </ul>
          <p>
            Working on a real-world team taught me to prioritize both code and
            communication. I focused on clean, reusable front-end logic while
            making sure student flows remained intuitive. I also deepened my
            understanding of how UI supports educational outcomes.
          </p>
        </div>

        <div className="case-block-lms">
          <h2>8. Demo & Code</h2>
          <div className="video-wrapper">
            <iframe
              width="100%"
              height="315"
              src={project.videoSrc}
              title="Study Plan Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="button-group">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button-lms"
            >
              View GitHub
            </a>
            <a
              href={project.webPage}
              target="_blank"
              rel="noopener noreferrer"
              className="button-lms"
            >
              Visit Live App
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
