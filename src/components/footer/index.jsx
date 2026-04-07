import React from "react";
import { Link } from "react-router-dom";
import Projects from "../../api/projects";

const Footer = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <footer className="wpo-site-footer">
      <div className="wpo-upper-footer">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col col-xl-5 col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="widget about-widget">
                <div className="logo widget-title">
                  <Link onClick={ClickHandler} className="logo" to="/">
                    Feel
                    <span>
                      i<i className="fa fa-heart" aria-hidden="true"></i>
                    </span>
                    ngs
                  </Link>
                </div>
                <p>Elements: Logo, Instagram Icon, LinkedIn Icon, Email Address, WhatsApp Number</p>
                <p>Location Tag: Based in Montenegro | Destination Weddings</p>
                <p>What a Wedding. All rights reserved</p>
              </div>
              <Link to="/" className="about-preview-btn">
                Get in Touch
              </Link>
            </div>

            <div className="col col-xl-5  col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="widget instagram">
                <div className="widget-title">
                  <h3>Instagram</h3>
                </div>
                <ul className="d-flex">
                  {Projects.slice(0, 6).map((project, pitem) => (
                    <li key={pitem}>
                      <Link onClick={ClickHandler} to={`/project-single/${project.id}`}>
                        <img src={project.pimg1} alt="" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wpo-lower-footer">
        <div className="container">
          <div className="row">
            <div className="col col-xs-12">
              <p className="copyright">
                © 2026 Tamara Perić Wedding | v0.1.0 |
                <Link onClick={ClickHandler} to="https://botech.me" target="_blank">
                  {" "}
                  botech IT Solutions
                </Link>
              </p>{" "}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
