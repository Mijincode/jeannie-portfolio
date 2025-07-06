import React from "react";
import "./StyleSerenity.css";
import projectData from "../ProjectData";

export default function StyleSerenity() {
  const project = projectData["StyleSerenity"];
  return (
    <section className="case-study-section">
      <div className="case-study-container">
        <h1 className="case-study-title">Style Serenity — Fashion eCommerce</h1>

        <div className="case-block">
          <h2>1. Project Overview</h2>
          <p>
            <strong>Project:</strong> Style Serenity - Online Clothing &
            Accessories Store
          </p>
          <p>
            <strong>Role:</strong> UX/UI Designer & Front-End Developer
          </p>
          <p>
            <strong>Tools:</strong> HTML, CSS, Bootstrap 5
          </p>
          <p>
            <strong>Duration:</strong> 2.5 weeks
          </p>

          <p>
            <strong>Purpose:</strong> Create a clean and aesthetic online store
            where users can easily browse categories, discover trending items,
            and enjoy a smooth shopping experience.
          </p>
        </div>

        <div className="case-block">
          <h2>2. Goals & Requirements</h2>
          <ul>
            <li>
              Create a functional product browsing and checkout experience
            </li>
            <li>Showcase fashion items across multiple categories</li>
            <li>Design a mobile-friendly, visually appealing layout</li>
            <li>Enable product filtering and cart functionality</li>
            <li>Include a simple admin page for easy product management</li>
          </ul>
        </div>

        <div className="case-block">
          <h2>3. Design Process</h2>
          <p>
            <strong>1. Empathize:</strong> I began by identifying the target
            audience: fashion-conscious online shoppers, often browsing on
            mobile. I reviewed trends in modern eCommerce, conducted light
            competitor analysis, and noted pain points—such as cluttered
            layouts, confusing navigation, and poor mobile responsiveness.
          </p>{" "}
          <p>
            <strong>2. Define:</strong> The goal was to design a clean,
            feminine, and efficient shopping experience. The core needs were: -
            simple navigation, - quick product comparison, and - a stress-free
            path to checkout.
          </p>{" "}
          <p>
            <strong>3. Ideate:</strong> I wireframed multiple homepage and
            product layouts, exploring ways to group categories, display
            trending items, and keep CTAs prominent. I also planned a minimal
            admin panel for non-developers to easily manage inventory.
          </p>{" "}
          <p>
            <strong>4. Prototype:</strong> I built high-fidelity mockups using
            pink tones and soft shapes to reflect a feminine aesthetic. Each
            section was tested for visual clarity and responsive behavior.
          </p>{" "}
          <p>
            <strong>5. Test & Iterate:</strong> I shared the prototype with
            peers for feedback. Based on responses, I improved image-to-text
            balance, clarified product detail layouts, and ensured mobile
            layouts felt just as intuitive.
          </p>{" "}
          <p>
            This process led to a focused, visually inviting eCommerce
            experience with clearly segmented product views and simple admin
            tools.
          </p>
        </div>

        <div className="case-block">
          <h2>4. Low Fidelity Wireframes</h2>
          <div className="wireframes-grid-styleSerenity">
            <div>
              <p className="section-label">Landing Page</p>
              <img
                src=" https://res.cloudinary.com/dmvngssd0/image/upload/v1751590748/LandingPage-Desktop_yr4mxv.png"
                alt="Home Page Screenshot"
              />
            </div>

            <div>
              <p className="section-label">Product Detail Page</p>
              <img
                src="https://res.cloudinary.com/dmvngssd0/image/upload/v1751590754/Productpage_cabsqe.png"
                alt="Home Page Screenshot"
              />
            </div>
            <div>
              <p className="section-label">Admin Panel</p>
              <img
                src="https://res.cloudinary.com/dmvngssd0/image/upload/v1751590745/Addproduct_vv13cb.png"
                alt="Home Page Screenshot"
              />
            </div>
          </div>
        </div>
        {/* 3. Hi-Fi Designs */}
        <div className="case-block">
          <h2>5. High-Fidelity Designs</h2>

          <div className="wireframes-grid-styleSerenity">
            <div>
              <p className="section-label">Homepage</p>
              <img
                src="https://res.cloudinary.com/dmvngssd0/image/upload/v1751590355/1_afvdrf.png"
                alt="Home Page Screenshot"
              />
            </div>

            <div>
              <p className="section-label">Hompage (Product Grid)</p>
              <img
                src="https://res.cloudinary.com/dmvngssd0/image/upload/v1751590797/2_wuqftd.png"
                alt="Product Grid"
              />
            </div>

            <div>
              <p className="section-label">Product Detail Page</p>
              <img
                src="https://res.cloudinary.com/dmvngssd0/image/upload/v1751590808/5_f8hk7w.png"
                alt="Product Detail Page"
              />
            </div>

            <div>
              <p className="section-label">Admin Panel</p>
              <img
                src="https://res.cloudinary.com/dmvngssd0/image/upload/v1751591501/9_pl2cd0.png"
                alt="Admin Panel"
              />
            </div>
          </div>
        </div>

        <div className="case-block">
          <h2>7. Reflections & Learnings</h2>
          <ul>
            <li>Practiced HTML/CSS layout and card component structure</li>
            <li>Learned to manage simple cart logic and styling consistency</li>
            <li>
              Focused on visual spacing, accessibility, and mobile
              responsiveness
            </li>
          </ul>
          <p>
            This project was a valuable exercise in eCommerce design, teaching
            me how to present products clearly while maintaining an engaging
            brand tone.
          </p>
        </div>

        <div className="case-study-section">
          <h2 className="section-title">8. Demo & Code</h2>
          <div className="video-wrapper">
            <strong>Live Demo:</strong>{" "}
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
              className="button"
            >
              View GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
