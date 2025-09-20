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
            </div>
            <div>
              <p className="description">
                As a UX/UI designer with a keen eye for structure and usability,
                I bridge the gap between business goals and real user needs. My
                process combines research, strategy, and design craft to create
                platforms that are not only beautiful, but purposeful and
                scalable.
              </p>
            </div>
            <h2 className="greeting-subtitle">UI/UX Designer with Web Dev </h2>
          </div>

          <div className="image-column">
            <img src={myPhoto} alt="Portrait" className="image-me" />
          </div>
        </div>
      </div>
    </section>
  );
}
