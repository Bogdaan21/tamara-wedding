import React from "react";
import { Link } from "react-router-dom";
import sideImg from "../../images/service/Service.jpg";

const VideoSection = () => {
  return (
    <section className="wpo-video-section">
      <div className="video-top-image">
      </div>

      <div className="container">
        <div className="video-overlap-wrap">
          <div className="video-text-card">
            <span className="video-subtitle">Your wedding deserves</span>

            <h2>
              FULL WEDDING
              <br />
              PLANNING
              
            </h2>

            <p>
              On average, it takes 300-400 hours to plan a wedding. At Metheny &
              Company, we have perfected that process. Our mission is to expertly
              manage every detail—from coordinating vendors and timelines to
              ensuring a seamless flow on your wedding day—so you can fully
              embrace the joy of this special time.
            </p>

            <Link to="/portfolio" className="video-portfolio-btn">
              VIEW OUR PORTFOLIO
            </Link>
          </div>

          <div className="video-side-image">
            <img src={sideImg} alt="Bride on staircase" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;