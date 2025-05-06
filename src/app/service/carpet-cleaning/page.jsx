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
        title={"Professional Carpet Cleaning"}
        path={"/service"}
        pathName={"Services"}
        path2={"/service/carpet-cleaning"}
        path2Name={"Carpet Cleaning"}
      />
      <section className="section-padding-12">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 order-lg-1">
              <div className="single-service-box-layout1">
                <h2 className="service-title">Professional Carpet Cleaning</h2>
                <p>
                  At Willshine Property Services, we provide top-notch carpet
                  cleaning that leaves your carpets looking fresh and
                  revitalized. Our advanced equipment and non-toxic cleaning
                  solutions ensure a safe and effective clean for every space.
                </p>
                <div className="main-img">
                  <img
                    src="/img/service/carpet-cleaning11.jpg"
                    alt="Kitchen Cleaning"
                  />
                </div>
                <div className="service-content">
                  <p>
                    Our team is fully trained, insured, and committed to
                    delivering exceptional service tailored to your specific
                    needs. Whether it’s a cosy home, a busy office, or a
                    high-traffic commercial space, we offer flexible scheduling
                    and meticulous attention to detail.
                  </p>
                  <div className="why-choose">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="media">
                          <div className="item-icon">
                            <i className="far fa-check-circle" />
                          </div>
                          <div className="media-body space-md">
                            <h3 className="item-title">
                              Remove Allergens & Dust Mites
                            </h3>
                            <p>
                              Our deep cleaning eliminates trapped contaminants,
                              promoting a healthier indoor environment for you
                              and your family.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="media">
                          <div className="item-icon">
                            <i className="far fa-check-circle" />
                          </div>
                          <div className="media-body space-md">
                            <h3 className="item-title">Improve Air Quality</h3>
                            <p>
                              Fresh carpets significantly enhance the overall
                              air quality, creating a cleaner, fresher living
                              and working space.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 mt-4">
                        <div className="media">
                          <div className="item-icon">
                            <i className="far fa-check-circle" />
                          </div>
                          <div className="media-body space-md">
                            <h3 className="item-title">Prevent Mould Growth</h3>
                            <p>
                              Our fast-drying professional techniques help
                              prevent mould and mildew, protecting your carpet
                              and your health.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p>
                    Trust Willshine Property Services to create a healthier and
                    more inviting environment for your family, employees, and
                    clients.
                  </p>

                  <PricingTable
                    details={{
                      pack01: {
                        title: "Basic",
                        price: "$100",
                        unit: "Start From",
                        features: [
                          "1 Bedroom - $100",
                          "2 Bedroom - $120",
                          "3 Bedroom - $150",
                          "4 Bedroom - $175",
                        ],
                      },
                      pack02: {
                        title: "Standard",
                        price: "$110",
                        unit: "Start From",
                        features: [
                          "1 Bedroom - $110",
                          "2 Bedroom - $130",
                          "3 Bedroom - $165",
                          "4 Bedroom - $180",
                        ],
                      },
                      pack03: {
                        title: "Premium",
                        price: "$3.00",
                        unit: "per sqm",                        
                        features: [
                          "Upto 100sqm - $3/sqm",
                          "101-200sqm - $2.75/sqm",
                          "201-300sqm - $2.50/sqm",
                          "Over 300sqm - $2.25/sqm",
                        ],
                      },
                    }}
                  />

                  <div className="service-more-content mt-5">
                    <h3 className="item-title">How It Works</h3>
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="item-content">
                          <h4>01. Contact Us</h4>
                          <p>
                            Reach out via our website, email, or phone. We'll
                            visit your premises to assess the work and provide a
                            free, instant quote.
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="item-content">
                          <h4>02. Confirm & Schedule</h4>
                          <p>
                            Once you accept the quote, we’ll book a convenient
                            date. We apply a dirt-neutralizing solution, scrub,
                            and steam clean for a thorough deep clean.
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="item-content">
                          <h4>03. Satisfaction Guaranteed</h4>
                          <p>
                            After completing the job, we invite you to inspect
                            our work to ensure you’re 100% satisfied before we
                            leave.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <FAQ />
                </div>
              </div>
            </div>
            <div className="col-lg-4 order-lg-2 sidebar-break-md sidebar-widget-area">
              <RelatedBlogs />
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleService;
