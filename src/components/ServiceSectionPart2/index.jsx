import React from "react";
import abimg from "../../images/home/about.png";

const About = (props) => {
  return (
    <section className={`wpo-about-section style-modern ${props.pt || ""}`}>
      <div className="container">
        <div className="wpo-about-section-wrapper">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12">
              <div className="wpo-about-images">
                <div className="wpo-about-img-shape">
                  <img src={abimg} alt="Wedding background" />
                </div>

                <div className="wpo-about-img-main">
                  <img src={abimg} alt="Wedding couple" />
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-12">
              <div className="wpo-about-content modern-content">
                <div className="about-title">
                  <h2>
                    Partial Wedding <br />
                    Planning
                  </h2>
                  <span>Collaborative guidance for your unique vision.</span>
                </div>

                <div className="about-divider"></div>

                <div className="wpo-about-content-inner">
                  <p>
                    Ideal for couples who have already started their planning or secured a venue but need expert support
                    to bring all the pieces together. We bridge the gaps, refine your design, and manage the remaining
                    logistics to keep your planning on track.
                  </p>

                  <ul className="service-list">
                    <li>Planning Audit: Reviewing your progress and identifying what's missing.</li>
                    <li>Vendor Recommendations: Sourcing the remaining key partners.</li>
                    <li>Design Refinement: Harmonizing your ideas into a polished concept.</li>
                    <li>Timeline Development: Creating a detailed master schedule.</li>
                    <li>Final Month Management: Taking over communications 6–8 weeks before the day.</li>
                  </ul>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
