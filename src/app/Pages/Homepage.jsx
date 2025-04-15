import React from "react";
import HomeHeader from "../Component/HomeHeader";
import HomeSlider from "../Component/HomeSlider";
import HomeAbout from "../Component/HomeAbout";
import HomeService from "../Component/HomeService";
import HomeCallForm from "../Component/HomeCallForm";
import PricingTable from "../Component/PricingTable";
import ProgressArea from "../Component/ProgressArea";
import HomeBanner from "../Component/HomeBanner";
import Testimonial from "../Component/Testimonial";
import HomeBlog from "../Component/HomeBlog";
import Footer from "../Component/Footer";
import Team from "../Component/Team";
const Homepage = () => {
  return (
    <div>
      <a href="#wrapper" data-type="section-switch" className="scrollup">
        <i className="fas fa-angle-double-up"></i>
      </a>
      {/* <div id="preloader"></div> */}
      <div id="wrapper" className="wrapper">
        <HomeHeader />
        <HomeSlider />
        <HomeAbout />
        <HomeService />
        <HomeCallForm />
        <HomeBanner />
        <PricingTable />
        <Team />
        <ProgressArea />
        <Testimonial />
        <HomeBlog />
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
