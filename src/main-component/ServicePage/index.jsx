import React, { Fragment } from "react";
import Navbar2 from "../../components/Navbar2";
import PageTitle from "../../components/pagetitle";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import ServiceSection2 from "../../components/ServiceSection2";
import FunFact from "../../components/FunFact";
import PricingSection from "../../components/PricingSection";
import ImgStyle from "../../components/ImgStyle";
import BelowService from "../../components/belowservice";

const ServicePage = () => {
  return (
    <Fragment>
      <Navbar2 />
      <BelowService />
      <ImgStyle />
      <ServiceSection2 sSClass={"wpo-service-section-s3"} />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default ServicePage;
