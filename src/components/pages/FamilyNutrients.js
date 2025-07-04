import React from "react";
import "../pages/FamilyNutrients.css";

export default function FamilyNutrients() {
  return (
    <section className="case-study-section">
      <div className="case-study-container">
        <h1 className="case-study-title">
          Healthy Family Nutrients — Recipe Sharing Platform
        </h1>

        <div className="case-block">
          <h2>1. Project Overview</h2>
          <p>
            <strong>Client:</strong> Healthy Family Nutrients – Family-focused
            recipe sharing site
          </p>
          <p>
            <strong>Role:</strong> UX/UI Designer
          </p>
          <p>
            <strong>Tools:</strong> Figma
          </p>
          <p>
            <strong>Duration:</strong> 4 weeks
          </p>
          <p>
            <strong>Purpose:</strong> To design an accessible and user-friendly
            platform for families to browse, share, and submit recipes across
            generations.
          </p>
        </div>

        <div className="case-block">
          <h2>2. Client Needs</h2>
          <ul>
            <li>
              Create a mobile-first recipe platform with intuitive user flows
            </li>
            <li>
              Ensure accessibility across age groups and digital familiarity
              levels
            </li>
            <li>Support browsing, viewing, and submitting recipes easily</li>
            <li>Develop a warm, trustworthy, nature-inspired visual brand</li>
            <li>
              Facilitate future development with a clean, handoff-ready design
              system
            </li>
          </ul>
        </div>

        <div className="case-block">
          <h2>3. Research & Brand Direction</h2>
          <ul>
            <li>
              Analyzed recipe app competitors with a focus on accessibility and
              family engagement
            </li>
            <li>
              Interviewed sample users (ages 15–65) to understand content
              expectations and navigation patterns
            </li>
            <li>
              Created moodboards and visual direction inspired by nature,
              warmth, and tradition
            </li>
          </ul>
        </div>

        <div className="case-block">
          <h2>4. Design Objectives</h2>
          <ul>
            <li>Design a responsive layout accessible on phones and tablets</li>
            <li>
              Enable quick recipe discovery and easy browsing by category or
              ingredients
            </li>
            <li>
              Streamline the recipe submission process for non-technical users
            </li>
            <li>
              Create a reusable component library to support developer
              implementation
            </li>
          </ul>
        </div>

        <div className="case-block">
          <h2>5. Design Process</h2>

          <div className="process-step">
            <h3>Wireframing & User Flows</h3>
            <p>
              Created low to high-fidelity wireframes for mobile and tablet
              views. Mapped out user flows for recipe discovery, filtering,
              viewing, and contribution.
            </p>
            <div className="wireframes-section">
              <p className="section-label">Low-Fi</p>
              <div className="wireframes-grid">
                <img
                  src="https://res.cloudinary.com/dmvngssd0/image/upload/v1751589823/20250701_001301_hclqyx.png"
                  alt="Low Fidelity Wireframe 1"
                />
              </div>

              <p className="section-label">Hi-Fi</p>
              <div className="wireframes-grid">
                <img
                  src="https://res.cloudinary.com/dmvngssd0/image/upload/v1751495210/Landing_Page_1_xjrt5b.png"
                  alt="Hi Fidelity Wireframe 1"
                />
                <img
                  src="https://res.cloudinary.com/dmvngssd0/image/upload/v1751495207/Recipe_List_Page_1_mxbs4c.png"
                  alt="Hi Fidelity Wireframe 2"
                />
                <img
                  src="https://res.cloudinary.com/dmvngssd0/image/upload/v1751495198/Detail_Recipe_Page_-_Ingredients_-1_mbreze.png"
                  alt="Hi Fidelity Wireframe 3"
                />
                <img
                  src="https://res.cloudinary.com/dmvngssd0/image/upload/v1751495206/Delete_recipe_fp84b4.png"
                  alt="Hi Fidelity Wireframe 4"
                />
              </div>
            </div>
          </div>

          <div className="process-step">
            <h3>Visual Design</h3>
            <p>
              Developed a nature-inspired design system: warm color palette,
              friendly icons, and soft typography. Built UI components with
              accessibility and generational usability in mind.
            </p>
          </div>

          <div className="process-step">
            <h3>Prototyping & Handoff</h3>
            <p>
              Created clickable prototypes in Figma. Delivered structured
              handoff with documentation, organized components, and design specs
              to front-end developer.
            </p>
            <iframe
              style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
              width="800"
              height="450"
              src="https://embed.figma.com/design/bliM6ebweIBktbQA6FDPDK/Doig-s-recipe?node-id=0-1&embed-host=share"
              allowFullScreen
              title="prototype"
            ></iframe>
          </div>
        </div>

        <div className="case-block">
          <h2>6. Outcome</h2>
          <ul>
            <li>Responsive wireframes and high-fidelity designs completed</li>
            <li>Nature-themed branding aligned with target audience values</li>
            <li>
              Developer handoff supported with detailed assets and QA support
            </li>
            <li>Design phase complete; platform currently under development</li>
          </ul>
        </div>

        <div className="case-block">
          <h2>7. Reflections</h2>
          <p>
            This project reinforced the importance of designing for
            accessibility across diverse users. By blending usability testing
            insights with thoughtful visual design, I created a platform that
            feels welcoming, clear, and easy to use. Collaborating closely with
            a developer also sharpened my communication skills and helped me
            ensure a smooth transition from design to code.
          </p>
        </div>

        <div className="case-block">
          <h2>8. Figma & Resources</h2>
          <ul>
            <li>
              <strong>Figma File:</strong> Available upon request
            </li>
            <li>
              <strong>Status:</strong> In development by front-end developer
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
