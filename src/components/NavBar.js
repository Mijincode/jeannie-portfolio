import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLinkClick = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: true });
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    } else {
      scrollToSection(sectionId);
    }
  };

  return (
    <header className="sticky">
      <nav className="navbar-container">
        <div className="navbar-content">
          <Link
            to="/"
            className="navbar-brand"
            onClick={() => scrollToSection("home")}
          >
            Jeannie's Portfolio
          </Link>

          <div className="navbar-links">
            <button
              className="nav-link"
              onClick={() => handleLinkClick("home")}
            >
              Home
            </button>
            <button
              className="nav-link"
              onClick={() => handleLinkClick("about")}
            >
              About
            </button>
            <button
              className="nav-link"
              onClick={() => handleLinkClick("skills")}
            >
              Skills
            </button>
            <button
              className="nav-link"
              onClick={() => handleLinkClick("projects")}
            >
              Projects
            </button>
            <button
              className="nav-link"
              onClick={() => handleLinkClick("contact")}
            >
              Contact
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
