import React from "react";

const About = (props) => {
  return (
    <section className={`wpo-about-section pt-20 ${props.pt}`}>
      <div className="container">
        <div className="wpo-about-section-wrapper">
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12 col-12 text-center">
              <div className="wpo-about-content">
                <div className="about-title">
                  <h2>Your Successful Wedding is Our Job.</h2>
                </div>
                <div className="wpo-about-content-inner">
                  <span>THE FOUNDATION | DUBAI & WORLD-CLASS STANDARDS</span>
                  <p>
                    My journey into the world of luxury events began in 2017 in Dubai, where I honed my skills in one of
                    the world’s most demanding hospitality sectors. Managing high-profile events at iconic landmarks
                    like the Burj Al Arab taught me the importance of precision, world-class standards, and the art of
                    creating an unforgettable atmosphere.
                  </p>
                </div>

                <div className="wpo-about-content-inner">
                  <span>THE CONNECTION | MONTENEGRO & ICONIC LANDMARKS</span>
                  <p>
                    Upon returning to Montenegro, I had the privilege of coordinating significant projects, including
                    the grand reopening of Hotel Maestral and exclusive events at Miločer and Aman Sveti Stefan. These
                    experiences deepened my connection to the Mediterranean landscape and its unique potential for
                    extraordinary celebrations.
                  </p>
                </div>

                <div className="wpo-about-content-inner">
                  <span>THE VISION | WHAT A WEDDING</span>
                  <p>
                    In 2022, I founded What a Wedding, channeling my expertise into the world of destination weddings.
                    For me, this is more than a profession, it is a calling. I find immense joy in the creative process,
                    but the most rewarding part of my work is the lasting friendships I build with my couples, ensuring
                    every story is told with elegance, authenticity, and a seamless touch.
                  </p>
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
