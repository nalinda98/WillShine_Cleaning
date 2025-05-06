import AboutProcess from "@/Component/AboutProcess";
import Banner from "@/Component/Banner";
import ContactForm from "@/Component/ContactForm";
import FAQ from "@/Component/FAQ";
import PricingTable from "@/Component/PricingTable";
import RelatedBlogs from "@/Component/RelatedBlogs";
import React from "react";

const SingleService = () => {
  return (
    <div>
      <Banner
        title={"Office Cleaning Service"}
        path={"/service"}
        pathName={"Services"}
        path2={"/service/office-cleaning"}
        path2Name={"Office Cleaning"}
      />
      <section className="section-padding-12">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 order-lg-1">
              <div className="single-service-box-layout1">
                <h2 className="service-title">Office Cleaning Service</h2>
                <div className="main-img">
                  <img
                    src="/img/service/officeClean.jpg"
                    alt="Office Cleaning"
                  />
                </div>
                <p>
                  At Blossom Cleaning Services, we specialize in providing
                  top-notch cleaning solutions exclusively for office buildings.
                  With our unwavering focus on this niche, we’ve mastered the
                  art of maintaining a pristine, professional workspace. Our
                  innovative cleaning techniques, modern equipment, and
                  dedicated team ensure that your workplace stays clean, safe,
                  and welcoming.
                </p>

                <PricingTable
                  details={{
                    pack01: {
                      title: "Basic",
                      price: "$50",
                      unit: "+ GST Per Hour",
                      features: [
                        "Single-story building",
                        "Small warehouse or factory",
                        "Less than 20 employees",
                        "1–3 hours Estimated Time Required",
                      ],
                    },
                    pack02: {
                      title: "Standard",
                      price: "$50",
                      unit: "+ GST Per Hour",
                      features: [
                        "One or two-story building",
                        "Warehouse and/or factory",
                        "Fewer than 200 employees",
                        "3–6 hours Estimated Time Required",
                      ],
                    },
                    pack03: {
                      title: "Premium",
                      price: "$50",
                      unit: "+ GST Per Hour",
                      features: [
                        "Multi-story building",
                        "With or without a warehouse/factory",
                        "Over 200 employees",
                        "6+ hours Estimated Time Required",
                      ],
                    },
                  }}
                />
                <div className="service-content">
                  <h3>
                    Why Do So Many Companies Choose Our Office Cleaning Service?
                  </h3>
                  <div className="row">
                    {[
                      {
                        img: "/img/icons/unlock.png",
                        title: "No Lock-In Contracts",
                        desc: "Enjoy complete flexibility—our results earn your trust, not binding agreements.",
                      },
                      {
                        img: "/img/icons/clean.png",
                        title: "Specialized Office Cleaning",
                        desc: "Office cleaning is all we do, so we do it better—no distractions, no dilution.",
                      },
                      {
                        img: "/img/icons/fanchise.jpg",
                        title: "Not a Franchise",
                        desc: "We don’t outsource. Our own vetted staff ensures consistent quality service.",
                      },
                      {
                        img: "/img/icons/ok.webp",
                        title: "Quality Checks & Standards",
                        desc: "Daily and fortnightly inspections ensure top-tier cleaning at all times.",
                      },
                      {
                        img: "/img/icons/trust.png",
                        title: "Trusted, Police-Cleared Team",
                        desc: "All cleaners are carefully screened and trained for professionalism and trust.",
                      },
                      {
                        img: "/img/icons/equipment.jpeg",
                        title: "Advanced Equipment",
                        desc: "We use modern, eco-conscious tools for safe and thorough cleaning.",
                      },
                      {
                        img: "/img/icons/document.png",
                        title: "Customized Plans",
                        desc: "Every office is different. We create schedules tailored to your needs.",
                      },
                      {
                        img: "/img/icons/team.jpeg",
                        title: "Reliable, Trained Team",
                        desc: "Our insured professionals show up on time and exceed expectations.",
                      },
                      {
                        img: "/img/icons/safety.png",
                        title: "Health & Safety First",
                        desc: "We prioritize hygiene to reduce germs, allergens, and other hazards.",
                      },
                    ].map((item, index) => (
                      <div className="col-lg-6 col-md-6 mb-4" key={index}>
                        <div className="media align-items-start">
                          <img
                            src={item.img}
                            alt={item.title}
                            className="mr-3"
                            style={{ width: 60, height: 60 }}
                          />
                          <div className="">
                            <h5 className="mt-0">{item.title}</h5>
                            <p>{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <AboutProcess />
                </div>
              </div>
            </div>
            <div className="col-lg-4 order-lg-2 sidebar-break-md sidebar-widget-area">
              <RelatedBlogs category={"office-cleaning"} />
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleService;
