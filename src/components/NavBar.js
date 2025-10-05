import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "./images/jeannieLogo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);

  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen((v) => !v);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setSticky(y > 0);

      const scrollingDown = y > lastY;
      // 메뉴가 열려있지 않고, 어느정도 내려갔고, 아래로 스크롤 중이면 숨김
      if (scrollingDown && y > 120 && !menuOpen) setVisible(false);
      else setVisible(true);

      setLastY(y);
    };

    const onMouseMove = (e) => {
      // 화면 상단 80px 안으로 마우스가 들어오면 항상 표시
      if (e.clientY <= 80) setVisible(true);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [lastY, menuOpen]);

  // 메뉴 열면 강제로 표시 유지
  useEffect(() => {
    if (menuOpen) setVisible(true);
  }, [menuOpen]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleLinkClick = (sectionId) => {
    setMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/", { replace: true });
      setTimeout(() => scrollToSection(sectionId), 100);
    } else {
      scrollToSection(sectionId);
    }
  };

  return (
    <header
      className={`sticky ${sticky ? "active" : ""} ${visible ? "" : "hide"}`}
    >
      <nav className="navbar-container">
        <div className="navbar-content">
          <Link
            to="/"
            className="navbar-brand"
            onClick={() => scrollToSection("home")}
          >
            <img src={Logo} alt="jeannie-logo" className="logo" />
          </Link>

          <button
            className="hamburger"
            onClick={toggleMenu}
            aria-expanded={menuOpen}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>

          <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
            {["home", "projects", "skills", "about", "contact"].map(
              (section) => (
                <button
                  key={section}
                  className="nav-link"
                  onClick={() => handleLinkClick(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              )
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
