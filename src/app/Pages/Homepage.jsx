import React from "react";
import HomeHeader from "../Component/HomeHeader";
import HomeSlider from "../Component/HomeSlider";
import HomeAbout from "../Component/HomeAbout";
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
      </div>
    </div>
  );
};

export default Homepage;
