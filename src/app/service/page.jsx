import React from "react";
import Banner from "../../Component/Banner";
import ServiceContent from "../../Component/ServiceContent";
import ServiceBanner from "@/Component/ServiceBanner";

const Service = () => {
  return (
    <div>
      <Banner title={"Our Services"} path={"Services"} />
      <ServiceContent />
      <ServiceBanner />
    </div>
  );
};

export default Service;
