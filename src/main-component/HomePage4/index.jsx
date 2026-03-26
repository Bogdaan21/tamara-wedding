import React, { Fragment } from "react";
import Navbar2 from "../../components/Navbar2";
import Hero3 from "../../components/hero3";
import ServiceSection from "../../components/ServiceSection2";
import About from "../../components/about1";
import FunFact from "../../components/FunFact";
import TeamSection from "../../components/team";
import Testimonial from "../../components/Testimonial";
import PricingSection from "../../components/PricingSection";
import PartnerSection from "../../components/PartnerSection";
import BlogSection from "../../components/BlogSection";
import ProjectSection from "../../components/ProjectSection";
import Scrollbar from "../../components/scrollbar";
import Footer from "../../components/footer";
import ServiceHome from "../../components/serviceHome";
import AboutTamara from "../../components/aboutTamaraHome";

const HomePage4 = () => {
  return (
    <Fragment>
      <Navbar2 hclass={"wpo-header-style-2"} topbarBlock={"topbar-block"} />
      <Hero3 />
      <About />
      <ServiceHome />
      <AboutTamara />
      <PartnerSection />
      <Testimonial />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default HomePage4;
