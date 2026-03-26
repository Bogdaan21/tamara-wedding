import { Link } from 'react-router-dom';
import abimg from '../../images/about.jpg'

const AboutPreview = () => {
  return (
    <section className="about-preview-section">
      <div className="about-preview-bg"></div>

      <div className="container">
        <div className="about-preview-wrapper">
          <div className="about-preview-top-image">
            <img src={abimg} alt="Bride reflection" />
          </div>

          <div className="about-preview-card">
            <div className="about-preview-header">
              <h2>
                Intentional Design Is
                <br />
                at the Heart of
                <br />
                Everything We Do
              </h2>

              <div className="about-preview-divider">
                <span></span>
                <i className="fi flaticon-heart"></i>
              </div>
            </div>

            <div className="about-preview-content">
              <div className="about-preview-bottom-image">
                <img src={abimg} alt="Planner portrait" />
              </div>

              <div className="about-preview-text">
                <p>
                  Meet Brittnie, the NY based wedding planner behind Metheny
                  &amp; Company. My passion has always been in creating
                  beautiful things. I’m a natural storyteller, and I believe
                  weddings are some of the greatest stories we tell.
                </p>

                <p>
                  It’s an honor to celebrate your love story through impeccably
                  curated details and thoughtful designs that speak to your
                  personality and this new chapter in your life.
                </p>

                <Link to="/about" className="about-preview-btn">
                  Meet Brittnie
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;