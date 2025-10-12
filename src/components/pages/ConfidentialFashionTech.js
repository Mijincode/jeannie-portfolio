import React from "react";
import "./ConfidentialFashionTech.css";
import ProjectNav from "../ProjectNav";

export default function ConfidentialFashionTech() {
  return (
    <section className="case-study-section-conf">
      <div className="case-study-container">
        <h1 className="case-study-title-conf">
          Confidential FashionTech Platform — UX/UI Lead (NDA)
        </h1>

        <div className="case-block-conf">
          <h2>1. Overview</h2>
          <p className="disclaimer">
            * Note : All visuals and flows are recreated and anonymised to
            protect client confidentiality. This case study focuses on my UX/UI
            process and outcomes; proprietary materials are excluded under the
            NDA.
          </p>
          <p>
            <strong>Role:</strong> Led UX/UI design end-to-end
          </p>
          <p>
            <strong>Tools:</strong> Figma, Miro
          </p>
          <p>
            <strong>Duration:</strong> 4 weeks
          </p>
          <p>
            <strong>Deliverables:</strong> multiple responsive flows and an
            interactive prototype
          </p>
        </div>

        <div className="case-block-conf">
          <h2>2. Problem Statement</h2>
          <p>
            The client’s existing website suffered from low traffic and
            engagement due to outdated visuals, poor navigation, and missing
            core functionality. While the original request was for a simple
            5-page site, this limited scope did not reflect the real needs of
            users or the client’s business goals.
          </p>
          <p>
            Users faced information overload and confusing filters without clear
            guidance, leading to frustration and high drop-off rates. Meanwhile,
            the client sought a modern, high-end digital experience that could
            build trust and position the brand for future expansion.
          </p>
          <p>
            The challenge was to bridge the gap between a minimalist vision and
            the need for a scalable, user-centered platform — balancing business
            objectives with practical usability.
          </p>
        </div>

        <div className="case-block-models">
          <h2>3. Business Goals</h2>
          <div className="insights-summary">
            <div className="insight-card">
              <h3> - Modernize the Brand:</h3>
              <p>
                Transform an outdated, low-traffic site into a premium, high-end
                digital platform that builds credibility with users and clients.
              </p>
            </div>
            <div className="insight-card">
              <h3> - Enable Growth:</h3>
              <p>
                Add essential features such as structured participation flows,
                portfolio uploads, and consent processes for under-18 users —
                creating opportunities for engagement and revenue.
              </p>
            </div>

            <div className="insight-card">
              <h3> - Guide Aspiring Users</h3>
              <p>
                Launch an onboarding page to provide step-by-step learning,
                industry insight, and clear career pathways.
              </p>
            </div>

            <div className="insight-card">
              <h3> - Support Industry Professionals</h3>
              <p>
                Build advanced search and filtering tools to help professionals
                quickly discover relevant talent.
              </p>
            </div>

            <div className="insight-card">
              <h3> - Scalability</h3>
              <p>
                Deliver a flexible design system that adapts across desktop and
                mobile, ensuring long-term growth for the business.
              </p>
            </div>
          </div>
        </div>

        <div className="case-block-models">
          <h2>4. Existing Site Analysis </h2>
          <p>
            I conducted a UX audit of the client’s legacy website to identify
            pain points and usability barriers. The evaluation revealed several
            structural and visual issues that reduced trust and discoverability.
          </p>

          <ol className="analysis-points">
            <li>
              <strong>Poor Navigation</strong>
              <ul>
                <li>
                  Cluttered menus and unclear hierarchy created confusion.
                </li>
              </ul>
            </li>

            <li>
              <strong>Outdated Visuals</strong>
              <ul>
                <li>
                  Inconsistent typography, weak spacing, and poor hierarchy.
                </li>
                <li>
                  Undermined credibility for a high-end digital experience.
                </li>
              </ul>
            </li>

            <li>
              <strong>Low Engagement</strong>
              <ul>
                <li>Long text blocks caused scanning fatigue</li>
                <li>Minimal interactivity led to early user drop-off</li>
              </ul>
            </li>

            <li>
              <strong>Ineffective Search</strong>
              <ul>
                <li>Overloaded with dropdowns and checkboxes</li>
                <li>Lacked hierarchy or progressive filtering</li>
                <li>Failed to visually highlight key content</li>
                <li>inconsistent control styling that reduced trust</li>
              </ul>
            </li>
          </ol>
        </div>

        <div className="case-block-models">
          <h2>5. User Research Findings</h2>
          <p>
            To validate assumptions from the site audit, I conducted lightweight
            interviews and prototype testing sessions with aspiring models,
            parents, and industry professionals.{" "}
          </p>

          <p>
            The research helped uncover specific usability challenges in the
            legacy design:
          </p>

          <ol>
            <li>
              Navigation was unclear and caused confusion for most participants.
            </li>
            <li>
              Clients found the dropdown-heavy search overwhelming and
              inefficient.
            </li>
            <li>
              Users skimmed long text blocks and quickly disengaged due to low
              scannability.
            </li>
          </ol>
          <p>
            These insights confirmed the audit findings and provided user-backed
            evidence to prioritize improvements: clearer navigation,
            trust-building visuals, structured flows, and modern discovery
            tools.
          </p>
        </div>

        <div className="case-block-models">
          <h2>6. Ideation</h2>
          <p>
            Based on the research findings, I explored ways to evolve the
            initial five-page brief into a scalable platform. I expanded the
            sitemap into detailed user flows for participation, portfolio
            management, and two key user groups.
          </p>

          <p>
            Key ideas included breaking dense tasks into multi-step journeys
            (e.g., entry forms), adding meaningful hover/tap states with
            keyboard-accessible focus patterns, and tailoring account flows for
            different user roles.
          </p>

          <p>
            I balanced a high-end aesthetic with usability through clear
            typography, strong visual hierarchy, and grid-based layouts that
            support content scale.
          </p>

          <p>
            Early sketches and low-fidelity wireframes tested alternative
            layouts for grids, filters, and forms, helping validate the
            information architecture before moving into high-fidelity
            prototypes.
          </p>
        </div>

        <div className="case-block-models">
          <h2>7. Solution</h2>
          <p>
            The old site was outdated, lacked essential functionality, and did
            not meet user needs. For the redesign, I developed scalable user
            journeys and interactive prototypes that extended beyond the
            original five-page brief — introducing modern features and improved
            usability.
          </p>
          <ul className="solution-list">
            <li>
              <strong>Participation Flow:</strong> The original site had no
              structured entry process. I designed a clear, multi-step flow with
              age-appropriate consent and confirmation steps to ensure clarity
              and trust for all users.
            </li>
            <li>
              <strong>Portfolio Creation:</strong> Introduced guided account
              setup with structured information entry, user specialties, and
              upload functionality — enabling users to present their work more
              effectively.
            </li>
            <li>
              <strong>Discovery Tools:</strong> Added refined search and
              filtering with grid-based layouts, allowing professionals to
              discover profiles efficiently. This functionality was missing in
              the previous design.
            </li>
            <li>
              <strong>Scalable Design System:</strong> Built a responsive,
              component-driven system with consistent hierarchy and reusable UI
              patterns across desktop and mobile.
            </li>
            <li>
              <strong>Visual Direction:</strong> Delivered a clean, high-end
              visual language aligned with the client’s positioning, while
              maintaining accessibility and inclusivity.
            </li>
          </ul>
        </div>

        <div className="case-block-models">
          <h2>8. User Flow</h2>
          <figcaption className="caption">
            An anonymized user-flow diagram (recreated for portfolio). It
            illustrates generalized journeys for different user groups:
            onboarding, discovery/search, and a consent-aware participation
            flow. No client assets or proprietary details are shown.
          </figcaption>
          <div className="user-flow-diagram">
            <img
              src="https://res.cloudinary.com/dmvngssd0/image/upload/v1760252526/userFlow_yb5u7t.png"
              alt="User Flow"
              className="user-flow"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="case-block-models">
            <h2>9. Outcome</h2>
            <p>
              <p>
                What began as a simple five-page request grew into a
                comprehensive, scalable platform across web and mobile. The
                redesign improved trust, clarified application flows, and
                introduced portfolio uploads that didn’t exist before.
              </p>
            </p>
            <p>
              The client praised the premium design quality, which now aligns
              with their brand vision. For users, the site provides guidance,
              interactivity, and a trustworthy platform. For the business, it
              delivers scalability and a foundation for growth.
            </p>
            <p className="mt-8">
              The project proved the value of a{" "}
              <strong>UX-driven approach</strong>: instead of static layouts,
              the deliverables combined{" "}
              <strong>
                user research, journeys, flows, prototypes, and testing
              </strong>{" "}
              to align real user needs with business goals. This transformation
              gave the startup a credible, high-end presence in the market and a
              strong foundation for growth.
            </p>
          </div>

          <div className="case-block-models">
            <h2>10. Testimonial</h2>
            <div className="testimonial-card">
              <p className="testimonial-text">
                “The client expressed appreciation for the design quality and
                attention to detail and offered to provide a reference.”
              </p>

              <p className="testimonial-author">— Client, via email</p>
            </div>
          </div>

          <div className="case-block-conf">
            <h2>Why it’s confidential (and how I handle it)</h2>
            <ul className="bullets">
              <li>Pre-launch; under NDA at client request</li>
              <li>
                Public visuals are recreated/anonymised; no proprietary assets
                shown
              </li>
              <li>
                Additional context available 1:1 (subject to NDA and client
                permission)
              </li>
            </ul>
          </div>

          <div
            className="conf-cta"
            role="region"
            aria-label="Request private walkthrough"
          >
            <div>
              <strong>Confidential FashionTech Platform (NDA)</strong>
              <p className="conf-cta__text">
                Public visuals are recreated/anonymised. A brief high-level
                walkthrough can be provided on request.
              </p>
            </div>
            <a
              className="conf-cta__btn"
              href={`mailto:jeannieuxdesign@gmail.com?subject=Private%20walkthrough%20request%20(Confidential%20FashionTech)&body=Hi%20Jeannie%2C%0A%0AI%27d%20love%20a%20short%20walkthrough%20of%20your%20FashionTech%20project.%0A%0AThanks!`}
            >
              Request access
            </a>
          </div>
        </div>
      </div>
      <ProjectNav />
    </section>
  );
}
