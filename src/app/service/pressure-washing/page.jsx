import Banner from "@/Component/Banner";
import FAQ from "@/Component/FAQ";
import React from "react";

const SingleService = () => {
  return (
    <div>
      <Banner
        title={"Blossom Pressure Washing Service"}
        path={"Services > Pressure Washing"}
      />
      <section className="section-padding-12">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 order-lg-2">
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
                  <img src="/img/service/pressure.webp" alt="Kitchen Cleaning" />
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

                  <FAQ />
                </div>
              </div>
            </div>

            {/* SIDEBAR */}
            <div className="col-lg-4 order-lg-1 sidebar-break-md sidebar-widget-area">
              <div className="widget widget-service-info">
                <div className="heading-layout4">
                  <h4>Service Information</h4>
                </div>
                <div className="service-info">
                  <ul>
                    <li className="active">
                      <div className="service-price">$150.00</div>
                    </li>
                    <li>
                      <div className="item-title">Cleaning Hours</div>
                      <div className="item-subtitle">1-3 Hours</div>
                    </li>
                    <li>
                      <div className="item-title">Number of Cleaners</div>
                      <div className="item-subtitle">02 Cleaners</div>
                    </li>
                    <li>
                      <div className="item-title">Visiting Hours</div>
                      <div className="item-subtitle">09.00am - 06.00pm</div>
                    </li>
                    <li>
                      <div className="item-title">Contact</div>
                      <div className="item-subtitle">+88 9504200</div>
                    </li>
                    <li>
                      <div className="item-title">E-mail</div>
                      <div className="item-subtitle">info@blossom.com</div>
                    </li>
                  </ul>
                  <a
                    href="#"
                    className="fw-btn-fill bg-accent text-primarytext mt-1"
                  >
                    Book Now
                  </a>
                </div>
              </div>

              <div className="widget widget-contact-form">
                <div className="heading-layout4">
                  <h4>Have you Any Question?</h4>
                </div>
                <form className="contact-form-box" id="contact-form">
                  <div className="row">
                    <div className="col-12 form-group">
                      <div className="form-icon">
                        <i className="fas fa-user" />
                      </div>
                      <input
                        type="text"
                        placeholder="Name"
                        className="form-control"
                        name="name"
                        required=""
                      />
                    </div>
                    <div className="col-12 form-group">
                      <div className="form-icon">
                        <i className="far fa-envelope" />
                      </div>
                      <input
                        type="email"
                        placeholder="E-mail Address"
                        className="form-control"
                        name="email"
                        required=""
                      />
                    </div>
                    <div className="col-12 form-group">
                      <div className="form-icon">
                        <i className="fas fa-phone-volume" />
                      </div>
                      <input
                        type="text"
                        placeholder="Phone"
                        className="form-control"
                        name="phone"
                        required=""
                      />
                    </div>
                    <div className="col-12 form-group">
                      <div className="form-icon">
                        <i className="fas fa-question" />
                      </div>
                      <input
                        type="text"
                        placeholder="Subject"
                        className="form-control"
                        name="subject"
                        required=""
                      />
                    </div>
                    <div className="col-12 form-group">
                      <div className="form-icon">
                        <i className="far fa-comments" />
                      </div>
                      <textarea
                        placeholder="Message"
                        className="textarea form-control"
                        name="message"
                        rows={4}
                        required=""
                      />
                    </div>
                    <div className="col-12 form-group">
                      <button
                        type="submit"
                        className="fw-btn-fill bg-accent text-primarytext"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                  <div className="form-response" />
                </form>
              </div>

              <div className="widget widget-banner">
                <div className="item-img">
                  <img src="/img/figure/widget-banner.png" alt="banner" />
                </div>
                <div className="item-content">
                  <h2 className="item-title">
                    <span>30</span>% Discount
                  </h2>
                  <div className="item-subtitle">Promotion Offer 16 Days</div>
                  <a
                    href="#"
                    className="fw-btn-fill bg-accent text-primarytext"
                  >
                    Contact With US
                  </a>
                </div>
              </div>
            </div>
            {/* END SIDEBAR */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleService;
