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
                    A Refined <br />
                    and Inviting
                  </h2>
                  <span>planning experience</span>
                </div>

                <div className="about-divider"></div>

                <div className="wpo-about-content-inner">
                  <p>
                    At What a Wedding, we believe that true elegance is found in refined simplicity. Our approach is
                    about creating a visual and emotional harmony that feels effortless, yet is planned to the smallest
                    detail. We don’t just coordinate logistics; we design celebrations that honor the natural character
                    of Montenegro and the unique story of every couple we work with.
                  </p>

                  <p>All the while, we’ll be here to guide you through our proven process with ease.</p>

                  <a href="/services" className="theme-btn-modern">
                    Our Offerings
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
