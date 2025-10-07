import React from "react";
import "./ChaeulBeauty.css";
import projectData from "../ProjectData";
import ProjectNav from "../ProjectNav";
import Counter from "./Counter";
import JourneyMap from "./JourneyMap";

function QuickNav() {
  const items = [
    ["overview", "Overview"],
    ["summary", "Summary"],
    ["context", "Context"],
    ["problem", "Problem"],
    ["initial", "Initial Build"],
    ["research", "User Research"],
    ["redesign", "Redesign"],
    ["brand", "Brand & Logo"],
    ["final", "Final Design"],
    ["compare", "Before vs After"],
    ["testing", "User Testing"],
    ["impact", "Impact"],
    ["a11y", "A11y & i18n"],
    ["system", "Design System"],
    ["reflection", "Reflection"],
    ["links", "Links"],
  ];
  return (
    <nav className="quick-nav" aria-label="Quick navigation">
      {items.map(([id, label]) => (
        <a key={id} href={`#${id}`} className="quick-link">
          {label}
        </a>
      ))}
    </nav>
  );
}

export default function ChaeulBeauty() {
  const project = projectData["ChaeulBeauty"];

  return (
    <section className="case-study-section-chaeul">
      <div className="case-study-container">
        <h1 className="case-study-title-chaeul">
          Chaeul Beauty — Website Evolution
        </h1>
        {/*  */}
        {/* ===== TL;DR ===== */}
        {/* <section className="tldr" id="tldr">
          <div className="tldr-left">
            <h2 className="tldr-title">TL;DR</h2>
            <p className="tldr-one">
              First-time clients felt calendar booking was risky/impersonal. We
              pivoted to a **KakaoTalk consultation flow** to build trust.
            </p>
            <ul className="tldr-meta">
              <li>
                <strong>Role:</strong> UX/UI + Front-end
              </li>
              <li>
                <strong>Scope:</strong> Research → Design → Build → Measure
              </li>
              <li>
                <strong>Time:</strong> 8–9 weeks + redesign
              </li>
            </ul>
            <div className="tldr-actions">
              <a
                className="button-chaeul"
                href={project.webPage}
                target="_blank"
                rel="noreferrer"
              >
                Live site
              </a>
              <a
                className="button-ghost"
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a className="button-ghost" href="#links">
                Figma (request)
              </a>
            </div>
          </div>
          <div
            className="tldr-right metrics-grid"
            role="list"
            aria-label="Key outcomes"
          >
            <div className="metric" role="listitem">
              <div className="value">
                <Counter to={60} prefix="-" suffix="%" className="value-num" />
              </div>
              <div className="label">No-shows</div>
            </div>
            <div className="metric" role="listitem">
              <div className="value">+1m 44s</div>
              <div className="label">Avg. session</div>
            </div>
            <div className="metric" role="listitem">
              <div className="value">↑</div>
              <div className="label">Kakao enquiries</div>
            </div>
          </div>
        </section> */}

        <QuickNav />

        <div className="case-block-chaeul" id="overview">
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
            <strong>Timeline:</strong> 8~9 weeks + redesign
          </p>
        </div>
        <div className="case-block-chaeul" id="summary">
          <h2>2. Summary</h2>
          <ul>
            <li>
              Goal: elegant, multilingual, responsive site for browsing &
              booking
            </li>
            <li>Initial: calendar booking + language support</li>
            <li>Issue: high no-shows & perceived commitment risk</li>
            <li>Pivot: KakaoTalk consultation as primary CTA</li>
            <li>
              Outcome:{" "}
              <strong>
                <Counter
                  to={60}
                  prefix="-"
                  suffix="%"
                  hold={800}
                  blinkDuration={1200}
                  pauseAfterBlink={2000} // ← extra pause after the blink
                  className="stat-number"
                />{" "}
              </strong>{" "}
              no-shows, improved user trust, better alignment with real client
              workflow
            </li>
          </ul>
        </div>

        <div className="case-block-chaeul" id="context">
          <h2>3. Context</h2>
          <p>
            {/* The client, a cosmetic tattoo artist, initially relied solely on
            Instagram DMs to manage bookings. To improve professionalism and
            accessibility, I designed a responsive website with multilingual
            support and calendar-based booking. However, real-world usage
            revealed unexpected friction. */}
            The artist previously handled bookings via Instagram DMs. I shipped
            a booking-first website, but real usage showed friction and
            no-shows.
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

        <div className="case-block-chaeul" id="problem">
          <h2>4. Problem Statement</h2>
          <p className="problem-one">
            First-time clients perceived the calendar flow as risky/impersonal
            and preferred starting a conversation via KakaoTalk. Success = more
            consults, fewer no-shows.
          </p>
          <ul className="problem-bullets">
            <li>Instagram DMs lacked structure</li>
            <li>Calendar led to no-shows + maintenance overhead</li>
            <li>Users wanted a warmer, personal entry point</li>
          </ul>
        </div>

        <div className="case-block-chaeul" id="initial">
          <h2>5. Initial Build (Initial Design)</h2>

          <div className="mockup-images">
            <div className="section-label"> Mobile</div>
            <div className="mockup mockup--5up">
              {/* <img
                src="https://res.cloudinary.com/dmvngssd0/image/upload/v1759663874/phoneMockup_bujwcd.png"
                alt="Mobile Mockup"
                className="mockup-design"
              /> */}
              <img
                src="https://res.cloudinary.com/dmvngssd0/image/upload/v1759673322/landing_neu6iy.png"
                alt="Mobile Mockup"
                className="mockup-design"
              />
              <img
                src="https://res.cloudinary.com/dmvngssd0/image/upload/v1759673319/booking_gcpkjd.png"
                alt="Mobile Mockup"
                className="mockup-design"
              />
              <img
                src="https://res.cloudinary.com/dmvngssd0/image/upload/v1759673321/Gallery_nlskbs.png"
                alt="Mobile Mockup"
                className="mockup-design"
              />
              <img
                src="https://res.cloudinary.com/dmvngssd0/image/upload/v1759674206/review_tsruwa.png"
                alt="Mobile Mockup"
                className="mockup-design"
              />
              <img
                src="https://res.cloudinary.com/dmvngssd0/image/upload/v1759673320/faq_vkwqp1.png"
                alt="Mobile Mockup"
                className="mockup-design"
              />
            </div>
            <h5> Landing & Booking page</h5>
            <ul>
              <li>Multistep booking flow</li>
              <li>Calendar integration</li>
              <li>Call-to-actions focused on appointment conversion</li>
            </ul>
            <figcaption>
              <h5> Friction</h5>
              <ul className="callouts">
                <li>
                  <strong>1 —</strong> Above-the-fold visual focus helped
                  emotion & brand.
                </li>
                <li>
                  <strong>2 —</strong> Calendar CTA created commitment anxiety
                  for new users.
                </li>
              </ul>
            </figcaption>
          </div>
          <hr className="section-divider" />

          <div className="desktop-pair">
            <div className="video-card">
              {/* Landing Page Walkthrough */}
              <div className="section-label">Desktop - Landing Page</div>
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
            </div>

            {/* Booking Flow Video */}
            <div className="video-card">
              <div className="section-label">Desktop - Booking Flow</div>

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
            </div>
          </div>
        </div>

        <div className="case-block-chaeul" id="research">
          <h2>6. User Research Findings</h2>
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
          <div className="section-label"> Persona</div>

          <section className="persona persona--client">
            <section className="persona__profile">
              <h3 className="persona__name">Eunji Park</h3>
              <h3 className="persona__name">( First-time Client )</h3>

              <div className="persona__avatar">
                <img
                  src="https://images.unsplash.com/photo-1621390842036-f01b53d9cbfd?q=80&w=600&auto=format&fit=crop"
                  alt="Portrait placeholder for Eunji Park"
                />
              </div>

              <dl className="persona__facts">
                <div>
                  <dt>Age</dt>
                  <dd>27</dd>
                </div>
                <div>
                  <dt>Status</dt>
                  <dd>Office Worker</dd>
                </div>
                <div>
                  <dt>Location</dt>
                  <dd>Seoul</dd>
                </div>
                <div>
                  <dt>Experience</dt>
                  <dd>Never had cosmetic tattoo</dd>
                </div>
                <div>
                  <dt>Channel</dt>
                  <dd>KakaoTalk, Instagram</dd>
                </div>
              </dl>

              <figure className="persona__quote">
                <blockquote>
                  I want natural-looking brows, but I’m nervous about safety and
                  how long it lasts.
                </blockquote>
                <figcaption className="persona_caption">— Eunji</figcaption>
              </figure>
            </section>

            <section className="persona__details">
              <div className="persona__panel">
                <h3>Bio</h3>
                <p>
                  Young professional considering eyebrow tattoos for the first
                  time. Seeks convenience in daily routine but is anxious about
                  the procedure’s permanence and hygiene.
                </p>
              </div>

              <div className="persona__panel">
                <h3>Core Needs</h3>
                <ul className="bullets">
                  <li>Before/after photos to visualize results</li>
                  <li>Clear info about healing & aftercare</li>
                  <li>
                    Trust signals: sanitation, reviews, real client stories
                  </li>
                  <li>Friendly consultation before committing</li>
                </ul>
              </div>

              <div className="persona__panel">
                <h3>Frustrations</h3>
                <ul className="bullets">
                  <li>Unclear booking flows</li>
                  <li>Fear of unnatural or mismatched results</li>
                  <li>Anxiety about pain, healing time, and regret</li>
                </ul>
              </div>

              <div className="persona__grid-2">
                <div className="persona__panel">
                  <h3>Decision Drivers</h3>
                  <div className="chips">
                    <span className="chip">Trust</span>
                    <span className="chip">Safety</span>
                    <span className="chip">Natural Look</span>
                  </div>
                </div>
                <div className="persona__panel">
                  <h3>Platforms</h3>
                  <div className="iconline">
                    <span>Mobile-first, quick actions</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="persona__panel">
                  <h3>Success Metric</h3>
                  <div className="iconline">
                    <img
                      src="https://res.cloudinary.com/dmvngssd0/image/upload/v1758352459/Huge-icon_omurnd.png"
                      alt=""
                      aria-hidden="true"
                    />
                    <span>
                      Leaves consultation reassured → books confidently →
                      satisfied with natural result.
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </div>

        <div className="case-block-chaeul" id="redesign">
          <h2>7. Redesign Process</h2>

          <p>
            I removed the calendar system, simplified the flow, and added a
            clear CTA to start a KakaoTalk consultation — aligning with what
            both the artist and clients actually preferred.
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
        <JourneyMap />
        <div className="case-block-chaeul" id="brand">
          <h2>8. Brand Identity & Logo Design</h2>
          <p>
            In the original version, the logo was provided by the client,
            however, during the redesign, I took the opportunity to elevate the
            brand by creating a new logo that better reflects the studio’s
            values and aesthetic.
          </p>

          <p className="lede">Why a redesign</p>
          <ul className="why-redesign">
            <li>
              <strong>Legibility:</strong> The round badge with gradients and
              reversed type lost clarity at small sizes (favicon, watermark,
              buttons).
            </li>
            <li>
              <strong>Scalability:</strong> Raster-style highlight/shadow didn’t
              reproduce well in print or 1-color applications.
            </li>
            <li>
              <strong>Meaning:</strong> The form felt generic and didn’t express{" "}
              <em>채울</em> (“to fill/complete”) or the studio’s natural finish.
            </li>
            <li>
              <strong>System fit:</strong> Needed KR/EN lockups and a logo that
              works across dark/light UI without re-drawing.
            </li>
          </ul>
          <div className="image-wrapper">
            <div className="image-label-group">
              {/* <div className="section-label"> Previous Logo</div> */}
              <h4 className="previous-text">Previous Logo</h4>
              <img
                src="https://res.cloudinary.com/dmvngssd0/image/upload/v1759669492/logo_1_wetado.png"
                alt="brand-logo"
                className="previous-logo"
              />
            </div>
            <div className="image-label-group">
              {/* <div className="section-label"> Design Logo</div> */}
              <h4 className="current-logo">Design Logo</h4>
              <img
                src="https://res.cloudinary.com/dmvngssd0/image/upload/v1748740064/logo_unyycj.png"
                alt="brand-logo"
                className="logo-image logo-image--design"
              />
            </div>
          </div>
        </div>

        <div className="case-block-chaeul" id="final">
          <h2>9. Final Design</h2>
          <p>
            The redesigned version emphasizes high-quality visuals that align
            with Chaeul Beauty's brand and identity, featuring an
            easy-to-navigate homepage that showcases post-treatment results. The
            calendar booking system was removed to streamline the user
            experience.
          </p>

          <div className="side-by-side">
            <div className="image-label-group">
              <div className="section-label-chaeul">
                {" "}
                After (Redesigned Landing)
              </div>

              <img
                src="https://res.cloudinary.com/dmvngssd0/image/upload/v1759588277/screencapture-chaeul-mi-netlify-app-home-2025-10-05-00_30_05_i6ozxa.png"
                alt="New Landing Page"
                className="comparison-img"
              />
            </div>

            <hr className="section-divider" />

            <div className="image-label-group">
              <div className="section-label-chaeul"> About page (New):</div>
              <p>
                Introduced a separate About page to tell the artist's story more
                clearly, freeing the homepage to focus on services and results.
              </p>

              <img
                src="https://res.cloudinary.com/dmvngssd0/image/upload/v1759661886/screencapture-chaeul-mi-netlify-app-about-us-2025-10-05-20_57_23_viq7fq.png"
                alt="About Page"
                className="comparison-img"
              />
            </div>
          </div>
        </div>

        <div className="case-block-chaeul" id="compare">
          <h2>10. Before vs. After Summary</h2>
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

        <div className="case-block-chaeul" id="testing">
          <h2>11. User Testing</h2>
          <p>
            After launching the redesigned website, I conducted 2 remote and 3
            moderated usability tests with 5 participants (mix of existing and
            potential clients). The aim was to measure booking flow
            discoverability, ease of navigation, and content engagement.
          </p>
          <ul className="user-testing-bullets">
            <li>
              <strong>Fast CTA Recognition: </strong> All participants were able
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
              <strong>Booking Anxiety: </strong>
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

        <div className="case-block-chaeul anchor" id="impact">
          <h2>11. Impact</h2>
          <div className="metrics-grid">
            <div className="metric">
              <div className="value">-60%</div>
              <div className="label">No-shows</div>
            </div>
            <div className="metric">
              <div className="value">+1m 44s</div>
              <div className="label">Avg. session</div>
            </div>
            <div className="metric">
              <div className="value">↑</div>
              <div className="label">Kakao enquiries</div>
            </div>
          </div>
          <div className="baseline-table-wrap">
            <table
              className="baseline-table"
              aria-label="Before/after evidence"
            >
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>Baseline (6 wks)</th>
                  <th>Post (6 wks)</th>
                  <th>Δ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>No-shows</td>
                  <td>15 / 25 bookings</td>
                  <td>6 / 28 bookings</td>
                  <td>-60%</td>
                </tr>
                <tr>
                  <td>Avg. session</td>
                  <td>1m 05s</td>
                  <td>1m 44s</td>
                  <td>+39s</td>
                </tr>
                <tr>
                  <td>Kakao enquiries</td>
                  <td>—</td>
                  <td>↑ (client-reported)</td>
                  <td>Qual.</td>
                </tr>
              </tbody>
            </table>
            <p className="caption">
              Notes: manual tally by client; small sample; directional but
              actionable.
            </p>
          </div>
          {/* <ul className="impact-metrics">
            <li>
              <strong>
                <Counter
                  to={60}
                  prefix="-"
                  suffix="%"
                  hold={800}
                  blinkDuration={1200}
                  pauseAfterBlink={2000} // ← extra pause after the blink
                  className="stat-number"
                />{" "}
              </strong>
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
          </ul> */}

          {/* <div className="impact-graph">
            <img
              src="https://res.cloudinary.com/dmvngssd0/image/upload/v1752156293/Screenshot_2025-07-11_at_12.04.36_am_ft4rji.png"
              alt="User Engagement Analytics Chart"
              className="analytics-image"
            />
            <hr className="section-divider" />
            <img
              src="https://res.cloudinary.com/dmvngssd0/image/upload/v1752155050/overview_gmzyc5.png"
              alt="overview"
              className="analytics-image"
            />
            <p className="caption">
              Google Analytics: Event Count & User Engagement Trend (Jun 13 –
              Jul 10, 2025)
            </p>
          </div> */}
        </div>

        {/* ===== 13. A11y & i18n ===== */}
        <div className="case-block-chaeul anchor" id="a11y">
          <h2>13. Accessibility & i18n</h2>
          <table className="a11y-table">
            <tbody>
              <tr>
                <th>Contrast</th>
                <td>AA on text/icons; tested key pairs.</td>
              </tr>
              <tr>
                <th>Tap targets</th>
                <td>≥44px; focus states visible.</td>
              </tr>
              <tr>
                <th>i18n</th>
                <td>
                  Buttons auto-wrap; container grows for longer EN labels.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ===== 14. Design system snapshot ===== */}
        <div className="case-block-chaeul anchor" id="system">
          <h2>14. Design System (snapshot)</h2>
          <div className="system-row">
            <div className="swatch" style={{ "--c": "#E3AD39" }}>
              <span>#E3AD39</span>
            </div>
            <div className="swatch" style={{ "--c": "#131212" }}>
              <span>#131212</span>
            </div>
            <div className="swatch" style={{ "--c": "#FFFFFF" }}>
              <span>#FFFFFF</span>
            </div>
          </div>
          <div className="type-scale">
            {/* <div className="h1-sample">H1 / 28–36</div>
            <div className="h2-sample">H2 / 20–24</div>
            <div className="body-sample">Body / 16–18</div> */}
            <a
              className="button-chaeul"
              href="#"
              onClick={(e) => e.preventDefault()}
            >
              Primary Button
            </a>
            <button className="button-ghost" disabled>
              Ghost / Disabled
            </button>
          </div>
        </div>

        <div className="case-block-chaeul" id="reflection">
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

        <div className="case-block-chaeul" id="links">
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
