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
          <h2>3. Home Page</h2>
          <img
            src="https://res.cloudinary.com/dmvngssd0/image/upload/v1751590814/1_algsti.png"
            alt="Home Page Screenshot"
            className="full-img"
          />
          <p>
            The homepage includes a full-width hero image, clean nav bar, and a
            grid of product categories. Pink tones and rounded buttons reflect a
            soft, feminine aesthetic.
          </p>
        </div>

        <div className="case-block">
          <h2>4. Product Grid</h2>
          <img
            src="https://res.cloudinary.com/dmvngssd0/image/upload/v1751590797/2_wuqftd.png"
            alt="Product Grid"
            className="full-img"
          />
          <p>
            Users can browse trending items easily, with sale labels and price
            comparisons visible. Each product card includes a thumbnail, short
            description, and "View" button to access details.
          </p>
        </div>

        <div className="case-block">
          <h2>5. Product Detail Page</h2>
          <img
            src="https://res.cloudinary.com/dmvngssd0/image/upload/v1751590808/5_f8hk7w.png"
            alt="Product Detail Page"
            className="full-img"
          />
          <p>
            The detail view provides full product specifications, size
            measurements, stock levels, and purchase options. It's designed to
            minimize hesitation and maximize clarity before checkout.
          </p>
        </div>

        <div className="case-block">
          <h2>6. Admin Panel — Add Product</h2>
          <p>
            To support product updates without needing a developer, I designed a
            simple admin panel that allows for adding, updating, and deleting
            products. The interface includes:
          </p>
          <ul>
            <li>Text inputs for name, category, stock, and price</li>
            <li>File upload for product image</li>
            <li>CRUD buttons for create, update, and delete</li>
          </ul>
          <p>
            This made the storefront easier to maintain for non-technical users,
            enabling fast updates and inventory control without backend
            complexity.
          </p>
          <img
            src="https://res.cloudinary.com/dmvngssd0/image/upload/v1751591501/9_pl2cd0.png"
            alt="Add Product Page"
            className="full-img"
          />
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
