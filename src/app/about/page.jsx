import React from "react";
import AboutContent from "../../Component/AboutContent";
import Banner from "../../Component/Banner";
import Team from "../../Component/Team";
import MiddleBanner from "../../Component/MiddleBanner";
import AboutProcess from "../../Component/AboutProcess";
import BrandArea from "@/Component/BrandArea";

const About = () => {
  return (
    <div>
      <Banner
        pathName={"About"}
        title={"About Us"}
        path={"/about"}
        path2={""}
        path2Name={""}
      />
      <AboutContent />
      {/* <Team /> */}
      <AboutProcess />
      <MiddleBanner />
      <BrandArea />
    </div>
  );
};

export default About;
