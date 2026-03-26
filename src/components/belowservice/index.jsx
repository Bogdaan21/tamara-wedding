import mainImg from "../../images/about.jpg";
import smallImg from "../../images/about.jpg";
import shapeImg from "../../images/about.jpg";

const BelowService = ({ pt = "" }) => {
  return (
    <section className={`below-service-section ${pt}`}>
      <div className="container">
        <div className="below-service-wrap">
          <div className="below-service-left">
            <div className="below-service-shape">
              <img src={shapeImg} alt="Background decor" />
            </div>

            <div className="below-service-main-img">
              <img src={mainImg} alt="Wedding couple" />
            </div>

            <div className="below-service-small-img">
              <img src={smallImg} alt="Wedding cake" />
            </div>
          </div>

          <div className="below-service-right">
            <h2>
              WEDDING
              <br />
              PLANNING
              <br />
              AND DESIGN
            </h2>

            <span className="below-service-location">
              NEW JERSEY, NEW YORK, PENNSYLVANIA,
              <br />
              CONNECTICUT, AND BEYOND
            </span>

            <div className="below-service-line"></div>

            <p>
              We design and plan upscale
              <br />
              events with genuine heart
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BelowService;