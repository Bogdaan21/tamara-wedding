import React from "react";
import abimg from "../../images/about.jpg";

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
                    The Allure of <br />
                    the Adriatic
                  </h2>
                  <span>planning experience</span>
                </div>

                <div className="about-divider"></div>

                <div className="wpo-about-content-inner">
                  <p>
                    Escape to a destination that offers the perfect harmony of Adriatic coastline and dramatic mountain
                    peaks. Montenegro is a sanctuary for those who value intimacy and timeless elegance, a place where
                    every historic stone and sunset glow tells a story of authenticity.
                  </p>

                  <p>
                    We specialize in designing bespoke weddings that seamlessly integrate with this unique landscape,
                    managing every detail from venue selection to on-site coordination to ensure a flawless experience
                    for you and your guests.
                  </p>

                  <a href="/services" className="theme-btn-modern">
                    BEGIN YOUR JOURNEY
                  </a>
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
