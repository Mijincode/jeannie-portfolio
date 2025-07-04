import React from "react";
import "../pages/ChaeulBeauty.css";
import projectData from "../ProjectData";

export default function ChaeulBeauty() {
  const project = projectData["ChaeulBeauty"];

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
        </div>
        <div className="case-block">
          <h3>Summary</h3>
          <ul>
            <li>
              Goal: Build an elegant, multilingual and responsive website for
              online booking and portfolio browsing
            </li>
            <li>
              Initial Action: Designed and developed full site with calendar
              booking and language support
            </li>
            <li>Challenge: No-shows from booking system</li>
            <li>
              Pivot: After usage insights, redesigned site to replace booking
              with KakaoTalk consults
            </li>
            <li>
              Outcome: -60% no-shows, improved user trust, better alignment with
              real client workflow
            </li>
          </ul>
        </div>

        <div className="case-block">
          <h2>2. Context</h2>
          <p>
            The client, a cosmetic tattoo artist, initially relied solely on
            Instagram DMs to manage bookings. To improve professionalism and
            accessibility, I designed a website with multilingual support and
            calendar-based booking. However, real-world usage revealed
            unexpected friction.
          </p>

          <div className="timeline-flow">
            <div className="timeline-step">📸 Instagram DMs</div>
            <div className="timeline-arrow">→</div>
            <div className="timeline-step">📅 Booking-first Website</div>
            <div className="timeline-arrow">→</div>
            <div className="timeline-step">❌ No-shows & Friction</div>
            <div className="timeline-arrow">→</div>
            <div className="timeline-step">💬 Pivot to KakaoTalk</div>
            <div className="timeline-arrow">→</div>
            <div className="timeline-step">✅ Trust-based UX</div>
          </div>
        </div>

        <div className="case-block">
          <h2>3. Problems Identified</h2>
          <ul className="problem-bullets">
            <li>
              Instagram DMs lacked clarity, professionalism, and structure
            </li>
            <li>Calendar booking led to no-shows and required manual upkeep</li>
            <li>Calendar management became time-consuming for the artist</li>
            <li>
              Users preferred the ease and trust of KakaoTalk consultations
            </li>
          </ul>
        </div>

        {/* <section className="case-block">
          <h2>Research Insights</h2>
          <div className="section-summary">
            <h4>Quick Summary:</h4>

            <ul>
              <li>5 user interviews + 18 survey responses</li>
              <li>Users wanted clean portfolio & clear pricing</li>
              <li>Trust and simplicity were top priorities</li>
            </ul>
          </div>
          <ul>
            <li>83% of users prioritize a clean portfolio</li>
            <li>72% say trust is #1 decision factor</li>
            <li>Booking through Instagram is confusing</li>
          </ul>
        </section> */}

        <div className="case-block">
          <h2>4. Research Insights</h2>

          <div className="insights-summary-grid">
            <div className="insight-card">
              <h3> Interviews & Survey</h3>
              <p>5 user interviews, 18 survey responses</p>
            </div>
            <div className="insight-card">
              <h3>Visual Priority</h3>
              <p>83% prioritize a clean portfolio</p>
            </div>
            <div className="insight-card">
              <h3>Trust Matters Most</h3>
              <p>72% say trust is the #1 decision factor</p>
            </div>
            <div className="insight-card">
              <h3>💬 Booking Confusion</h3>
              <p>Instagram DMs felt unclear and slow</p>
            </div>
          </div>
        </div>

        <div className="case-block">
          <h2>3. Initial Build (Initial Design)</h2>
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
          <h2>5. Design Process</h2>

          <p>
            I began with a booking-first flow: clients could choose a date,
            select services, and confirm via calendar. It seemed efficient — but
            real users wanted something different.
          </p>

          <p>
            Post-launch research showed that users valued personal, trust-based
            consultations over speed. KakaoTalk was already their go-to tool for
            real-time, friendly communication.
          </p>

          <p>
            So I redesigned the experience: removed the calendar system,
            simplified the flow, and added a clear CTA to start a KakaoTalk
            consultation — aligning with what both the artist and clients
            actually preferred.
          </p>

          <p>
            I also redesigned the landing page to reflect Chaeul Beauty’s tone:
            calm, elegant, and service-oriented. Instead of generic images, the
            new layout shows categorized post-treatment results, helping users
            explore by their needs.
          </p>

          <p>
            Previously, the landing featured the founder's portrait and studio
            photos — meaningful, but distracting. I moved that content to a new{" "}
            <strong>About</strong> page to improve focus. Now, the landing
            highlights services and results, while the About page tells the
            brand story and introduces the space more intentionally.
          </p>
        </div>

        <div className="case-block">
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

        {/* <div className="case-block">
          <h2>7. Final Design</h2>
          <p>
            The redesigned version emphasizes high-quality visuals, multilingual
            access, and a CTA leading to KakaoTalk. This allowed the artist to
            pre-screen clients and reduce no-shows while creating a more elegant
            and trustworthy impression. This version emphasizes emotional
            resonance over functionality, aligned more closely with the client's
            evolved goals.
          </p>
          <h4>Landing Page</h4>
          <img
            src="https://res.cloudinary.com/dmvngssd0/image/upload/v1749014868/Screenshot_2025-06-04_at_3.27.30_pm_veuj0y.png"
            alt="New Landing Page"
            className="comparison-img"
          />
          <h4>About page</h4>
          <img
            src="https://res.cloudinary.com/dmvngssd0/image/upload/v1751549583/Screenshot_2025-07-03_at_11.24.13_pm_u0uvip.png"
            alt="New Landing Page"
            className="comparison-img"
          />
        </div> */}

        <div className="case-block">
          <h2>7. Final Design</h2>
          <p>
            The redesigned version emphasizes high-quality visuals, multilingual
            access, and a CTA leading to KakaoTalk. This allowed the artist to
            pre-screen clients and reduce no-shows while creating a more elegant
            and trustworthy impression.
          </p>

          <div className="side-by-side">
            <div className="image-label-group">
              <span className="image-label">After (Redesigned Landing)</span>
              <img
                src="https://res.cloudinary.com/dmvngssd0/image/upload/v1749014868/Screenshot_2025-06-04_at_3.27.30_pm_veuj0y.png"
                alt="New Landing Page"
                className="comparison-img"
              />
            </div>
          </div>

          <div className="image-label-group">
            <span className="image-label">About page (New): </span>
            <p>
              Introduced a separate About page to tell the artist's story more
              clearly, freeing the homepage to focus on services and results.
            </p>
            <img
              src="https://res.cloudinary.com/dmvngssd0/image/upload/v1751549583/Screenshot_2025-07-03_at_11.24.13_pm_u0uvip.png"
              alt="About Page"
              className="comparison-img"
            />
          </div>
        </div>

        <div className="case-block">
          <h2>8. Before vs. After Summary</h2>
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
          <h2>8. Impact</h2>
          <div className="impact-stats-grid">
            <div className="impact-card">
              <h3>📉</h3>
              <h4>-60%</h4>
              <p>No-show Rate</p>
            </div>
            <div className="impact-card">
              <h3>⏱️</h3>
              <h4>+40%</h4>
              <p>Time on Site</p>
            </div>
            <div className="impact-card">
              <h3>💬</h3>
              <h4>1.5×</h4>
              <p>KakaoTalk Inquiries</p>
            </div>
          </div>
        </div>

        <div className="case-block">
          <h2>9. Reflection</h2>
          <p>
            This project reminded me that great design isn’t just about visual
            polish — it’s about aligning with real user behavior. My initial
            assumptions led to friction, but through research and iteration, I
            shifted the UX toward something far more personal and effective.
          </p>
          <p>
            The final product wasn’t just more beautiful — it felt natural and
            intuitive to the client and her users. That shift, from automation
            to trust, was the core of the project’s success.
          </p>
        </div>

        <div className="case-block">
          <h2>10. Links & Resources</h2>
          <div className="button-group">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              View GitHub
            </a>
            <a
              href={project.webPage}
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              Visit Live App
            </a>
          </div>
          <ul>
            <li>
              <strong>Figma File:</strong> Available upon request
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
