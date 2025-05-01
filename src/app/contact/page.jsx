"use client";

import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Banner from "../../Component/Banner";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
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
        "service_gva54x5", // Replace with your actual service ID
        "template_c6fun0t", // Replace with your actual template ID
        form.current,
        "rtOHcdoMrBTsp_x3V" // Replace with your actual public key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          e.target.reset();
          setCaptcha(null); // Reset captcha after success
        },
        (error) => {
          alert("Failed to send message. Please try again later.");
          console.error(error.text);
        }
      );
  };

  return (
    <>
      <Banner title={"Contact Us"} path={"Contact"} />
      <section className="section-padding-12-10">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {/* Map and Contact Info */}
              <div className="contact-box-layout1">
                <div className="google-map-area">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7876773206926!2d79.84965516585271!3d6.915969728264701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2590063a37d6f%3A0x58a1ca8eafe50533!2sBuildZone%20IT!5e0!3m2!1sen!2slk!4v1702493493184!5m2!1sen!2slk"
                    style={{ border: 0, width: "100%", height: "420px" }}
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="contact-info">
                  <div className="media media-none-lg media-none--sm">
                    <div className="item-icon">
                      <i className="flaticon-call-answer" />
                    </div>
                    <div className="media-body space-md">
                      <h4>Phone:</h4>
                      <ul>
                        <li>0433 691 812</li>
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
                        <li>info@blossom.com</li>
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
                <form
                  className="contact-form-box"
                  ref={form}
                  onSubmit={sendEmail}
                >
                  <div className="row">
                    <div className="col-12 form-group">
                      <div className="form-icon">
                        <i className="fas fa-user" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="col-12 form-group">
                      <div className="form-icon">
                        <i className="far fa-envelope" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        placeholder="E-mail Address"
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="col-12 form-group">
                      <div className="form-icon">
                        <i className="fas fa-phone-volume" />
                      </div>
                      <input
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="col-12 form-group">
                      <div className="form-icon">
                        <i className="fas fa-question" />
                      </div>
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="col-12 form-group">
                      <div className="form-icon">
                        <i className="far fa-comments" />
                      </div>
                      <textarea
                        name="message"
                        placeholder="Message"
                        className="textarea form-control"
                        rows={4}
                        required
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
