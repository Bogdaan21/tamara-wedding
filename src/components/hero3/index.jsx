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

                    <div
                      style={{
                        textAlign: "center",
                        marginTop: "30px",
                        maxWidth: "700px",
                        marginLeft: "auto",
                        marginRight: "auto",
                        color: "#fff",
                      }}
                    >
                      <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>Wedding in Montenegro</h2>

                      <h4 style={{ fontWeight: "400", marginBottom: "15px" }}>
                        What a Wedding - Luxury Wedding Planning and Design
                      </h4>
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
                    width: "800px",
                  }}
                >
                  <p style={{ fontSize: "15px", lineHeight: "1.7" }}>
                    What a Wedding creates destination weddings in Montenegro, defined by intention, elegance, and a
                    refined sense of simplicity. Founded by Tamara Perić in 2022, the team is dedicated to organizing
                    and designing celebrations that feel personal, seamless, and entirely unique to each couple.
                  </p>{" "}
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
