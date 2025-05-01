import Banner from "@/Component/Banner";
import FAQ from "@/Component/FAQ";
import React from "react";

const SingleService = () => {
  return (
    <div>
      <Banner
        title={"Office Cleaning Service"}
        path={"Services > Office Cleaning"}
      />
      <section className="section-padding-12">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 order-lg-2">
              <div className="single-service-box-layout1">
                <h2 className="service-title">Office Cleaning Service</h2>
                <p>
                  A clean and organized workspace can boost productivity, reduce stress, and create a professional environment. But who has the time for deep cleaning every day? The good news is, with a few simple hacks, you can keep your office spotless without breaking a sweat. Here are ten office cleaning hacks that will transform your workspace overnight!
                </p>
                <div className="main-img">
                  <img src="/img/service/officeClean.jpg" alt="Kitchen Cleaning" />
                </div>
                <div className="service-content">
                  <p>
                    1. <b>Declutter First, Clean Later:</b> Use a “three-box method” (Keep, Recycle, Trash) and invest in desk organizers.<br/>
                    2. <b>Use Microfiber Cloths for Dusting:</b> Lightly dampen the cloth to capture more dust.<br/>
                    3. <b>Disinfect Your Keyboard and Mouse:</b> Cotton swabs dipped in isopropyl alcohol work wonders.<br/>
                    4. <b>Freshen Up Office Air Naturally:</b> Add small plants or place baking soda to absorb odors.<br/>
                    5. <b>Use Coffee Filters for Screen Cleaning:</b> Gently wipe your monitor with a dry coffee filter.<br/>
                    6. <b>Keep Your Office Chair Clean:</b> Use a lint roller and mild soap solution for fabric chairs.<br/>
                    7. <b>Organize Cables with Binder Clips:</b> Attach binder clips to your desk to manage cables easily.<br/>
                    8. <b>Use Lemon for a Fresh-Smelling Office:</b> Lemon juice mixed with water works as a natural surface cleaner.<br/>
                    9. <b>Clean Office Windows with Vinegar:</b> Mix vinegar and water for a streak-free shine.<br/>
                    10. <b>Keep a Desk Cleaning Kit:</b> Include wipes, microfiber cloths, mini brush, and hand sanitizer.
                  </p>
                  <div className="why-choose">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="media">
                          <div className="item-icon">
                            <i className="far fa-check-circle" />
                          </div>
                          <div className="media-body space-md">
                            <h3 className="item-title">Customized Cleaning Plans</h3>
                            <p>
                              Blossom Property Services tailors cleaning schedules and tasks to your office's specific needs, ensuring optimal results without disruption.
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
                            <h3 className="item-title">Eco-Friendly Products</h3>
                            <p>
                              We use safe, non-toxic, and eco-friendly cleaning supplies, protecting both employees and the environment while delivering excellent cleanliness.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>
                    While these office cleaning hacks can help maintain your workspace daily, nothing beats a professional touch. Blossom Property Services specializes in delivering expert office cleaning solutions, offering a healthier, more productive working environment with trained cleaning professionals.
                  </p>
                  <div className="service-more-content">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="item-img">
                          <img src="/img/service/service10.jpg" alt="thumb" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="item-content">
                          <h3 className="item-title">
                            Why Choose Blossom Property Services?
                          </h3>
                          <p>
                            Blossom Property Services stands out because we specialize only in office cleaning. Our vision: "Office Cleaning – It’s All We Do, and We Do It Best!" Our dedication ensures your workspace shines.
                          </p>
                          <ul className="item-feature">
                            <li>Trained Cleaning Professionals</li>
                            <li>Affordable & Reliable Service</li>
                            <li>Flexible Scheduling</li>
                            <li>Eco-Friendly Cleaning Solutions</li>
                            <li>Guaranteed Customer Satisfaction</li>
                          </ul>
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
                      <div className="service-price">$150.00</div>
                    </li>
                    <li>
                      <div className="item-title">Cleaning Hours</div>
                      <div className="item-subtitle">1-3 Hours</div>
                    </li>
                    <li>
                      <div className="item-title">Number of Cleaners</div>
                      <div className="item-subtitle">02 Cleaner</div>
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
