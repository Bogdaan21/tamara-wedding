import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import Hero from '../../components/hero'
import CoupleSection from '../../components/CoupleSection'
import StorySection from '../../components/StorySection';
import VideoSection from '../../components/VideoSection'
import PortfolioSection2 from '../../components/PortfolioSection2';
import RSVP from '../../components/RSVP';
import EventSection from '../../components/EventSection';
import PartnerSection from '../../components/PartnerSection';
import Scrollbar from '../../components/scrollbar'
import BlogSection from '../../components/BlogSection';
import Footer from '../../components/footer';



const HomePage =() => {

    return(
        <Fragment>
            <Navbar hclass={'wpo-site-header-s1'}/>
            <Hero/>
            <CoupleSection/>
            <StorySection/>
            <VideoSection/>
            <PortfolioSection2/>
            <RSVP/>
            <EventSection/>
            <PartnerSection/>
            <BlogSection/>
            <Footer/> 
            <Scrollbar/>
        </Fragment>
    )
};

export default HomePage;