import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo-tamara.png";

import hero1 from "../../images/test/1.jpeg";
import hero2 from "../../images/test/2.jpeg";
import hero3 from "../../images/test/3.jpeg";

class Hero3 extends Component {
  state = {
    currentSlide: 0,
  };

  componentDidMount() {
    this.sliderInterval = setInterval(() => {
      this.setState((prevState) => ({
        currentSlide: (prevState.currentSlide + 1) % 3,
      }));
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.sliderInterval);
  }

  render() {
    const slides = [hero1, hero2, hero3];

    return (
      <div className="wpo-hero-slider wpo-hero-style-3">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="hero-slide">
              <div
                className="slide-inner slide-bg-image"
                style={{
                  backgroundImage: `url(${slides[this.state.currentSlide]})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  transition: "background-image 0.8s ease-in-out",
                }}
              >
                <div className="container-fluid">
                  <div className="slide-content" style={{ position: "relative" }}>
                    <img
                      src={logo}
                      alt="Logo"
                      style={{
                        width: "420px",
                        height: "auto",
                        display: "block",
                        margin: "0 auto",
                      }}
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
          </div>
        </div>
      </div>
    );
  }
}

export default Hero3;
