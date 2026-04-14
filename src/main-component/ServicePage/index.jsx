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
import ServiceSectionPart1 from "../../components/ServiceSectionPart1";
import ServiceSectionPart2 from "../../components/ServiceSectionPart2";
import ServiceSectionPart3 from "../../components/ServiceSectionPart3";

const ServicePage = () => {
  return (
    <Fragment>
      <Navbar2 />
      <BelowService />
      <ImgStyle />
      <ServiceSectionPart1 />
      <ServiceSectionPart2 />
      <ServiceSectionPart3 />
      {/* <ServiceSection2 sSClass={"wpo-service-section-s3"} /> */}
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default ServicePage;
