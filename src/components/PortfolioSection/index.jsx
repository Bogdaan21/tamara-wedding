import { useState } from "react";
import SectionTitle from '../SectionTitle'
import pImg1 from '/img/portfolio/7.jpg'
import pImg2 from '/img/portfolio/8.jpg'
import pImg3 from '/img/portfolio/9.jpg'
import pImg4 from '/img/portfolio/10.jpg'
import pImg5 from '/img/portfolio/11.jpg'
import pImg6 from '/img/portfolio/12.jpg'
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";


const Portfolios = [
    {
        Pimg:pImg1,
    },
    {
        Pimg:pImg2,
    },
    {
        Pimg:pImg3,
    }
] 

const PortfolioSection = (props) => {

    const [open, setOpen] = useState(false);
      const [index, setIndex] = useState(0);

    return(
        <section className={`wpo-portfolio-section section-padding ${props.pSclass}`} id="gallery">
            <div className="container">
                <SectionTitle MainTitle={'Curated Celebrations'}/>
                <div className="sortable-gallery">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="portfolio-grids gallery-container clearfix">
                                {Portfolios.map((portfolio, pitem) => (
                                    <div className="grid" key={pitem}>
                                        <div
                                            className="img-holder"
                                            onClick={() => {
                                                setIndex(pitem);
                                                setOpen(true);
                                            }}
                                            style={{ cursor: "pointer" }}
                                        >
                                            <img src={portfolio.Pimg} alt="" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* LIGHTBOX */}
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                index={index}
                slides={[
                    { src: pImg1 },
                    { src: pImg2 },
                    { src: pImg3 },
                    { src: pImg4 },
                    { src: pImg5 },
                    { src: pImg6 },
                ]}
            />
        </section>
    )
}

export default PortfolioSection;