import React from "react";
import "./ConfidentialFashionTech.css";
import ProjectNav from "../ProjectNav";

// function AnonymisedFrame({ label = "Anonymised wireframe" }) {
//   return (
//     <figure className="anon-frame" aria-label={label}>
//       <div className="anon-skeleton" />
//       <figcaption className="anon-caption">{label}</figcaption>
//     </figure>
//   );
// }

export default function ConfidentialFashionTech() {
  return (
    <section className="case-study-section-conf">
      <div className="case-study-container">
        <h1 className="case-study-title-conf">
          Confidential FashionTech Platform — UX/UI Lead (NDA)
        </h1>

        {/* <p className="disclaimer">
          All visuals are recreated/anonymised to protect client
          confidentiality. No proprietary assets, data, or branding are shown.
        </p> */}

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
            Users faced overwhelming content and cluttered filters without clear
            guidance, leading to frustration and drop-off. At the same time, the
            client wanted a high-end look that could build trust and position
            the brand for growth in the modeling industry.
          </p>
          <p>
            The challenge was to bridge the gap between the client’s vision of a
            minimal website and the users’ need for a robust, trustworthy
            platform — designing a scalable system that balanced business
            objectives with real-world usability.
          </p>
        </div>

        <div className="case-block-models">
          <h2>3. Business Goals</h2>
          <div className="insights-summary">
            <div className="insight-card">
              <h3> - Modernize the Brand:</h3>
              <p>
                Transform an outdated, low-traffic site into a premium, high-end
                digital platform that builds credibility with clients and users.
              </p>
            </div>
            <div className="insight-card">
              <h3> - Enable Growth:</h3>
              <p>
                Add essential features such as competition entry, portfolio
                uploads, and structured parental consent for under-18 applicants
                — creating revenue and engagement opportunities.
              </p>
            </div>

            <div className="insight-card">
              <h3> - Guide Aspiring Models</h3>
              <p>
                Launch the new Start Modelling page to provide step-by-step
                training, industry knowledge, and career pathways — addressing a
                major gap in the old site where no beginner guidance existed.
              </p>
            </div>

            <div className="insight-card">
              <h3> - Support Industry Professionals</h3>
              <p>
                Build advanced search and filtering tools so casting directors
                and agencies can quickly discover relevant talent.
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

        {/* <div className="case-block-conf">
          <h2>Process Snapshot</h2>
          <div className="anon-grid">
            <AnonymisedFrame label="Entry flow (5 steps, consent built-in)" />
            <AnonymisedFrame label="Responsive nav & IA" />
            <AnonymisedFrame label="Portfolio upload & validation" />
            <AnonymisedFrame label="Discovery filters & shortlist" />
            <AnonymisedFrame label="Component tokens & patterns" />
          </div>
        </div>

        <div className="case-block-conf">
          <h2>Outcomes (public-safe)</h2>
          <ul className="bullets">
            <li>Reduced steps to first meaningful action by ~30–40%</li>
            <li>
              Defined scalable component set (inputs, filters, cards, modals)
            </li>
            <li>Usability feedback (target users): improved clarity & trust</li>
          </ul>
          <p className="caption">
            Exact metrics and branded screens available in a private
            walkthrough.
          </p>
        </div> */}
        <div className="case-block-models">
          <h2>4. Existing Site Analysis </h2>
          <p>
            I audited the client’s existing site to understand why users were
            struggling. The evaluation revealed structural and visual issues
            that reduced trust and discoverability.
          </p>

          <ol className="analysis-points">
            <li>
              <strong>Poor Navigation</strong>
              <ul>
                <li>Cluttered menus created confusion</li>
              </ul>
            </li>

            <li>
              <strong>Outdated Visuals</strong>
              <ul>
                <li>Dated typography, weak spacing, poor hierarchy</li>
                <li>Undermined credibility for a premium agency</li>
              </ul>
            </li>

            <li>
              <strong>Low Engagement</strong>
              <ul>
                <li>Long text blocks caused scanning fatigue</li>
                <li>Minimal interactivity led to user drop-off</li>
              </ul>
            </li>

            <li>
              <strong>Ineffective Search</strong>
              <ul>
                <li>Overloaded with dropdowns and checkboxes</li>
                <li>Lacked hierarchy or progressive filtering</li>
                <li>
                  Failed to visually showcase talent (felt like database
                  entries)
                </li>
                <li>=inconsistent control styling that reduced trust</li>
              </ul>
            </li>
          </ol>
        </div>

        <div className="case-block-models">
          <h2>5. User Research Findings</h2>
          <p>
            After auditing the old site, I validated assumptions through
            lightweight interviews and prototype feedback with aspiring models,
            parents, and clients. These findings revealed where the legacy
            design failed real users:
          </p>
          <ol>
            <li>Navigation confused most participants.</li>

            <li>Clients found the dropdown-heavy search overwhelming.</li>
            <li>Users skimmed long text blocks and dropped off quickly,</li>
          </ol>
          <p>
            These insights aligned with the website audit but provided
            user-backed evidence to prioritize solutions: clearer navigation,
            trust-building visuals, structured flows, and modern discovery
            tools.
          </p>
        </div>

        <div className="case-block-models">
          <h2>6. Ideation</h2>
          <p>
            Based on the research findings, I brainstormed ways to transform the
            original 5-page concept (received from my client) into a scalable
            platform. I expanded the sitemap into detailed flows for
            competitions, portfolio uploads, and model/creative services.
          </p>

          <p>
            Key ideas included breaking dense content into multi-step journeys
            (e.g., competition entry forms), introducing hover/tap states to
            make browsing talent more interactive, and creating tailored account
            flows for both models and creatives.
          </p>
          <p>
            I also explored how to balance high-end aesthetics with usability:
            clear typography, visual hierarchy, and grid-based layouts to
            support large amounts of information while maintaining a premium
            feel.
          </p>
          <p>
            Early sketches and low-fidelity wireframes tested different layouts
            for grids, filters, and forms. These explorations helped validate
            the information architecture before moving into high-fidelity
            prototypes.
          </p>
        </div>

        <div className="case-block-models">
          <h2>7. Solution</h2>
          <p>
            The old site was outdated, lacked essential functionality, and did
            not meet the needs of users. For the redesign, the client requested
            new features such as competitions, portfolio uploads, and tailored
            services for both models and creatives. To solve these, I designed
            scalable user journeys and interactive prototypes that expanded far
            beyond the original 5-page concept.
          </p>
          <ul className="solution-list">
            <li>
              <strong>Competition Flow:</strong> Old site had no competition
              entry. I built a clear 5-step process a multi-step entry process
              with age-appropriate consent and legal confirmation. to reduce
              confusion and ensure trust for both aspiring models and parents.
            </li>
            <li>
              <strong>Portfolio Uploads:</strong> With no upload feature
              previously, I designed structured journeys for both models and
              creatives — including account creation, body measurements,
              specialties, certifications, and payment.
            </li>
            <li>
              <strong>Advanced Discovery:</strong> Added filtering and grid
              systems so clients could easily search models/creatives by
              specialties, certifications, and measurements — functionality
              missing in the old site.
            </li>
            <li>
              <strong>Scalable Design System:</strong> Created responsive
              layouts across desktop and mobile, supported by grids, clear
              hierarchy, and consistent UI patterns.
            </li>
            <li>
              <strong>High-End Visual Style:</strong> Delivered a modern,
              premium aesthetic aligned with the client’s vision, while ensuring
              usability and inclusivity for all audiences.
            </li>
          </ul>
        </div>

        <div className="case-block-models">
          <h2>8. User Flow</h2>
          <p>
            The user flow was designed around three personas —{" "}
            <strong>Models</strong>, <strong>Creatives</strong>, and{" "}
            <strong>Branding / Agencies</strong>. Each follows a clear path from
            the <strong>Landing page</strong> to achieve their goals: models
            build portfolios, find creatives, or join competitions; creatives
            showcase work or collaborate; and branding users search and connect
            with talent.
          </p>

          <p>
            For models and creatives, portfolio creation includes form
            completion, uploads, and payment before publishing in the directory.
            The competition journey was designed as a clear, multi-step process
            with age-appropriate consent and legal confirmation, improving
            clarity for younger users and parents.
          </p>

          <p>
            This streamlined design keeps navigation consistent across all
            users, supports monetization from the start, and allows for easy
            scaling as more features are added.
          </p>

          <h3 className="Userflow-Competition">User Flow</h3>
          <div className="user-flow-diagram">
            <img
              src="https://res.cloudinary.com/dmvngssd0/image/upload/v1760252526/userFlow_yb5u7t.png"
              alt="User Flow"
              className="user-flow"
              loading="lazy"
              decoding="async"
            />
            <figcaption className="caption">
              *An anonymized user flow diagram illustrating generalized user
              journeys for different personas. This visual is recreated for
              portfolio purposes and does not contain client assets or
              proprietary details.*
            </figcaption>
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
                “Jeannie, firstly I want to offer you my congratulations and the
                thanks. This site is looking exceptionally good and I appreciate
                the diligence and care you are taking. I will be happy to supply
                a reference for you should you ever need one.”
              </p>

              <p className="testimonial-author">— Client, via email</p>
            </div>
          </div>

          <div className="case-block-conf">
            <h2>Why it’s confidential (and how I handle it)</h2>
            <ul className="bullets">
              <li>Pre-launch; under NDA at client request</li>
              <li>Recreated, brand-neutral artefacts shown publicly</li>
              <li>Full details shared privately on request</li>
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
                Public visuals are recreated/anonymised. I can provide a brief
                private walkthrough on request.
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
