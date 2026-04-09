import React, { Fragment } from "react";
import Navbar2 from "../../components/Navbar2";
import About from "../../components/aboutMeetT";
import ServiceSection from "../../components/ServiceSection";
import FunFact from "../../components/FunFact";
import TeamSection from "../../components/team";
import PageTitle from "../../components/aboutPageTitle";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import ProjectSection from "../../components/ProjectSection";
import PricingSection from "../../components/PricingSection";
import ServiceList from "../../components/ServiceList";

const AboutPage = () => {
  return (
    <Fragment>
      <Navbar2 />
      <PageTitle />
      {/* <About1 pt={"pb-120"} /> */}
      <About pt={'pt-120'}/>
      {/* <ServiceList pbClass={"pb-0"} /> */}
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default AboutPage;
