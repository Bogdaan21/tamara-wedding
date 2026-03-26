import { useState } from "react";
import SectionTitle from "../SectionTitle";
import pImg1 from "../../images/portfolio/1.jpg";
import pImg2 from "../../images/portfolio/2.jpg";
import pImg3 from "../../images/portfolio/3.jpg";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Portfolios = [
  {
    Pimg: pImg1,
    couple: "KATHLEEN AND MIRZA",
    title: "Timeless, elegant wedding at The Tides Estate",
  },
  {
    Pimg: pImg2,
    couple: "OLIVIA AND ROBERT",
    title: "Tented wedding at Hamilton Farm Golf Club",
  },
  {
    Pimg: pImg3,
    couple: "ERICA AND MARTIN",
    title: "Chic wedding at Mountain Creek Resort",
  },
  {
    Pimg: pImg3,
    couple: "ERICA AND MARTIN",
    title: "Chic wedding at Mountain Creek Resort",
  },
  {
    Pimg: pImg3,
    couple: "ERICA AND MARTIN",
    title: "Chic wedding at Mountain Creek Resort",
  },
  {
    Pimg: pImg3,
    couple: "ERICA AND MARTIN",
    title: "Chic wedding at Mountain Creek Resort",
  },
  {
    Pimg: pImg3,
    couple: "ERICA AND MARTIN",
    title: "Chic wedding at Mountain Creek Resort",
  },
];

const PortfolioSection2 = (props) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

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
                <img src={portfolio.Pimg} alt={portfolio.couple} />
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
        index={index}
        slides={Portfolios.map((item) => ({ src: item.Pimg }))}
      />
    </section>
  );
};

export default PortfolioSection2;
