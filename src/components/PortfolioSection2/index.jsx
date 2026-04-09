import SectionTitle from "../SectionTitle";
import portfolios from "../../data/portfolio.json";
import { Link } from "react-router-dom";

const PortfolioSection2 = (props) => {
  const Portfolios = portfolios;

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className={`portfolio-modern-section section-padding ${props.pClass || ""}`} id="gallery">
      <div className="container">
        <SectionTitle MainTitle={"Captured Moments"} />

        <div className="portfolio-modern-grid">
          {Portfolios.map((portfolio, pitem) => (
            <div className="portfolio-modern-card" key={pitem}>
              <Link
                to={`/project-single/${portfolio.id}`}
                onClick={ClickHandler}
                className="portfolio-modern-link"
              >
                <div className="portfolio-modern-image" style={{ cursor: "pointer" }}>
                  <img src={portfolio.cover} alt={portfolio.couple} />
                </div>

                <div className="portfolio-modern-content">
                  <h4>{portfolio.couple}</h4>
                  <h3>{portfolio.title}</h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection2;