import React from "react";
import "./FamilyNutrients.css";
import ProjectNav from "../ProjectNav";

export default function FamilyNutrients() {
  return (
    <section className="case-study-section-family">
      <div className="case-study-container">
        <h1 className="case-study-title-family">
          Healthy Family Nutrients — Recipe Sharing Platform
        </h1>

        <div className="case-block-family">
          <h2>1. Project Overview</h2>
          <p>
            <strong>Role:</strong> UX/UI Designer (solo design)
          </p>
          <p>
            <strong>Time:</strong> 4 weeks · <strong>Team:</strong> 1 developer
            collaborator
          </p>
          <p>
            <strong>Challenge:</strong> Most recipe apps bury essentials behind
            blog intros and endless scrolls. In real “dinner o’clock” moments,
            families need ingredients and steps <em>immediately</em>.
          </p>
          <p>
            <strong>Outcome:</strong> A mobile-first recipe platform where a
            single tap opens
            <em>ingredients and instructions at the top</em>—optimized for all
            ages in a household.
          </p>
        </div>

        <div className="case-block-family">
          <h2>2. Goals & Constraints</h2>
          <ul>
            <li>
              <strong>Speed to action:</strong> ingredients visible in &lt;3s;
              start cooking in &lt;30s
            </li>
            <li>
              <strong>Mobile-first ergonomics:</strong> one-hand use, 44px+
              targets
            </li>
            <li>
              <strong>All-ages accessibility:</strong> clear type, high
              contrast, consistent patterns
            </li>
            <li>
              <strong>Fast discovery:</strong> category chips + ingredient
              search
            </li>
            <li>
              <strong>Simple contribution:</strong> add/edit/delete with
              forgiving error states
            </li>
            <li>
              <strong>Handoff-ready:</strong> tokens + reusable components
            </li>
          </ul>
        </div>

        <div className="case-block-family">
          <h2>3. Problem Statement</h2>
          <p>
            Families using mainstream recipe apps struggle to turn what’s
            on-screen into action during busy moments. Essential info
            (ingredients & steps) is buried behind long scrolls, blog intros,
            and clutter—slowing everyone down.
          </p>
          <ul className="problem-bullets">
            <li>
              Ingredients and instructions are hidden at the end of long pages.
            </li>
            <li>
              Inconsistent formats (intros, ads, pop-ups) increase cognitive
              load.
            </li>
            <li>
              Small tap targets and dense text hinder older/younger family
              members.
            </li>
            <li>Sharing/saving recipes across family members is fragmented.</li>
          </ul>
        </div>

        <div className="case-block-family">
          <h2>4. Research & Brand Direction</h2>
          <ul>
            <li>
              Competitive scan focused on accessibility, scannability, and
              contribution flows
            </li>
            <li>
              Lightweight interviews (ages 15–65): “Show me ingredients first.
              Don’t make me scroll.”
            </li>
            <li>
              Warm, nature-inspired visual language to feel familiar and
              welcoming
            </li>
          </ul>
          <p className="hmw">
            <strong>How might we</strong> surface the essentials in a single
            tap—no endless scrolling— with a consistent, shareable format that
            works for all ages?
          </p>
        </div>

        <div className="case-block-family">
          <h2>5. Solution Overview</h2>
          <ul>
            <li>
              <strong>One-tap detail:</strong> open → ingredients & instructions
              immediately visible.
            </li>
            <li>
              <strong>Fast discovery:</strong> category chips
              (breakfast/lunch/dinner/desserts) + ingredient search
            </li>
            <li>
              <strong>Recipe cards:</strong> prep time, servings,
              difficulty—decide from the list
            </li>
            <li>
              <strong>Share & Save:</strong> simple, consistent affordances for
              family circulation
            </li>
          </ul>
        </div>

        <div className="case-block-family">
          <h2>6. Wireframes</h2>
          <p>
            Created low to high-fidelity wireframes for mobile view. Mapped out
            user flows for recipe discovery, filtering, viewing, and
            contribution.
          </p>
          <div className="wireframes-section">
            <div className="section-label">Low-Fi</div>
            <div className="wireframes-grid">
              <img
                src="https://res.cloudinary.com/dmvngssd0/image/upload/v1751589823/20250701_001301_hclqyx.png"
                alt="Low Fidelity Wireframe 1"
              />
            </div>
            <hr className="section-divider" />
            <div className="section-label">Hi-Fi</div>
            <div className="wireframes-grid">
              <img
                src="https://res.cloudinary.com/dmvngssd0/image/upload/v1758678803/Landing_Page_eeszpf.png"
                alt="Hi Fidelity Wireframe 1"
              />
              <img
                src="https://res.cloudinary.com/dmvngssd0/image/upload/v1758685337/Recipe_List_Page_1_qdcziz.png"
                alt="Hi Fidelity Wireframe 2"
              />

              <img
                src="https://res.cloudinary.com/dmvngssd0/image/upload/v1758685338/Detail_Recipe_Page_-_Ingredients_-1_e1r7ny.png"
                alt="Hi Fidelity Wireframe 3"
              />
              <img
                src="https://res.cloudinary.com/dmvngssd0/image/upload/v1758685338/Delete_recipe_gysgwx.png"
                alt="Hi Fidelity Wireframe 4"
              />
            </div>
          </div>
          <div className="case-block-family">
            <h2>7. Design Decisions & Trade-offs</h2>
            <ul>
              <li>
                <strong>Task over article:</strong> detail screen is
                purpose-built for cooking—no long-form story.
              </li>
              <li>
                <strong>Sticky essentials:</strong> ingredients/instructions
                headers remain in view to reduce context loss.
              </li>
              <li>
                <strong>Tap targets ≥ 44px:</strong> Comfortable for kids and
                grandparents; paired with high contrast and generous
                line-height.
              </li>
              <li>
                <strong>Consistent UI patterns</strong> Cards, chips, lists, and
                step blocks built as tokens → faster developer handoff.
              </li>
            </ul>
          </div>

          <div className="case-block-family">
            <h2>8. Accessibility & Design System</h2>
            <ul>
              <li>
                WCAG-minded color palette (AA contrast), scalable type, and
                tabular numerals for stable measurements.
              </li>
              <li>
                Tokens for color, spacing, radius, and elevation; reusable
                components (Card, Chip, Step, Input).
              </li>
              <li>
                Keyboard focus states and large tap targets for
                multi-generational use.
              </li>
            </ul>
          </div>
          <div className="process-step">
            <h3>9. Prototype & Handoff</h3>
            <p>
              Created clickable prototypes in Figma. Delivered structured
              handoff included component specs, redlines, tokens, and usage
              notes.
            </p>
            {/* <p className="section-label">User Flow Overview</p>
            <div className="iframe-container">
              <iframe
                style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                width="800"
                height="450"
                src="https://embed.figma.com/design/bliM6ebweIBktbQA6FDPDK/Doig-s-recipe?node-id=0-1&embed-host=share"
                allowFullScreen
                title="user-flow"
              ></iframe>
            </div> */}
            <div className="section-label">Prototype</div>
            <div className="iframe-container">
              <iframe
                style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                width="800"
                height="450"
                src="https://embed.figma.com/proto/bliM6ebweIBktbQA6FDPDK/Doig-s-recipe?page-id=0%3A1&node-id=2-47&viewport=1029%2C155%2C0.65&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A47&embed-host=share"
                allowFullScreen
                title="prototyping"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="case-block-family">
          <h2>10. Validation & Outcomes</h2>
          <ul className="success-criteria">
            <li>
              <strong>Targets:</strong> ingredients visible in &lt;3s after tap;
              start cooking in &lt;30s from list
            </li>
            <li>
              <strong>Smoke tests (n=5):</strong> all located the Ingredients
              tab instantly; chips understood without guidance
            </li>
          </ul>
          <ul>
            <li>Mobile-first UI delivered with a reusable component library</li>
            <li>
              “Essentials-first” detail view reduces reading burden across ages
            </li>
            <li>
              Build in progress with developer collaborator; <em>Next:</em>{" "}
              instrument time-to-ingredients in production
            </li>
          </ul>
        </div>

        <div className="case-block-family">
          <h2>7. Reflections</h2>
          <p>
            This project reinforced the importance of designing for
            accessibility across diverse users. By blending usability testing
            insights with thoughtful visual design, I created a platform that
            feels welcoming, clear, and easy to use. Collaborating closely with
            a developer also sharpened my communication skills and helped me
            ensure a smooth transition from design to code.
          </p>
        </div>

        <div className="case-block-family">
          <h2>8. Figma & Resources</h2>
          <ul>
            <li>
              <strong>Figma File:</strong> Available upon request
            </li>
            <li>
              <strong>Status:</strong> In development
            </li>
          </ul>
        </div>
        <ProjectNav />
      </div>
    </section>
  );
}
