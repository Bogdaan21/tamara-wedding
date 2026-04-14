import React from "react";
import abimg from "../../images/home/about.png";

const About = (props) => {
  return (
    <section className={`wpo-about-section style-modern ${props.pt || ""}`}>
      <div className="container">
        <div className="wpo-about-section-wrapper">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12">
              <div className="wpo-about-content modern-content">
                <div className="about-title">
                  <h2>
                    Full Wedding Planning, <br />
                    Design & Beyond
                  </h2>
                  <span> The complete, stress-free experience from concept to celebration.</span>
                </div>

                <div className="about-divider"></div>

                <div className="wpo-about-content-inner">
                  <p>
                    We manage the complex logistics and creative direction, ensuring a cohesive vision and a flawless
                    execution for your entire wedding weekend. This is our most comprehensive service, designed for
                    couples who want a professional to lead every step of the way.
                  </p>

                  <ul className="service-list">
                    <li>Venue Scouting & Selection: Finding the perfect backdrop in Montenegro.</li>
                    <li>Bespoke Aesthetic Design: Mood boards, floral concepts, and styling.</li>
                    <li>Pre-Wedding & Post-Wedding Events: Welcome dinner, rehearsal, or farewell brunch.</li>
                    <li>Vendor Curation: Access to our trusted network of elite professionals.</li>
                    <li>Budget Management: Strategic allocation and contract oversight.</li>
                    <li>On-Site Production: Full management of all events from start to finish.</li>
                  </ul>
                </div>
              </div>
            </div>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
