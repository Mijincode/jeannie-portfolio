import React from "react";
import "../pages/ChaeulMiCaseStudyStyles.css";
import FinalGif from "../images/chaeulBeauty/Chaeulmi.gif";
import PhoneFrame from "../images/Rectangle.png";
import StickyNotes from "../images/stickyNotes.jpeg";
import hiFiVideo from "../videos/hiFiPrototype.mp4";
import { useSpring, animated } from "react-spring";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts"; // For visual data (pie chart)

const ChaeulBeauty = () => {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  // Data for pie chart visualization
  const researchData = [
    { name: "Value Portfolio", value: 83 },
    { name: "Trust as #1 Factor", value: 72 },
    { name: "Booking via Instagram", value: 60 },
    { name: "Clear Pricing Need", value: 65 },
  ];

  const COLORS = [
    "#FF6347", // Tomato
    "#4682B4", // SteelBlue
    "#32CD32", // LimeGreen
    "#FFD700", // Gold
  ];

  return (
    <main className="case-study-container">
      <header className="case-study-header">
        <animated.h1 className="case-study-title" style={fadeIn}>
          Chaeul Beauty Case Study
        </animated.h1>
        <animated.p className="case-study-subtitle" style={fadeIn}>
          A beauty tattoo artist website that reflects professionalism,
          elegance, and simplicity.
        </animated.p>
      </header>

      <section className="case-study-section problem-statement">
        <h2 className="section-title">Problem Statement</h2>
        <p>
          The client, a beauty tattoo artist, needed a website that reflected
          the elegance and professionalism of her work while also making it easy
          for potential clients to learn about services, view past work, and
          book appointments. Her existing online presence—limited to
          Instagram—made it difficult for users to find consistent information,
          trust the quality of the services, or take meaningful action.
        </p>
        <p>
          One key challenge was accessibility for international or
          non-Korean-speaking clients. Without multilingual support, many
          potential customers couldn't fully understand the content or navigate
          the booking process. To address this, I implemented{" "}
          <stron>a language switcher </stron>to allow foreign users to easily
          access content in their preferred language, significantly improving
          inclusivity.
        </p>
        <p>
          The overarching design goal was to create a site that was visually
          striking, intuitive to navigate, and built with the full user journey
          in mind—from discovery to booking—regardless of language barriers.
        </p>
      </section>

      <section className="case-study-section research">
        <h2 className="section-title">User Research</h2>
        <p>
          To gain insights into potential users, I conducted qualitative
          interviews with 5 clients of the artist and a short online survey with
          18 respondents who had experience with cosmetic tattooing. I also
          performed competitor analysis to identify the strengths and weaknesses
          of similar platforms.
        </p>
        <div className="research-container">
          {/* Pie chart to visualize the research insights */}
          <div className="research-chart">
            <PieChart width={400} height={400}>
              <Pie
                data={researchData}
                dataKey="value"
                nameKey="name"
                outerRadius={150}
                fill="#ff7f50"
                label
              >
                {/* Apply distinct colors to each section */}
                {researchData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>

            {/* Image section */}
            <div style={{ marginLeft: "30px", width: "400px" }}>
              <img
                src={StickyNotes}
                alt="Related to research"
                style={{
                  width: "100%",
                  height: "250px",
                  borderRadius: "8px",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                }}
              />
            </div>
          </div>
        </div>
        <p className="persona">
          Based on these insights, I created a <strong>user persona</strong>{" "}
          representing a typical customer:
        </p>

        <div className="persona-card">
          <h3>👩 Persona: Soo-jin (32, Marketing Manager)</h3>
          <ul>
            <li>
              <strong>Goals:</strong> Book confidently, see real examples of
              work, clear pricing, and reliable communication.
            </li>
            <li>
              <strong>Pain points:</strong> Hard to find info, trust issues, DM
              delays, and lack of booking consistency.
            </li>
            <li>
              <strong>Needs:</strong> Clear pricing, trust signals (like
              testimonials), mobile-friendly booking.
            </li>
          </ul>
        </div>

        {/* User quotes */}
        <div className="user-quotes">
          <h4>Direct User Quotes:</h4>
          <p>
            “I always look for a clean, well-presented portfolio first. It's
            easier to trust the artist.” – Soo-jin
          </p>
          <p>
            “Booking via Instagram DM is so confusing. I prefer an integrated
            system that tells me exactly when my appointment is.” – Emily
          </p>
        </div>

        <p>
          This persona shaped design decisions like prominent testimonials,
          simplified navigation, and an intuitive booking calendar.
        </p>
      </section>

      <section className="case-study-section design-process">
        <h2 className="section-title">Design Process</h2>
        <p>
          After gathering insights from research, I started designing wireframes
          that would simplify the user journey. The goal was to create a clean,
          user-friendly interface that highlights her portfolio while
          emphasizing easy navigation for booking appointments.
        </p>
        <div className="image-gallery">
          <img src={PhoneFrame} alt="Mockup Design" className="mockup-design" />
          <video width="360" height="720" controls>
            <source src={hiFiVideo} type="video/mp4" />
          </video>
        </div>
      </section>

      <section className="case-study-section final-design">
        <h2 className="section-title">Final Design</h2>
        <p>
          The final design focused on a clean and elegant layout that aligns
          with the client's brand identity. It includes:
        </p>
        <ul>
          <li>
            <strong>Easy navigation:</strong> Clear call-to-action buttons for
            booking and exploring services.
          </li>
          <li>
            <strong>Portfolio showcase:</strong> High-quality images of past
            work to build trust.
          </li>
          <li>
            <strong>Booking system:</strong> Integrated booking feature for a
            seamless client experience.
          </li>
        </ul>
        <p>
          This design reflects the client's artistic style and makes the process
          of booking an appointment easy and clear for potential clients.
        </p>
        <div className="image-gallery">
          <div className="final-product">
            <img src={FinalGif} alt="Final Design" className="final-product" />
          </div>
        </div>
      </section>

      <section className="case-study-section key-takeaways">
        <h2 className="section-title">Key Takeaways</h2>
        <ul>
          <li>
            <strong>Clarity in design:</strong> Prioritize easy navigation and
            clarity to build user trust.
          </li>
          <li>
            <strong>Building trust:</strong> Showcasing portfolio and
            testimonials helps users feel confident.
          </li>
          <li>
            <strong>Responsive design:</strong> Ensure seamless experience
            across devices.
          </li>
          <li>
            <strong>Booking integration:</strong> Reduce friction with embedded
            booking functionality.
          </li>
        </ul>
      </section>

      <section className="cta">
        <div className="cta-content">
          <h3 className="cta-title">Ready to get your beauty tattoo?</h3>
          <p className="cta-p">
            Explore more of Chaeul Beauty’s services or book your appointment
            today!
          </p>
          <div className="cta-button">
            <a href="https://chaeul-mi.com/">Explore the Full Website</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ChaeulBeauty;
