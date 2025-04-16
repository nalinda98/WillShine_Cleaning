import React from "react";
import AboutContent from "../../Component/AboutContent";
import Banner from "../../Component/Banner";
import Team from "../../Component/Team";
import MiddleBanner from "../../Component/MiddleBanner";
import AboutProcess from "../../Component/AboutProcess";


const About = () => {
  return (
    <div>
      <Banner path={"About"} title={"About Us"} />
      <AboutContent />
      <Team/>
      <MiddleBanner/>
<AboutProcess/>
    </div>
  );
};

export default About;
