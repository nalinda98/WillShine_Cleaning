import Banner from "@/Component/Banner";
import FAQ from "@/Component/FAQ";
import React from "react";

const SingleService = () => {
  return (
    <div>
      <Banner
        title={"Professional Carpet Cleaning"}
        path={"Services > Carpet Cleaning"}
      />
      <section className="section-padding-12">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 order-lg-2">
              <div className="single-service-box-layout1">
                <h2 className="service-title">Professional Carpet Cleaning</h2>
                <p>
                  At Blossom Property Services, we provide top-notch carpet
                  cleaning that leaves your carpets looking fresh and
                  revitalized. Our advanced equipment and non-toxic cleaning
                  solutions ensure a safe and effective clean for every space.
                </p>
                <div className="main-img">
                  <img src="/img/service/carpet-cleaning11.jpg" alt="Kitchen Cleaning" />
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
                    Trust Blossom Property Services to create a healthier and
                    more inviting environment for your family, employees, and
                    clients.
                  </p>

                  <div className="service-more-content">
                    <h3 className="item-title text-center mb-4">
                      Carpet Cleaning Prices
                    </h3>
                    <div className="row">
                      {[
                        {
                          title: "Empty Rooms",
                          price: "$100",
                          subtitle: "Starts from",
                          features: [
                            "1 Bedroom – $100",
                            "2 Bedroom – $120",
                            "3 Bedroom – $150",
                            "4 Bedroom – $175",
                          ],
                        },
                        {
                          title: "Furnished Rooms",
                          price: "$110",
                          subtitle: "Starts from",
                          features: [
                            "1 Bedroom – $110",
                            "2 Bedroom – $130",
                            "3 Bedroom – $165",
                            "4 Bedroom – $180",
                          ],
                        },
                        {
                          title: "Office Carpet Cleaning",
                          price: "$3/sqm",
                          subtitle: "Starts from",
                          features: [
                            "Up to 100 sqm – $3.00",
                            "101–200 sqm – $2.75",
                            "201–300 sqm – $2.50",
                            "Over 300 sqm – $2.25",
                          ],
                        },
                      ].map((card, idx) => (
                        <div className="col-md-4 mb-4" key={idx}>
                          <div
                            className="card-hover-effect"
                            style={{
                              backgroundColor: "#fff",
                              borderRadius: "12px",
                              padding: "30px 20px",
                              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.05)",
                              display: "flex",
                              flexDirection: "column",
                              height: "100%",
                            }}
                          >
                            <div
                              style={{
                                textAlign: "center",
                                marginBottom: "15px",
                                height: "50px",
                              }}
                            >
                              <h5 style={{ color: "#2a7dfd", fontWeight: 600 }}>
                                {card.title}
                              </h5>
                            </div>

                            <div
                              style={{
                                textAlign: "center",
                                marginBottom: "15px",
                              }}
                            >
                              <h2 style={{ margin: 0, fontSize: "28px" }}>
                                {card.price}
                              </h2>
                              <p style={{ marginBottom: 0 }}>{card.subtitle}</p>
                            </div>

                            <div style={{ flexGrow: 1, marginTop: "15px" }}>
                              <ul
                                className="item-feature"
                                style={{ textAlign: "center" }}
                              >
                                {card.features.map((item, i) => (
                                  <li key={i}>{item}</li>
                                ))}
                              </ul>
                            </div>

                            <div
                              style={{ textAlign: "center", marginTop: "20px" }}
                            >
                              <button
                                className="fw-btn-fill bg-accent text-primarytext"
                                // style={{
                                //   backgroundColor: "#2a7dfd",
                                //   color: "#fff",
                                //   border: "none",
                                //   borderRadius: "8px",
                                //   padding: "10px 20px",
                                //   fontWeight: "600",
                                //   cursor: "pointer",
                                //   width: "100%",
                                // }}
                              >
                                Book Now
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

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
            <div className="col-lg-4 order-lg-1 sidebar-break-md sidebar-widget-area">
              <div className="widget widget-service-info">
                <div className="heading-layout4">
                  <h4>Service Information</h4>
                </div>
                <div className="service-info">
                  <ul>
                    <li className="active">
                      <div className="service-price">$100.00</div>
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
                        data-error="Name field is required"
                        required=""
                      />
                      <div className="help-block with-errors" />
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
                        data-error="email field is required"
                        required=""
                      />
                      <div className="help-block with-errors" />
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
                        data-error="Phone field is required"
                        required=""
                      />
                      <div className="help-block with-errors" />
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
                        data-error="Subject field is required"
                        required=""
                      />
                      <div className="help-block with-errors" />
                    </div>
                    <div className="col-12 form-group">
                      <div className="form-icon">
                        <i className="far fa-comments" />
                      </div>
                      <textarea
                        placeholder="Message"
                        className="textarea form-control"
                        name="message"
                        id="form-message"
                        rows={4}
                        cols={20}
                        data-error="Message field is required"
                        required=""
                        defaultValue={""}
                      />
                      <div className="help-block with-errors" />
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleService;
