import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const galleryImages = [
  "/src/images/portfolio-single/1.jpg",
  "/src/images/portfolio-single/2.jpg",
  "/src/images/portfolio-single/3.jpg",
  "/src/images/portfolio-single/4.jpg",
  "/src/images/portfolio-single/5.jpg",
  "/src/images/portfolio-single/6.jpg",
];

const ServiceSection = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className="exquisite-weddings-section" id="Service">
      <div className="fullwidth-slider-wrap">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={900}
          grabCursor={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
        >
          {galleryImages.map((image, index) => (
            <SwiperSlide className="exquisite-slide" key={index}>
              <div className="slide-image-wrap">
                <img src={image} alt={`Wedding ${index + 1}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="container">
        <div className="exquisite-content">
          <h2>EXQUISITE WEDDINGS</h2>
          <span>tailored to your story</span>

          <div className="mid-line"></div>

          <p>
            We’re dedicated to ensuring every detail of your wedding is thoughtfully managed so you can focus on the
            moments that matter most. We strive to create a seamless day that allows you to be fully present.
          </p>

          <Link onClick={ClickHandler} to="/portfolio" className="gallery-btn">
            EXPLORE THE GALLERIES
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
