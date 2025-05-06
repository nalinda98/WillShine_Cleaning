import Banner from "@/Component/Banner";
import FAQ from "@/Component/FAQ";
import React from "react";

const SingleService = () => {
  return (
    <div>
      <Banner title={"Strip & Seal Service"} path={"Services > Strip & Seal"} />
      <section className="section-padding-12">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 order-lg-1">
              <div className="single-service-box-layout1">
                <h2 className="service-title">Strip & Seal Service</h2>
                <p>
                  Strip & seal is the most effective method to revive your tile,
                  marble, and vinyl floors. Over time, heavy traffic and
                  continuous use can wear down any floor, causing it to lose its
                  original condition. Without proper treatment, this
                  deterioration could lead to costly replacements. However,
                  periodic strip and seal processes can maintain your floors’
                  original condition for many years.
                </p>
                <div className="main-img">
                  <img
                    src="/img/service/stripping.webp"
                    alt="Kitchen Cleaning"
                  />
                </div>
                <div className="service-content">
                  <p>
                    In simple terms, the process involves stripping away layers
                    of grime, cleaning film, or worn sealant from your flooring
                    and resealing the surface. Depending on your floor’s
                    condition and the last time it was treated, the process may
                    vary. If your floors haven’t been stripped and sealed in
                    over two years, they may require special attention,
                    including removing multiple layers of old sealant. We offer
                    instant consultations to assess your floor and determine the
                    necessary treatment.
                  </p>
                  <div className="why-choose">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="media">
                          <div className="item-icon">
                            <i className="far fa-check-circle" />
                          </div>
                          <div className="media-body space-md">
                            <h3 className="item-title">Restore Floor Beauty</h3>
                            <p>
                              Our strip and seal service brings your floors back
                              to life, restoring their original shine and
                              extending their lifespan with professional care.
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
                            <h3 className="item-title">Tailored Treatments</h3>
                            <p>
                              Every floor is unique. We assess and customize our
                              strip & seal approach based on the specific
                              material and condition of your floors.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>
                    Maintaining your floors through strip & seal is a
                    cost-effective alternative to full replacements. With our
                    professional care, your floors will continue to impress
                    guests and staff alike.
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
                            Why Strip & Seal Matters
                          </h3>
                          <p>
                            Strip and seal isn’t just about looks — it protects
                            your investment. Regular treatment prevents
                            long-term wear and enhances durability, keeping your
                            floors in peak condition year after year.
                          </p>
                          <ul className="item-feature">
                            <li>Revives worn-out floors</li>
                            <li>Protects against future damage</li>
                            <li>Cost-effective alternative to replacement</li>
                            <li>Enhances overall cleanliness and hygiene</li>
                            <li>Professional-grade materials and techniques</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <FAQ />
                </div>
              </div>
            </div>
            <div className="col-lg-4 order-lg-2 sidebar-break-md sidebar-widget-area">
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
