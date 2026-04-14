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
                  <h2>On-Day Coordination</h2>
                  <span>Your only job is to be fully present in the moment.</span>
                </div>

                <div className="about-divider"></div>

                <div className="wpo-about-content-inner">
                  <p>
                    This service is for the couple who have planned their wedding but want a professional to ensure
                    everything runs smoothly. We step in to handle the logistics so you can enjoy your day as a guest.
                  </p>

                  <ul className="service-list">
                    <li>Handover Meeting: Deep dive into your plans 4 weeks prior.</li>
                    <li>Vendor Liaison: We become the main point of contact for all partners.</li>
                    <li>Logistics & Flow: Managing the ceremony and reception timeline.</li>
                    <li>On-Site Coordination: Discreetly solving any issues behind the scenes.</li>
                    <li>Peace of Mind: Ensuring every detail is exactly where it should be.</li>
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
