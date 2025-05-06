import React from "react";

const Estimate = () => {
  return (
    <div id="estimate-section">
      <section className="section-padding-md-2 section-bubble">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-6 col-12">
              <div className="about-box-layout1">
                <h2 className="item-title">
                  Our Commitment is to Deliver Exceptional Cleanliness
                </h2>
                <div className="item-subtitle">
                  We understand the importance of a pristine space, and we aim
                  to exceed your expectations every time.
                </div>
                <p>
                  At our company, we pride ourselves on providing services that
                  not only meet but surpass customer expectations. Whether it’s
                  residential or commercial, we believe every cleaning should be
                  thorough and leave a lasting impact. With our team, you can
                  always count on spotless results.
                </p>
                <div className="list-item">
                  <ul>
                    <li>
                      <h3>Customer-Centered Approach</h3>
                      <p>
                        We put our clients first, ensuring satisfaction through
                        customized cleaning solutions tailored to your needs.
                      </p>
                    </li>
                    <li>
                      <h3>Our Promise: Quality and Consistency</h3>
                      <p>
                        We are committed to providing consistent, top-quality
                        cleaning services, with a focus on detail and
                        reliability.
                      </p>
                    </li>
                    <li>
                      <h3>Flexible Cleaning Schedules</h3>
                      <p>
                        Whether it's a one-time service or regular upkeep, we
                        offer flexible cleaning schedules to fit your lifestyle.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 col-12">
              <div className="about-box-layout2">
                <h3 className="item-title">
                  Get a Customized Cleaning Estimate
                </h3>
                <div className="contact-form-box" id="contact-form">
                  <div className="row gutters-10">
                    <div className="col-12 form-group">
                      <select className="select2">
                        <option value={0}>Residential</option>
                        <option value={1}>Commercial</option>
                        <option value={2}>Plot</option>
                        <option value={3}>Apartment</option>
                      </select>
                    </div>
                    <div className="col-md-6 col-12 form-group">
                      <select className="select2">
                        <option value={0}>Type of Property</option>
                        <option value={1}>Residential</option>
                        <option value={2}>Commercial</option>
                        <option value={3}>Plot</option>
                        <option value={4}>Apartment</option>
                      </select>
                    </div>
                    <div className="col-md-6 col-12 form-group">
                      <select className="select2">
                        <option value={0}>Approximate Size (Sq. Ft.)</option>
                        <option value={1}>400</option>
                        <option value={2}>200</option>
                        <option value={3}>600</option>
                        <option value={4}>300</option>
                      </select>
                    </div>
                    <div className="col-md-6 col-12 form-group">
                      <select className="select2">
                        <option value={0}>Number of Bedrooms</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                      </select>
                    </div>
                    <div className="col-md-6 col-12 form-group">
                      <select className="select2">
                        <option value={0}>Number of Bathrooms</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                      </select>
                    </div>
                    <div className="col-md-6 col-12 form-group">
                      <select className="select2">
                        <option value={0}>Cleaning Frequency</option>
                        <option value={1}>One-time</option>
                        <option value={2}>Weekly</option>
                        <option value={3}>Bi-weekly</option>
                        <option value={4}>Monthly</option>
                      </select>
                    </div>
                    <div className="col-md-6 col-12 form-group">
                      <input
                        type="text"
                        placeholder="ZIP Code"
                        className="form-control"
                        name="zip"
                        data-error="ZIP Code field is required"
                        required=""
                      />
                      <div className="help-block with-errors" />
                    </div>
                    <div className="col-md-6 col-12 form-group datetime-picker">
                      <i className="far fa-calendar-alt" />
                      <input
                        type="text"
                        className="form-control rt-date"
                        placeholder="dd/mm/yy"
                        name="date"
                        id="form-date"
                        data-error="Date field is required"
                        required=""
                      />
                    </div>
                    <div className="col-md-6 col-12 form-group datetime-picker">
                      <i className="far fa-clock" />
                      <input
                        type="text"
                        className="form-control rt-time"
                        placeholder="Time"
                        name="time"
                        id="form-time"
                        data-error="Time field is required"
                        required=""
                      />
                    </div>
                    <div className="col-md-6 col-12 form-group">
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="form-control"
                        name="name"
                        data-error="Name field is required"
                        required=""
                      />
                      <div className="help-block with-errors" />
                    </div>
                    <div className="col-md-6 col-12 form-group">
                      <input
                        type="text"
                        placeholder="Phone Number"
                        className="form-control"
                        name="phone"
                        data-error="Phone field is required"
                        required=""
                      />
                      <div className="help-block with-errors" />
                    </div>
                    <div className="col-12 form-group">
                      <input
                        type="email"
                        placeholder="E-mail Address"
                        className="form-control"
                        name="email"
                        data-error="Email field is required"
                        required=""
                      />
                      <div className="help-block with-errors" />
                    </div>
                    <div className="col-12 form-group mg-b-20">
                      <textarea
                        placeholder="Additional Details"
                        className="textarea form-control"
                        name="message"
                        id="form-message"
                        rows={2}
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
                        Get My Estimate
                        <i className="fas fa-angle-right" />
                      </button>
                    </div>
                  </div>
                  <div className="form-response" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Estimate;
