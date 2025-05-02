import React from "react";
import Mijin from "./images/newPhoto.png";
import "./styles.css";

export default function Home() {
  return (
    <section id="home" className="home">
      <div className="home-container">
        <div className="home-content">
          <div className="text-column">
            <h1 className="greeting">Hi, I'm Jeannie</h1>
            <h2 className="title">A UI/UX Designer & Full-Stack Developer</h2>
          </div>

          <div className="image-column">
            <img src={Mijin} alt="Mijin Lee" className="image-me" />
          </div>
        </div>

        <p className="description">
          Driven by empaphy, simplicity, and curiosity
        </p>
      </div>
    </section>
  );
}
