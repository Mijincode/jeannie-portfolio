import React from "react";
import "./HappyToo.css";

export default function HappyToo() {
  return (
    <section className="case-study-section">
      <div className="case-study-container">
        <h1 className="case-study-title">
          HappyToo — Business Consulting Website
        </h1>

        <div className="case-block">
          <h2>1. Project Overview</h2>
          <p>
            <strong>Client:</strong> HappyToo - B2B consulting firm for SMBs
          </p>
          <p>
            <strong>Role:</strong> UX/UI Designer & Front-End Developer
          </p>
          <p>
            <strong>Tools:</strong> Figma, React, HTML, CSS
          </p>
          <p>
            <strong>Duration:</strong> 3 weeks
          </p>
          <p>
            <strong>Purpose:</strong> To design and build a responsive,
            professional website communicating data-driven consulting and
            eCommerce offerings to small business owners.
          </p>
        </div>

        <div className="case-block">
          <h2>2. Client Needs</h2>
          <ul>
            <li>
              Clearly communicate scientific consulting services for business
              success
            </li>
            <li>
              Highlight business strategies: core values, differentiators,
              customer analysis
            </li>
            <li>
              Promotional support focused on increasing revenue (e.g. targeted
              online marketing)
            </li>
            <li>
              Utilize and promote their in-house eCommerce platform for
              product/service distribution
            </li>
            <li>
              Use the name "HappyToo" and incorporate yellow as a primary brand
              color
            </li>
          </ul>
        </div>
        <div className="case-block">
          <h2>3. Design References</h2>
          <p>
            Client provided image samples to guide visual direction and tone.
          </p>
          <div className="reference-images">
            <img
              src="https://res.cloudinary.com/dmvngssd0/image/upload/v1748740090/reference_hntypk.webp"
              alt="Design Reference"
              className="reference-img"
            />
          </div>
        </div>

        <div className="case-block">
          <h2>3. Background & Challenge</h2>

          <p>
            One of the biggest challenges in this project was understanding the
            unique nature of B2B business consulting. Since the concept was
            relatively new to me, I needed to invest significant time
            researching the client's business structure and target audience.
            Through this deep discovery process, I was able to analyze similar
            industry websites, which helped inform the content structure and
            direction for the site.
          </p>
          <p>
            Another challenge was defining the visual direction and brand color
            scheme. While the client provided a draft logo and some reference
            images, creating a UI that felt trustworthy and aligned well with
            the brand wasn’t easy. I went through several iterations balancing
            background colors, buttons, and text styles—testing different
            combinations until the overall tone felt cohesive and professional.
          </p>

          <p>
            HappyToo helps businesses grow by identifying key differentiators,
            analyzing customer data, and providing promotional strategies using
            their own eCommerce platform. The challenge was to deliver a website
            that clearly communicates this value to time-poor SMB owners.
          </p>
        </div>

        <div className="case-block">
          <h2>4. Objectives</h2>
          <ul>
            <li>Build a strong brand identity</li>
            <li>Design a responsive, intuitive interface</li>
            <li>Clarify service offerings with concise language</li>
            <li>Use yellow as a primary brand color with a balanced palette</li>
            <li>Enable lead generation through clear CTAs and Kakao chat</li>
          </ul>
        </div>

        <div className="case-block">
          <h2>5. Research & Discovery</h2>
          <ul>
            <li>Competitive analysis of top consulting websites</li>
            <li>Content hierarchy focusing on simplicity and clarity</li>
            <li>Moodboards combining trust, energy, and professionalism</li>
            <li>User journey maps for SMB decision-makers</li>
          </ul>
        </div>

        <div className="case-block">
          <h2>6. User Flow</h2>
          <p>
            Based on user needs and goals, I designed a streamlined user journey
            for SMB owners visiting the site. The flow emphasizes discovery of
            consulting services, building trust, and encouraging contact via
            clear CTAs.
          </p>
          <img
            src="https://res.cloudinary.com/dmvngssd0/image/upload/v1748740087/UserFlow_ntzmfg.png"
            alt="User Flow Diagram"
            className="user-flow-img"
          />
        </div>
        <div className="case-block">
          <h2>7. Design Process</h2>

          <div className="process-step">
            <h3>Wireframing</h3>
            <p>
              Developed wireframes to establish content structure and layout.
            </p>
            <div className="wireframes-section">
              <p className="section-label">Low-Fi</p>
              <div className="wireframes-grid">
                <img
                  src="https://res.cloudinary.com/dmvngssd0/image/upload/v1748740087/Low-fi1_vn0yse.png"
                  alt="Low Fidelity Wireframe 1"
                />
                <img
                  src="https://res.cloudinary.com/dmvngssd0/image/upload/v1748740087/Low-fi2_a6s4jy.png"
                  alt="Low Fidelity Wireframe 2"
                />
              </div>

              <p className="section-label">Mid-Fi</p>
              <div className="wireframes-grid">
                <img
                  src="https://res.cloudinary.com/dmvngssd0/image/upload/v1748740089/Mid-fidelity_bbxarr.png"
                  alt="Mid Fidelity Wireframe 1"
                />
                <img
                  src="https://res.cloudinary.com/dmvngssd0/image/upload/v1748740088/Mid-fidelity_-_Contact_qixvy2.png"
                  alt="Mid Fidelity Wireframe 2"
                />
              </div>

              <p className="section-label">Hi-Fi</p>
              <div className="wireframes-grid">
                <img
                  src="https://res.cloudinary.com/dmvngssd0/image/upload/v1748740095/Hi-Fi_eezgyu.png"
                  alt="Hi Fidelity Wireframe 1"
                />
                <img
                  src="https://res.cloudinary.com/dmvngssd0/image/upload/v1748740088/Hi-Fi2_yngibj.png"
                  alt="Hi Fidelity Wireframe 2"
                />
              </div>
            </div>
          </div>

          <div className="process-step">
            <h3>Visual Design</h3>
            <p>
              Defined a dark-themed layout accented with a yellow-centered
              palette and clean sans-serif typography to create a confident,
              trustworthy, and professional aesthetic.
            </p>
          </div>

          <div className="process-step">
            <h3>Prototyping</h3>
            <p>
              Created high-fidelity mockups and interactive prototypes in Figma,
              iterating based on client feedback.
            </p>
            <iframe
              style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
              width="800"
              height="450"
              src="https://embed.figma.com/proto/L9vPludzgsSKq5kI5509Oj/Happy-Too?page-id=1%3A114&node-id=79-65&p=f&viewport=106%2C156%2C0.06&scaling=scale-down&content-scaling=fixed&starting-point-node-id=79%3A65&embed-host=share"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="case-block">
          <h2>8. Development</h2>
          <ul>
            <li>Built with React for component-based scalability</li>
            <li>Responsive design across devices</li>
            <li>Integrated contact forms and Kakao chat</li>
            <li>Deployed using Netlify</li>
          </ul>
          <img
            src="https://res.cloudinary.com/dmvngssd0/video/upload/v1749006655/iphone-zoom-out_qesvyk.mp4"
            alt="Hi Fidelity Wireframe 1"
          />
        </div>

        <div className="case-block">
          <h2>9. Outcome & Reflections</h2>
          <ul>
            <li>Delivered a polished website tailored for SMBs</li>
            <li>Improved project management and design communication skills</li>
            <li>Learned the importance of visual clarity and CTA placement</li>
          </ul>

          <div className="relection-box">
            <h3>Key Takeaways</h3>
            <p>
              This project taught me that design isn’t just about creating
              something visually pleasing—it’s about aligning the user
              experience with business goals and ensuring brand consistency.
            </p>
            <p>
              As a designer, I strengthened my ability to interpret client needs
              and translate them into visual solutions that communicate brand
              identity effectively.
            </p>
            <p>
              Another key insight was recognizing how critical strategic CTA
              (Call-To-Action) design is in driving user behavior. A client
              discussion on button interaction logic prompted a deeper
              exploration into how CTAs support the broader user journey.
            </p>
            <p>
              Rather than treating buttons as simple interface elements, I
              approached them as intentional touchpoints—evaluating their
              hierarchy, copy, placement, and animations to create seamless,
              persuasive user flows. This ensured each interaction had a
              purpose, whether guiding users to initiate a Kakao chat or
              converting interest into action.
            </p>

            <p>
              Through this process, I developed a deeper appreciation for the
              psychology behind interaction design, and the power of thoughtful
              visual persuasion.
            </p>
            <p>
              Overall, this experience helped me understand how to balance UI
              and UX effectively while connecting design decisions to business
              strategy.
            </p>
          </div>
        </div>
        <div className="case-block">
          <h2>8. Links & Resources</h2>
          <ul>
            <li>
              <strong>Live Site:</strong>{" "}
              <a
                href="https://happytoo.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                happytoo.netlify.app
              </a>
            </li>
            <li>
              <strong>GitHub Repo:</strong>{" "}
              <a
                href="https://github.com/Mijincode/happytoo"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/Mijincode/happytoo
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
