import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import logo from "../../images/logo-tamara.png";

// import hero1 from '../../images/slider/slide-5.jpg'
// import hero2 from '../../images/slider/slide-6.jpg'
// import hero3 from '../../images/slider/slide-7.jpg'

// import heros1 from '../../images/slider/shape7.png'
// import heros2 from '../../images/slider/shape8.png'

class Hero3 extends Component {
  render() {


    return (
      <div className="wpo-hero-slider wpo-hero-style-3">
        <div className="swiper-container">
          <div className="swiper-wrapper">
              <div className="hero-slide">
                <div className="slide-inner slide-bg-image">
                  <div className="container-fluid">
                    <div className="slide-content" style={{ position: "relative" }}>
                      <img
                        src={logo}
                        alt="Logo"
                        style={{ width: "420px", height: "auto", display: "block", margin: "0 auto" }}
                      />
                      <div className="clearfix"></div>
                      <div className="slide-btns">
                        <Link to="/about" className="theme-btn">
                          Plan Your Wedding
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="slide-info"
                    style={{
                      color: "white",
                      fontSize: "18px",
                      position: "absolute",
                      bottom: "20px",
                      left: 0,
                      right: 0,
                      textAlign: "center",
                      margin: "0 auto",
                      width: "300px",
                    }}
                  >
                    A Boutique Wedding and Event Planning Firm Serving clients in New York, New jersey and beyond
                  </div>
                </div>
              </div>
              {/* <div className="hero-slide">
                                <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero2})` }}>
                                    <div className="container-fluid">
                                        <div className="slide-content">
                                            <div className="slide-title-sub">
                                                <span>
                                                    <i><img src={heros1} alt="" /></i>
                                                    Welcome To Feelings
                                                    <i><img src={heros2} alt="" /></i>
                                                </span>
                                            </div>
                                            <div className="slide-title">
                                                <h2>Making Memory That Last Forever</h2>
                                            </div>
                                            <div className="clearfix"></div>
                                            <div className="slide-btns">
                                                <Link to="/about" className="theme-btn">Plan Your Wedding</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hero-slide">
                                <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero3})` }}>
                                    <div className="container-fluid">
                                        <div className="slide-content">
                                            <div className="slide-title-sub">
                                                <span>
                                                    <i><img src={heros1} alt="" /></i>
                                                    Welcome To Feelings
                                                    <i><img src={heros2} alt="" /></i>
                                                </span>
                                            </div>
                                            <div className="slide-title">
                                                <h2>Making Memory That Last Forever</h2>
                                            </div>
                                            <div className="clearfix"></div>
                                            <div className="slide-btns">
                                                <Link to="/about" className="theme-btn">Plan Your Wedding</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Hero3;
