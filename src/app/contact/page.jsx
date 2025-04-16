import React from "react";
import Banner from "../../Component/Banner";

const Contact = () => {
  return (
    <>
      <Banner />
      <section className="section-padding-12-10">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="contact-box-layout1">
                <div className="google-map-area">
                  <div
                    id="googleMap"
                    className="google-map"
                    style={{ width: "100%", height: 420, borderRadius: 4 }}
                  />
                </div>
                <div className="contact-info">
                  <div className="media media-none-lg media-none--sm">
                    <div className="item-icon">
                      <i className="flaticon-call-answer" />
                    </div>
                    <div className="media-body space-md">
                      <h4>Phone:</h4>
                      <ul>
                        <li>+8123 456 788 99,</li>
                        <li>+8123 (456) 788 99</li>
                      </ul>
                    </div>
                  </div>
                  <div className="media media-none-lg media-none--sm">
                    <div className="item-icon">
                      <i className="flaticon-message" />
                    </div>
                    <div className="media-body space-md">
                      <h4>E-mail:</h4>
                      <ul>
                        <li>info@roofing.com</li>
                        <li>info@roofing.com</li>
                      </ul>
                    </div>
                  </div>
                  <div className="media media-none-lg media-none--sm">
                    <div className="item-icon">
                      <i className="flaticon-maps-and-flags" />
                    </div>
                    <div className="media-body space-md">
                      <h4>Location:</h4>
                      <ul>
                        <li>51 Street, Newyork City, NYPD</li>
                        <li>18 Street, Newyork City, NYPD</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 sidebar-break-md sidebar-widget-area">
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
