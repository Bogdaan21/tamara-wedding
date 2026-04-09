import { Fragment, useState } from "react";
import Navbar2 from "../../components/Navbar2";
import PageTitle from "../../components/pagetitle";
import Scrollbar from "../../components/scrollbar";
import { useParams, Link } from "react-router-dom";
import portfolios from "../../data/portfolio.json";
import Footer from "../../components/footer";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const ProjectSinglePage = () => {
  const { id } = useParams();

  const projectDetails = portfolios.find((item) => String(item.id) === String(id));

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  if (!projectDetails) {
    return (
      <Fragment>
        <Navbar2 />
        <PageTitle pageTitle="Portfolio" pagesub="Portfolio" />
        <section className="wpo-portfolio-single-section section-padding">
          <div className="container">
            <h2>Project not found.</h2>
          </div>
        </section>
        <Footer />
        <Scrollbar />
      </Fragment>
    );
  }

  const slides = projectDetails.gallery.map((img) => ({
    src: img,
  }));

  return (
    <Fragment>
      <Navbar2 />
      <PageTitle pageTitle={projectDetails.title} pagesub={"Portfolio"} />

      <section className="wpo-portfolio-single-section section-padding">
        <div className="container">
          <div className="portfolio-single-wrap">
            <div className="row align-items-center">
              <div className="col-lg-6 col-12">
                <div className="portfolio-single-img">
                  <img src={projectDetails.cover} alt={projectDetails.couple} />
                </div>
              </div>

              <div className="col-lg-6 col-12">
                <div className="portfolio-single-text">
                  <h2>{projectDetails.couple}</h2>
                  <span>{projectDetails.location}</span>

                  <p>{projectDetails.description1}</p>
                  <p>{projectDetails.description2}</p>

                  <div className="wpo-portfolio-single-content-des">
                    <ul>
                      <li>
                        Client :<span>{projectDetails.client}</span>
                      </li>
                      <li>
                        Location :<span>{projectDetails.location}</span>
                      </li>
                      <li>
                        Date :<span>{projectDetails.date}</span>
                      </li>
                      <li>
                        Duration :<span>{projectDetails.duration}</span>
                      </li>
                      <li>
                        Tag :<span>{projectDetails.tags.join(", ")}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="wpo-portfolio-section-s3 section-padding">
            <h2 className="hidden">Gallery</h2>
            <div className="sortable-gallery">
              <div className="row">
                <div className="col-lg-12">
                  <div className="portfolio-grids gallery-container clearfix">
                    {projectDetails.gallery.map((img, pitem) => (
                      <div className="grid" key={pitem}>
                        <div
                          className="img-holder"
                          onClick={() => {
                            setIndex(pitem);
                            setOpen(true);
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          <img src={img} alt={`${projectDetails.couple} ${pitem + 1}`} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <Lightbox open={open} close={() => setOpen(false)} index={index} slides={slides} />
      </section>

      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default ProjectSinglePage;
