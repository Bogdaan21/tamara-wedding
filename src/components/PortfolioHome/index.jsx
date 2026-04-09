import { useState } from "react";
import SectionTitle from "../SectionTitle";
import portfolios from "../../data/portfolio.json";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const PortfolioSection2 = (props) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // 👉 samo prva 3
  const Portfolios = portfolios.slice(0, 3);

  return (
    <section className={`portfolio-modern-section section-padding ${props.pClass || ""}`} id="gallery">
      <div className="container">
        <SectionTitle MainTitle={"Captured Moments"} />

        <div className="portfolio-modern-grid">
          {Portfolios.map((portfolio, pitem) => (
            <div className="portfolio-modern-card" key={pitem}>
              <div
                className="portfolio-modern-image"
                onClick={() => {
                  setIndex(pitem);
                  setOpen(true);
                }}
                style={{ cursor: "pointer" }}
              >
                <img src={portfolio.cover} alt={portfolio.couple} />
              </div>

              <div className="portfolio-modern-content">
                <h4>{portfolio.couple}</h4>
                <h3>{portfolio.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={0}
        slides={
          Portfolios[index]?.gallery.map((img) => ({
            src: img,
          })) || []
        }
      />
    </section>
  );
};

export default PortfolioSection2;