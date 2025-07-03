import React from "react";
import "../pages/ChaeulBeauty.css";

// import PhoneFrame from "../images/chaeulBeauty/ChaeulAngle.png";
// import { useSpring, animated } from "react-spring";
// import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

// export default function ChaeulBeauty() {
//   const fadeIn = useSpring({
//     opacity: 1,
//     from: { opacity: 0 },
//     config: { duration: 1000 },
//   });

//   // Data for pie chart visualization
//   const researchData = [
//     { name: "Value Portfolio", value: 83 },
//     { name: "Trust as #1 Factor", value: 72 },
//     { name: "Booking via Instagram", value: 60 },
//     { name: "Clear Pricing Need", value: 65 },
//   ];

//   const COLORS = [
//     "#FF6347", // Tomato
//     "#4682B4", // SteelBlue
//     "#32CD32", // LimeGreen
//     "#FFD700", // Gold
//   ];

//   return (
//     <main className="case-study-container">
//       <header className="case-study-header">
//         <animated.h1 className="case-study-title" style={fadeIn}>
//           Chaeul Beauty Case Study
//         </animated.h1>
//         <animated.p className="case-study-subtitle" style={fadeIn}>
//           A beauty tattoo artist website that reflects professionalism,
//           elegance, and simplicity.
//         </animated.p>
//       </header>

//       <section className="case-study-section problem-statement">
//         <h2 className="section-title">Problem Statement</h2>
//         <p>
//           The client, a beauty tattoo artist, needed a website that reflected
//           the elegance and professionalism of her work while also making it easy
//           for potential clients to learn about services, view past work, and
//           book appointments. Her existing online presence—limited to
//           Instagram—made it difficult for users to find consistent information,
//           trust the quality of the services, or take meaningful action.
//         </p>
//         <p>
//           One key challenge was accessibility for international or
//           non-Korean-speaking clients. Without multilingual support, many
//           potential customers couldn't fully understand the content or navigate
//           the booking process. To address this, I implemented{" "}
//           <strong>a language switcher </strong>to allow foreign users to easily
//           access content in their preferred language, significantly improving
//           inclusivity.
//         </p>
//         <p>
//           The overarching design goal was to create a site that was visually
//           striking, intuitive to navigate, and built with the full user journey
//           in mind—from discovery to booking—regardless of language barriers.
//         </p>
//       </section>

//       <section className="case-study-section research">
//         <h2 className="section-title">User Research</h2>
//         <p>
//           To gain insights into potential users, I conducted qualitative
//           interviews with 5 clients of the artist and a short online survey with
//           18 respondents who had experience with cosmetic tattooing. I also
//           performed competitor analysis to identify the strengths and weaknesses
//           of similar platforms.
//         </p>

//         <div className="research-container">
//           {/* Pie chart to visualize the research insights */}
//           <div className="research-chart">
//             <PieChart width={400} height={400}>
//               <Pie
//                 data={researchData}
//                 dataKey="value"
//                 nameKey="name"
//                 outerRadius={150}
//                 fill="#ff7f50"
//                 label
//               >
//                 {/* Apply distinct colors to each section */}
//                 {researchData.map((entry, index) => (
//                   <Cell key={`cell-${index}`} fill={COLORS[index]} />
//                 ))}
//               </Pie>
//               <Tooltip />
//               <Legend />
//             </PieChart>
//           </div>
//         </div>
//         <p className="persona">
//           Based on these insights, I created a <strong>user persona</strong>{" "}
//           representing a typical customer:
//         </p>

//         <div className="persona-card">
//           <h3>👩 Persona: Soo-jin (32, Marketing Manager)</h3>
//           <ul>
//             <li>
//               <strong>Goals:</strong> Book confidently, see real examples of
//               work, clear pricing, and reliable communication.
//             </li>
//             <li>
//               <strong>Pain points:</strong> Hard to find info, trust issues, DM
//               delays, and lack of booking consistency.
//             </li>
//             <li>
//               <strong>Needs:</strong> Clear pricing, trust signals (like
//               testimonials), mobile-friendly booking.
//             </li>
//           </ul>
//         </div>

//         {/* User quotes */}
//         <div className="user-quotes">
//           <h4>Direct User Quotes:</h4>
//           <p>
//             “I always look for a clean, well-presented portfolio first. It's
//             easier to trust the artist.” – Soo-jin
//           </p>
//           <p>
//             “Booking via Instagram DM is so confusing. I prefer an integrated
//             system that tells me exactly when my appointment is.” – Emily
//           </p>
//         </div>

//         <p>
//           This persona shaped design decisions like prominent testimonials,
//           simplified navigation, and an intuitive booking calendar.
//         </p>
//       </section>

//       <section className="case-study-section design-process">
//         <div>
//           <h2 className="section-title">Design Process</h2>
//           <p>
//             After gathering insights from research, I started designing
//             wireframes that would simplify the user journey. The goal was to
//             create a clean, user-friendly interface that highlights her
//             portfolio while emphasizing easy navigation for booking
//             appointments.
//           </p>
//         </div>

export default function ChaeulBeauty() {
  // const researchData = [
  //   { name: "Value Portfolio", value: 83 },
  //   { name: "Trust as #1 Factor", value: 72 },
  //   { name: "Booking via Instagram", value: 60 },
  //   { name: "Clear Pricing Need", value: 65 },
  // ];

  // const COLORS = ["#FF6347", "#4682B4", "#32CD32", "#FFD700"];

  return (
    <section className="case-study-section">
      <div className="case-study-container">
        <h1 className="case-study-title">Chaeul Beauty — Website Evolution</h1>

        <div className="case-block">
          <h2>1. Overview</h2>
          <p>
            <strong>Client:</strong> Chaeul Beauty — Cosmetic Tattoo Studio
          </p>
          <p>
            <strong>Role:</strong> UX/UI Designer & Front-End Developer
          </p>
          <p>
            <strong>Tools:</strong> Figma, React, Cloudinary
          </p>
          <p>
            <strong>Timeline:</strong> 8~9 weeks (initial) + redesign phase
          </p>
          <p>
            I designed and developed the original website to support booking,
            portfolio browsing, and multilingual access. Later, the client
            requested a redesign that removed booking and emphasized elegance,
            trust, and simplicity.
          </p>
        </div>

        <div className="case-block">
          <h2>2. Project Background</h2>
          <p>
            I originally designed and developed the Chaeul Beauty website to
            help the client establish a professional digital presence beyond
            Instagram. The goal was to showcase her cosmetic tattoo work, enable
            seamless online booking, and accommodate international clients
            through multilingual support.
          </p>
          <p>
            The first version of the site included a full booking system, a
            dynamic portfolio, and a language switcher to serve both local and
            global audiences.
          </p>
          <p>
            After launching and observing user behavior for several months, the
            client realized a different approach would be more effective. Many
            users preferred consulting via KakaoTalk before booking, and
            automated scheduling led to frequent no-shows. Based on this, she
            requested a streamlined redesign that prioritized trust,
            conversation, and elegance over automation.
          </p>
        </div>

        <div className="case-block">
          <h2>3. Initial Build (Before Redesign)</h2>
          <p>
            The original version included a booking system with date selection,
            service breakdown, and confirmation flows. It aimed to help clients
            reserve appointments directly through the site.
          </p>

          <div className="mockup-images">
            <img
              src="https://res.cloudinary.com/dmvngssd0/image/upload/v1749010559/iphone13_x5dne8.png"
              alt="Mobile Mockup"
              className="mockup-design"
            />
            <img
              src="https://res.cloudinary.com/dmvngssd0/image/upload/v1749010549/Booking_o5de1t.png"
              alt="Booking Screen"
              className="mockup-design"
            />
          </div>

          {/* Landing Page Walkthrough */}
          <p className="video-title"> Landing Page Walkthrough</p>
          <video
            width="100%"
            height="auto"
            controls
            muted
            playsInline
            className="case-video"
          >
            <source
              src="https://res.cloudinary.com/dmvngssd0/video/upload/v1749016854/LandingPage_xndgvc.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {/* Booking Flow Video */}
          <p className="video-title">Booking Flow</p>
          <video
            width="100%"
            height="auto"
            controls
            muted
            playsInline
            className="case-video"
          >
            <source
              src="https://res.cloudinary.com/dmvngssd0/video/upload/v1749016438/Booking_rxg9g4.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <ul>
            <li>Multistep booking flow</li>
            <li>Calendar integration</li>
            <li>Call-to-actions focused on appointment conversion</li>
          </ul>
        </div>

        <div className="case-block">
          <h2>3. Why the Redesign?</h2>
          <p>
            After launching the original site, we tracked user engagement and
            gathered feedback over several months. While the on-site booking
            system worked as intended, it became clear that it wasn't the ideal
            solution for this specific business.
          </p>
          <ul>
            <li>
              <strong>User behavior:</strong> Most clients still preferred to
              book or consult through <em>KakaoTalk</em>, as it offered
              real-time communication and felt more personal.
            </li>
            <li>
              <strong>Operational issues:</strong> The automated booking system
              led to an increase in no-shows, as users could book without any
              prior conversation or commitment.
            </li>
            <li>
              <strong>Client pain points:</strong> Managing and updating
              availability via a calendar system became a time-consuming task
              for the artist, who preferred to screen each client individually.
            </li>
          </ul>
          <p>
            The original goal of convenience for both sides inadvertently
            created friction. Based on this insight, we pivoted the site’s
            purpose:
          </p>
          <ul>
            <li>
              Remove the booking feature to reduce no-shows and increase quality
              interactions
            </li>
            <li>
              Emphasize <strong>brand aesthetics</strong>, past work, and a
              clear value proposition
            </li>
            <li>
              Guide users toward direct messaging through{" "}
              <strong>KakaoTalk</strong>—the channel the artist trusted most
            </li>
          </ul>
          <p>
            The redesign shifted the website from a utility-first product into a
            brand-centered experience that builds trust before any appointment
            is booked.
          </p>
        </div>

        <div className="case-block">
          <h2>5. Redesign Goals</h2>
          <ul>
            <li>Remove booking system to prevent no-shows</li>
            <li>Highlight visual portfolio and brand story</li>
            <li>Drive visitors to consult via KakaoTalk</li>
            <li>Make the experience lighter, more mobile-focused</li>
          </ul>
        </div>

        <div className="branding-description">
          <h2>6. Brand Identity & Logo Design</h2>
          <p>
            In the original version, the logo was provided by the client, and my
            focus remained on layout and user flow. However, during the
            redesign, I took the opportunity to elevate the brand by creating a
            new logo that better reflects the studio’s values and aesthetic.
          </p>

          <img
            src="https://res.cloudinary.com/dmvngssd0/image/upload/v1748740064/logo_unyycj.png"
            alt="brand-logo"
            className="logo-image"
          />
          <p className="logo-description">
            The Chaeul Beauty logo is inspired by the Chinese character ‘美
            (Mi)’, meaning beauty, reimagined in the abstract form of a
            blossoming flower. Flowers are a timeless symbol of beauty, and
            here, the flower sits at the center of the design to represent
            elegance and harmony. The surrounding circular frame reflects the
            word ‘Chaeul (채울)’, which means "to fill" or "to complete" in
            Korean. Together, the logo conveys the philosophy of filling life
            with beauty, both inside and out. This elegant and minimal design
            captures the essence of refined natural beauty, aligning with the
            brand’s identify and the brand name.
          </p>
        </div>

        <div className="case-block">
          <h2>6. Redesigned Site (After)</h2>
          <p>
            The redesigned version features a soft, elegant layout with
            high-quality imagery, multilingual access, and direct KakaoTalk
            integration for easy consultations. Compared to the first iteration,
            this version emphasizes emotional resonance over functionality,
            aligned more closely with the client's evolved goals.
          </p>
          <img
            src="https://res.cloudinary.com/dmvngssd0/image/upload/v1749014868/Screenshot_2025-06-04_at_3.27.30_pm_veuj0y.png"
            alt="New Landing Page"
            className="comparison-img"
          />
        </div>

        <div className="case-block">
          <h2>7. Before vs. After Summary</h2>
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Before (Original)</th>
                <th>After (Redesign)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Booking</td>
                <td>On-site booking calendar</td>
                <td>Replaced with KakaoTalk chat link</td>
              </tr>
              <tr>
                <td>Conversion Goal</td>
                <td>Online scheduling</td>
                <td>Trust & consultation</td>
              </tr>
              <tr>
                <td>Visual Tone</td>
                <td>Functional and transactional</td>
                <td>Elegant, minimalist, emotional</td>
              </tr>
              <tr>
                <td>Client Feedback</td>
                <td>"Too many no-shows"</td>
                <td>"Now I can talk to each client before confirming"</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="case-block">
          <h2>8. Outcome & Reflections</h2>
          <p>
            This project reminded me that the best solution evolves with client
            needs. The redesign was not just visual—it was strategic. By
            aligning the website with the client's preferred communication
            style, we created something more authentic, useful, and sustainable.
          </p>
        </div>

        <div className="case-block">
          <h2>9. Links & Resources</h2>
          <ul>
            <li>
              <strong>Live Site:</strong>{" "}
              <a
                href="https://chaeul-mi.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://chaeul-mi.com/
              </a>
            </li>
            <li>
              <strong>GitHub Repo:</strong>{" "}
              <a
                href="https://github.com/Mijincode/Chaeul_mi"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/Mijincode/Chaeul_mi
              </a>
            </li>
            <li>
              <strong>Figma File:</strong> Available upon request
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
