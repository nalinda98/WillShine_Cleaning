"use client";

import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "emailjs-com";

const EstimateForm = () => {
  const form = useRef();
  const [captcha, setCaptcha] = useState(null);

  const onChange = (value) => {
    setCaptcha(value);
  };

  const onExpired = () => {
    setCaptcha(null);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!captcha) {
      alert("Please complete the reCAPTCHA");
      return;
    }

    emailjs
      .sendForm(
        "service_gva54x5", // your service ID
        "template_2jmf2ms", // your template ID
        form.current,
        "rtOHcdoMrBTsp_x3V" // your public key
      )
      .then(
        () => {
          alert("Estimate sent successfully!");
          e.target.reset();
          setCaptcha(null);
        },
        (error) => {
          console.error(error.text);
          alert("Failed to send estimate. Please try again later.");
        }
      );
  };

  return (
    <div className="col-xl-6 col-lg-6 col-12">
      <div className="about-box-layout2">
        <h3 className="item-title">Get a Customized Cleaning Estimate</h3>
        <div className="contact-form-box" id="contact-form">
          <form ref={form} onSubmit={sendEmail} className="contact-form-box">
            <div className="row gutters-5">
              <div className="col-12 form-group">
                <select name="propertyType" required className="form-control">
                  <option value="">Select Property Type</option>
                  <option value="residential">Office Cleaning</option>
                  <option value="commercial">Stripping and Sealing</option>
                  <option value="plot">Carpet Cleaning</option>
                  <option value="apartment">Pressure Washing</option>
                </select>
              </div>

              <div className="col-md-6 col-12 form-group">
                <select name="propertyCategory" required className="form-control">
                  <option value="">Type of Property</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="plot">Plot</option>
                  <option value="apartment">Apartment</option>
                </select>
              </div>

              <div className="col-md-6 col-12 form-group">
                <select name="frequency" required className="form-control">
                  <option value="">Cleaning Frequency</option>
                  <option value="one-time">One-time</option>
                  <option value="weekly">Weekly</option>
                  <option value="bi-weekly">Bi-weekly</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>

              <div className="col-md-6 col-12 form-group">
                <input
                  type="text"
                  name="name"
                  required
                  className="form-control"
                  placeholder="Full Name"
                />
              </div>

              <div className="col-md-6 col-12 form-group">
                <input
                  type="text"
                  name="phone"
                  required
                  className="form-control"
                  placeholder="Phone Number"
                />
              </div>

              <div className="col-12 form-group">
                <input
                  type="email"
                  name="email"
                  required
                  className="form-control"
                  placeholder="E-mail Address"
                />
              </div>

              <div className="col-12 form-group">
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="form-control"
                  placeholder="Additional Details"
                />
              </div>

              <div className="col-12 form-group">
                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                  onChange={onChange}
                  onExpired={onExpired}
                />
              </div>

              <div className="col-12 form-group">
                <button
                  type="submit"
                  className="fw-btn-fill bg-accent text-primarytext"
                  style={{ width: "100%" }}
                >
                  Get My Estimate
                </button>
              </div>
            </div>
            <div className="form-response" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default EstimateForm;
