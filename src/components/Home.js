import React from "react";
import myPhoto from "./images/myPhoto.jpg";
import "./css/home.css";

export default function Home() {
  return (
    <section id="home" className="home">
      <div className="home-container">
        <div className="home-content">
          <div className="text-column">
            <div>
              {" "}
              <h1 className="greeting">Jeannie Lee</h1>
              <h2 className="greeting-title">
                UI/UX Designer & Full-Stack Developer{" "}
              </h2>
            </div>
            <div>
              <p className="description">
                Driven by empathy, simplicity, and curiosity
              </p>
            </div>
          </div>

          <div className="image-column">
            <img src={myPhoto} alt="Portrait" className="image-me" />
          </div>
        </div>
      </div>
    </section>
  );
}
