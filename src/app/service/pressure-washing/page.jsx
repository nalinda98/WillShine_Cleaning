import Banner from "@/Component/Banner";
import FAQ from "@/Component/FAQ";
import PricingTable from "@/Component/PricingTable";
import RelatedBlogs from "@/Component/RelatedBlogs";
import React from "react";

const SingleService = () => {
  return (
    <div>
      <Banner
        title={"Blossom Pressure Washing Service"}
        path={"/service"}
        pathName={"Services"}
        path2={"/service/pressure-washing"}
        path2Name={"Pressure Washing"}
      />
      <section className="section-padding-12">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 order-lg-1">
              <div className="single-service-box-layout1">
                <h2 className="service-title">Pressure Washing Services</h2>
                <p>
                  At Blossom Cleaning Services, we specialize in high-quality
                  pressure washing to bring new life to your home or business.
                  Whether it’s driveways, patios, siding, or walkways, our team
                  is committed to delivering outstanding results with care and
                  precision. Quality and customer service are our top priorities
                  — we’re not satisfied until you are!
                </p>
                <div className="main-img">
                  <img
                    src="/img/service/pressure.webp"
                    alt="Kitchen Cleaning"
                  />
                </div>
                <div className="service-content">
                  <div className="why-choose mt-4">
                    <h3 className="item-title mb-3">
                      Why Choose Blossom Pressure Cleaning Services
                    </h3>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="media">
                          <div className="item-icon">
                            <i className="far fa-check-circle" />
                          </div>
                          <div className="media-body space-md">
                            <h4 className="item-title">
                              Quality Work Every Time
                            </h4>
                            <p>
                              We take pride in delivering top-notch pressure
                              cleaning results that make your property shine. No
                              shortcuts — just great work you can trust.
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
                            <h4 className="item-title">
                              Customer Service First
                            </h4>
                            <p>
                              Your satisfaction is our priority. We listen,
                              care, and go the extra mile to make sure you’re
                              happy with every job.
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
                            <h4 className="item-title">
                              Experienced and Reliable Team
                            </h4>
                            <p>
                              Our trained professionals use the best techniques
                              to safely and effectively clean your surfaces,
                              arriving on time and ready to work.
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
                            <h4 className="item-title">
                              Eco-Friendly Solutions
                            </h4>
                            <p>
                              We use safe, environmentally friendly cleaning
                              products whenever possible to protect your home,
                              family, and the planet.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 mt-4">
                        <div className="media">
                          <div className="item-icon">
                            <i className="far fa-check-circle" />
                          </div>
                          <div className="media-body space-md">
                            <h4 className="item-title">Competitive Pricing</h4>
                            <p>
                              High-quality service doesn’t have to break the
                              bank. We offer fair, transparent pricing with no
                              hidden fees.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="service-more-content mt-5">
                    <h3 className="item-title">Our Services</h3>
                    <div className="row mt-4">
                      {/* Driveway Cleaning */}
                      <div className="col-md-4 mb-4">
                        <div className="card h-100 border-0 shadow-sm">
                          <div
                            className="card-img-top"
                            style={{
                              height: "180px",
                              backgroundColor: "#f0f0f0",
                            }}
                          >
                            <img
                              src="/img/service/driveway-placeholder.jpg"
                              alt="Driveway Cleaning"
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                          <div className="card-body">
                            <h5 className="card-title text-primary">
                              Driveway Cleaning
                            </h5>
                            <p className="card-text">
                              Remove years of grime, oil stains, and dirt from
                              your driveway. We restore curb appeal with deep
                              power washing.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Patio & Deck Cleaning */}
                      <div className="col-md-4 mb-4">
                        <div className="card h-100 border-0 shadow-sm">
                          <div
                            className="card-img-top"
                            style={{
                              height: "180px",
                              backgroundColor: "#f0f0f0",
                            }}
                          >
                            <img
                              src="/img/service/patio-placeholder.jpg"
                              alt="Patio & Deck Cleaning"
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                          <div className="card-body">
                            <h5 className="card-title text-primary">
                              Patio & Deck Cleaning
                            </h5>
                            <p className="card-text">
                              Bring back the beauty of your patio or timber deck
                              with safe, effective cleaning that removes moss,
                              mildew, and discoloration.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Pool Area Cleaning */}
                      <div className="col-md-4 mb-4">
                        <div className="card h-100 border-0 shadow-sm">
                          <div
                            className="card-img-top"
                            style={{
                              height: "180px",
                              backgroundColor: "#f0f0f0",
                            }}
                          >
                            <img
                              src="/img/service/pool-placeholder.jpg"
                              alt="Pool Area Cleaning"
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                          <div className="card-body">
                            <h5 className="card-title text-primary">
                              Pool Area Cleaning
                            </h5>
                            <p className="card-text">
                              Keep your poolside clean and slip-free with our
                              specialized surface treatments and pressure
                              washing.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <PricingTable
                    details={{
                      pack01: {
                        title: "Basic",
                        price: "$99",
                        features: [
                          "Surfaces Hand Wiped",
                          "Floors Cleaned",
                          "General Dusting",
                          "Cobwebs Removed",
                          "Doors Cleaned",
                        ],
                      },
                      pack02: {
                        title: "Standard",
                        price: "$199",
                        features: [
                          "Surfaces Hand Wiped",
                          "Floors Cleaned",
                          "General Dusting",
                          "Cobwebs Removed",
                          "Doors Cleaned",
                        ],
                      },
                      pack03: {
                        title: "Premium",
                        price: "$299",
                        features: [
                          "Surfaces Hand Wiped",
                          "Floors Cleaned",
                          "General Dusting",
                          "Cobwebs Removed",
                          "Doors Cleaned",
                        ],
                      },
                    }}
                  />

                  <FAQ />
                </div>
              </div>
            </div>

            {/* SIDEBAR */}
            <div className="col-lg-4 order-lg-2 sidebar-break-md sidebar-widget-area">
              <RelatedBlogs />
            </div>
            {/* END SIDEBAR */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleService;
