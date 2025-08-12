import React from "react";
import "./ChaeulBeauty.css";
import projectData from "../ProjectData";
import ProjectNav from "../ProjectNav";

export default function ChaeulBeauty() {
  const project = projectData["ChaeulBeauty"];

  return (
    <section className="case-study-section-chaeul">
      <div className="case-study-container">
        <h1 className="case-study-title-chaeul">
          Chaeul Beauty — Website Evolution
        </h1>

        <div className="case-block-chaeul">
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
        <div className="case-block-chaeul">
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

        <div className="case-block-chaeul">
          <h2>2. Context</h2>
          <p>
            The client, a cosmetic tattoo artist, initially relied solely on
            Instagram DMs to manage bookings. To improve professionalism and
            accessibility, I designed a responsive website with multilingual
            support and calendar-based booking. However, real-world usage
            revealed unexpected friction.
          </p>

          <div className="timeline-flow">
            <div className="timeline-step">Instagram DMs</div>
            <div className="timeline-arrow"></div>
            <div className="timeline-step">Booking-first Website</div>
            <div className="timeline-arrow"></div>
            <div className="timeline-step">❌ No-shows & Friction</div>
            <div className="timeline-arrow"></div>
            <div className="timeline-step">Pivot to KakaoTalk</div>
            <div className="timeline-arrow"></div>
            <div className="timeline-step">✅ Trust-based UX</div>
          </div>
        </div>

        <div className="case-block-chaeul">
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

        <div className="case-block-chaeul">
          <h2>4. Research Insights</h2>
          <div className="insights-summary">
            <div className="insight-card">
              <h3> - Client-side insight & Remote Observation</h3>
              <p>
                With the client in South Korea and myself in Australia, I
                conducted lightweight remote research. Insights were gathered
                from the client's ongoing Instagram conversations,
                consultations, and FAQs from her audience.
              </p>
            </div>
            <div className="insight-card">
              <h3> - Visual Priority</h3>
              <p>
                {" "}
                To improve clarity and professionalism, the redesigned landing
                page showcases post-treatment results by category (e.g., brows,
                lips, eyeliner). This structure allows users to quickly find
                relevant examples and encourages them to take the next step.
              </p>
            </div>
            <div className="insight-card">
              <h3> - Trust Matters Most</h3>
              <p>
                Choosing a cosmetic tattoo artist was an emotional decision.
                Users valued personal consultation and warmth more than price or
                speed.
              </p>
            </div>

            <div className="insight-card">
              <h3> - Booking Confusion</h3>
              Instagram DMs felt unclear. KakaoTalk, the trusted messenger in
              Korea, was a natural choice for bookings—familiar, fast, and
              user-preferred.
            </div>
          </div>
        </div>

        <div className="case-block-chaeul">
          <h2>5. Initial Build (Initial Design)</h2>
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
          <p className="video-title"> Landing Page Walkthrough(Web)</p>
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
          <p className="video-title">Booking Flow (Web)</p>
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

        <div className="case-block-chaeul">
          <h2>6. Redesign Process</h2>

          <p>
            I began with a booking-first flow: users could choose a date, select
            services, and confirm via calendar. It seemed efficient — but real
            users wanted something different.
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
            I redesigned the landing page to align with Chaeul Beauty’s calm and
            elegant brand. The new layout highlights treatment categories,
            letting users easily browse results based on their needs
          </p>

          <p>
            Previously, the landing featured the founder's portrait and studio
            photos — meaningful, but distracting. I moved that content to a new{" "}
            <strong>About</strong> page to improve focus. Now, the landing
            highlights services and results, while the About page tells the
            brand story and introduces the space more intentionally.
          </p>
        </div>

        <div className="case-block-chaeul">
          <h2>7. Brand Identity & Logo Design</h2>
          <p>
            In the original version, the logo was provided by the client,
            however, during the redesign, I took the opportunity to elevate the
            brand by creating a new logo that better reflects the studio’s
            values and aesthetic.
          </p>

          <img
            src="https://res.cloudinary.com/dmvngssd0/image/upload/v1748740064/logo_unyycj.png"
            alt="brand-logo"
            className="logo-image"
          />
          <p className="logo-description">
            The Chaeul Beauty logo is inspired by the original logo ‘美 (Mi)’,
            meaning beauty, reimagined in the abstract form of a blossoming
            flower. Flowers are a timeless symbol of beauty, and here, the
            -flower sits at the center of the design to represent elegance and
            harmony. The surrounding circular frame reflects the word ‘Chaeul
            (채울)’, which means "to fill" or "to complete" in Korean. Together,
            the logo conveys the philosophy of filling life with beauty, both
            inside and out. This elegant and minimal design captures the essence
            of refined natural beauty, aligning with the brand’s identity and
            the brand name.
          </p>
        </div>

        <div className="case-block-chaeul">
          <h2>8. Final Design</h2>
          <p>
            The redesigned version emphasizes high-quality visuals that align
            with Chaeul Beauty's brand and identity, featuring an
            easy-to-navigate homepage that showcases post-treatment results. The
            calendar booking system was removed to streamline the user
            experience.
          </p>

          <div className="side-by-side">
            <div className="image-label-group">
              <span className="image-label">After (Redesigned Landing)</span>
              <img
                src="https://res.cloudinary.com/dmvngssd0/image/upload/v1753243104/landingFullPage_xivrda.png"
                alt="New Landing Page"
                className="comparison-img"
              />
            </div>
          </div>
          <hr className="section-divider" />
          <div className="image-label-group">
            <span className="image-label">About page (New): </span>
            <p>
              Introduced a separate About page to tell the artist's story more
              clearly, freeing the homepage to focus on services and results.
            </p>
            <img
              src="https://res.cloudinary.com/dmvngssd0/image/upload/v1753243124/screencapture-localhost-3001-about-us-2025-07-23-13_58_20_i962su.png"
              alt="About Page"
              className="comparison-img"
            />
          </div>
        </div>

        <div className="case-block-chaeul">
          <h2>9. Before vs. After Summary</h2>
          <div className="table-wrapper">
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
        </div>

        <div className="case-block-chaeul">
          <h2>10. User Testing</h2>
          <p>
            After launching the redesigned website, I conducted 2 remote and 3
            moderated usability tests with 5 participants (mix of existing and
            potential clients). The aim was to measure booking flow
            discoverability, ease of navigation, and content engagement.
          </p>
          <ul className="user-testing-bullets">
            <li>
              <strong>Fast CTA Recognition</strong> All participants were able
              to locate the consultation CTA within 2 seconds.
            </li>
            <li>
              <strong>Clear Preference for KakaoTalk:</strong> 4 out of 5
              participants explicitly said they preferred contacting the artist
              through KakaoTalk rather than using a booking calendar, citing
              “more trust,” “easier conversation,” and “personal connection” as
              key reasons.
            </li>
            <li>
              <strong>Booking Anxiety</strong>
              Despite quick findability, some participants hesitated to book
              immediately, citing the need for personal trust and the
              seriousness of committing to a semi-permanent facial tattoo. This
              reinforced the importance of building trust and having a personal
              consultation before confirming.
            </li>
            <li>
              <strong>Visual Priorities:</strong> Participants spent most of
              their time browsing the post-treatment “after” images. The gallery
              proved to be the primary driver of confidence and trust in the
              artist’s skill.
            </li>
            <li>
              <strong>Navigation Efficiency:</strong> All participants could
              reach the treatment category they wanted in under 10 seconds,
              indicating that the new structure improved information
              accessibility.
            </li>
          </ul>
        </div>
        <div className="case-block-chaeul">
          <h2>11. Impact</h2>
          <ul className="impact-metrics">
            <li>
              <strong>No-show Rate ↓</strong>
              <p>
                Clients reported fewer missed bookings after the site redesign
                and improved scheduling flow.
              </p>
            </li>
            <li>
              <strong>Average Session Duration</strong>
              <p>
                Increased to <strong>1m 44s</strong>, indicating users were more
                engaged with the content.
              </p>
            </li>
            <li>
              <strong>KakaoTalk Inquiries</strong>
              <p>
                Client observed a rise in direct messages via KakaoTalk after
                CTA was added. More intuitive for Korean users.
              </p>
            </li>
            <li>
              <strong>Engagement Spike</strong>
              <p>
                On July 10, engagement events surged past <strong>10+</strong>{" "}
                after redesign launch.
              </p>
            </li>
          </ul>

          <div className="impact-graph">
            <img
              src="https://res.cloudinary.com/dmvngssd0/image/upload/v1752156293/Screenshot_2025-07-11_at_12.04.36_am_ft4rji.png"
              alt="User Engagement Analytics Chart"
              className="analytics-image"
            />
            <img
              src="https://res.cloudinary.com/dmvngssd0/image/upload/v1752155050/overview_gmzyc5.png"
              alt="overview"
              className="analytics-image"
            />
            <p className="caption">
              Google Analytics: Event Count & User Engagement Trend (Jun 13 –
              Jul 10, 2025)
            </p>
          </div>
        </div>
        <div className="case-block-chaeul">
          <h2>12. Reflection</h2>
          <p>
            This project reminded me that great design isn’t just about visual
            polish — it’s about deeply understanding and aligning with real user
            behavior. My initial “booking-first” assumption created unnecessary
            friction, but through observation, user testing, and iteration, I
            shifted the UX toward something far more personal and trust-based.
          </p>
          <p>
            The final product wasn’t just more beautiful — it felt natural,
            intuitive, and aligned with how the client and her audience already
            preferred to interact. This transformation from automation to
            relationship-focused interaction became the true measure of success.
          </p>
          <p>
            The user testing findings reinforced the decision to replace the
            booking calendar with a KakaoTalk consultation flow. By embracing
            the trust-building process and acknowledging the high-consideration
            nature of cosmetic tattoo decisions, the redesigned site now mirrors
            the way clients naturally choose their artist — through
            conversation, reassurance, and personal connection.
          </p>
        </div>

        <div className="case-block-chaeul">
          <h2>13. Links & Resources</h2>
          <strong>Figma File:</strong> Available upon request
          <div className="button-group">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button-chaeul"
            >
              View GitHub
            </a>
            <a
              href={project.webPage}
              target="_blank"
              rel="noopener noreferrer"
              className="button-chaeul"
            >
              Visit Live App
            </a>
          </div>
        </div>
        <ProjectNav />
      </div>
    </section>
  );
}
