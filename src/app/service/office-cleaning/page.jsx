import Banner from "@/Component/Banner";
import FAQ from "@/Component/FAQ";
import React from "react";

const SingleService = () => {
  return (
    <div>
      <Banner
        title={"Kitchen Cleaning Service"}
        path={"Services > Kitchen Cleaning"}
      />
      <section className="section-padding-12">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 order-lg-2">
              <div className="single-service-box-layout1">
                <h2 className="service-title">Kitchen Cleaning Service </h2>
                <p>
                  Ahen an unknown printer took a galley of type and scrambled it
                  to make a type specimen book areIt hasear survived not only
                  five centuries, but also the leap into electronic typesetting,
                  remaining essentiall yellow aw unchangedh the release of
                  Letraset sheets containing.Ahen an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                </p>
                <div className="main-img">
                  <img src="/img/service/officeClean.jpg" alt="Kitchen Cleaning" />
                </div>
                <div className="service-content">
                  <p>
                    Ahen an unknown printer took a galley of type and scrambled
                    it to make a type specimen book areIt hasear survived not
                    only five centuries, but also the leap into electronic
                    typesetting, remaining essentiall yellow aw unchangedh the
                    release of Letraset sheets containing and more recently with
                    desktop.Ahen an unknown printer took a galley of type and
                    scrambled it to make a type.
                  </p>
                  <div className="why-choose">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="media">
                          <div className="item-icon">
                            <i className="far fa-check-circle" />
                          </div>
                          <div className="media-body space-md">
                            <h3 className="item-title">Quality We Ensure</h3>
                            <p>
                              Aorem ipsum dolor sit amet consectetur adipisicing
                              elit sed doeiusmod tempor incididunt ut labore et
                              dolore.
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
                            <h3 className="item-title">Experienced Workers</h3>
                            <p>
                              Aorem ipsum dolor sit amet consectetur adipisicing
                              elit sed doeiusmod tempor incididunt ut labore et
                              dolore.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>
                    Ahen an unknown printer took a galley of type and scrambled
                    it to make a type specimen book areIt hasear survived not
                    only five centuries, but also the leap into electronic
                    typesetting, remaining essentiall yellow aw unchangedh the
                    release o type.Ahen an unknown printer took a galley of type
                    and scrambled it to make a type specimen book areIt hasear
                    survived not only five centuries.
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
                            Experienced People can help you more.
                          </h3>
                          <p>
                            Ahen an unknown printer took a galley of type andty
                            scrambled it to make a type specimen book areIter
                            hasear survived not only five centuries, but also
                            the leap into electronic type.
                          </p>
                          <ul className="item-feature">
                            <li>Gas Silendar Clean</li>
                            <li>Frozen Pipe Clean</li>
                            <li>Water Pipe Clean</li>
                            <li>Toilet Clean</li>
                            <li>Toilet Clean</li>
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
              {/* <div className="widget widget-download">
                <div className="heading-layout4">
                  <h4>Download Now</h4>
                </div>
                <div className="download-list">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="far fa-file-pdf text-lightred" />
                        Download Pdf File
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="far fa-file-word text-lightprimary" />
                        Download Doc File
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube text-red" />
                        Video Download
                      </a>
                    </li>
                  </ul>
                </div>
              </div> */}
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
                        name="phone"
                        data-error="Phone field is required"
                        required=""
                      />
                      <div className="help-block with-errors" />
                    </div>
                    <div className="col-12 form-group">
                      <div className="form-icon">
                        <i className="far fa-comments" />
                      </div>
                      <textarea
                        placeholder="Address"
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
