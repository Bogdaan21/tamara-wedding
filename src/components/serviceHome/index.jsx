import React from 'react';
import abimg from '../../images/about.jpg';

const About = (props) => {
  return (
    <section className={`wpo-about-section style-modern ${props.pt || ''}`}>
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
                    At Metheny &amp; Company, as your bespoke NY wedding planner,
                    you can expect a hands-on, personalized approach from day
                    one. We strive to seamlessly blend the latest trends,
                    timeless details, and bespoke personal touches to bring your
                    event to life.
                  </p>

                  <p>
                    All the while, we’ll be here to guide you through our proven
                    process with ease.
                  </p>

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