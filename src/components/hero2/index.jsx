import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import hero1 from "../../images/slider/slide-1.jpg";
import hero2 from "../../images/slider/slide-2.jpg";
import hero3 from "../../images/slider/slide-3.jpg";
import hero4 from "../../images/slider/slide-4.jpg";
import hero5 from "../../images/slider/slide-5.jpg";

class Hero2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSlide: 0,
    };
  }

  render() {
    const slides = [hero1, hero2, hero3, hero4, hero5];

    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: false,
      centerMode: true,
      centerPadding: "70px",
      slidesToShow: 3,
      slidesToScroll: 1,
      beforeChange: (_, next) => {
        this.setState({ currentSlide: next });
      },
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 3,
            centerPadding: "40px",
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            centerPadding: "20px",
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            centerPadding: "20px",
          },
        },
      ],
    };

    const visibleIndex = (this.state.currentSlide % slides.length) + 1;
    const totalSlides = slides.length;

    return (
      <section className={`hero-gallery-section ${this.props.boxClass || ""}`}>
        <div className={`wpo-hero-slider gallery-style ${this.props.heroClass || ""}`}>
          <div className="gallery-slider-wrap">
            <Slider ref={(slider) => (this.sliderRef = slider)} {...settings}>
              {slides.map((slide, index) => (
                <div className="gallery-slide-item" key={index}>
                  <div className="gallery-slide-inner">
                    <img src={slide} alt={`Wedding slide ${index + 1}`} />
                  </div>
                </div>
              ))}
            </Slider>

            <div className="gallery-slider-bottom">
              <button
                className="gallery-nav gallery-prev"
                onClick={() => this.sliderRef.slickPrev()}
                type="button"
                aria-label="Previous"
              >
                <span></span>
              </button>

              <div className="gallery-counter">
                <span>{visibleIndex}</span>
                <i></i>
                <span>{totalSlides}</span>
              </div>

              <button
                className="gallery-nav gallery-next"
                onClick={() => this.sliderRef.slickNext()}
                type="button"
                aria-label="Next"
              >
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero2;