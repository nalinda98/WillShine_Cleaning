"use client";

import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div>
      <footer className="footer-wrap-layout1 section-shape1">
        <div className="container">
          <div className="footer-top-box">
            <div className="row">
              {/* Features Section */}
              <div className="col-lg-4 col-sm-6">
                <div className="footer-box-layout1">
                  <div className="footer-title">
                    <h4>FEATURES</h4>
                  </div>
                  <ul className="footer-menu-list">
                    <li>
                      <a href="#">Residential Services</a>
                    </li>
                    <li>
                      <a href="#">Commercial Services</a>
                    </li>
                    <li>
                      <a href="#">Vehicle Wash</a>
                    </li>
                    <li>
                      <a href="#">Laundry Facilities</a>
                    </li>
                    <li>
                      <a href="#">Carpet Removal</a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Company Section */}
              <div className="col-lg-4 col-sm-6">
                <div className="footer-box-layout1">
                  <div className="footer-title">
                    <h4>Services</h4>
                  </div>
                  <ul className="footer-menu-list">
                    <li>
                      <a href="about1.html">Office Cleaning</a>
                    </li>
                    <li>
                      <a href="#">Striping & Sealing</a>
                    </li>
                    <li>
                      <a href="#">Carpet Cleaning</a>
                    </li>
                    <li>
                      <a href="#">Preasure Washing</a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Quick Links Section */}
              <div className="col-lg-4 col-sm-6">
                <div className="footer-box-layout1">
                  <div className="footer-title">
                    <h4>QUICK LINKS</h4>
                  </div>
                  <ul className="footer-menu-list">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/about">About Us</a>
                    </li>
                    <li>
                      <a href="/blog">Blogs</a>
                    </li>
                    <li>
                      <a href="/contact">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom-box">
            <div className="row">
              <div className="col-md-6">
                <div className="copyright">
                  © {currentYear} All rights reserved | Designed & Developed by
                  <a
                    href="https://buildzoneit.com/"
                    style={{ color: "white", fontWeight: "bold" }}
                  >
                    {" "}
                    BuildZone IT
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="footer-bottom-menu">
                  <ul>
                    <li>
                      <button className="btn btn-link p-0" onClick={handleShow}>
                        Privacy Policy
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      <Modal show={showModal} onHide={handleClose} size="lg" scrollable>
        <Modal.Header closeButton>
          <Modal.Title>Privacy Policy</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ whiteSpace: "pre-wrap" }}>
          <strong>Who we are</strong>
          {"\n"}Suggested text: Our website address is:
          https://blossompropertyservices.com.au.
          {"\n\n"}
          <strong>Comments</strong>
          {"\n"}Suggested text: When visitors leave comments on the site we
          collect the data shown in the comments form...
          {"\n\n"}
          <strong>Media</strong>
          {"\n"}Suggested text: If you upload images to the website, you should
          avoid uploading images with embedded location data...
          {"\n\n"}
          <strong>Cookies</strong>
          {"\n"}Suggested text: If you leave a comment on our site you may
          opt-in to saving your name, email...
          {"\n\n"}
          <strong>Embedded content from other websites</strong>
          {"\n"}Suggested text: Articles on this site may include embedded
          content...
          {"\n\n"}
          <strong>Who we share your data with</strong>
          {"\n"}Suggested text: If you request a password reset, your IP address
          will be included...
          {"\n\n"}
          <strong>How long we retain your data</strong>
          {"\n"}Suggested text: If you leave a comment, the comment and its
          metadata are retained indefinitely...
          {"\n\n"}
          <strong>What rights you have over your data</strong>
          {"\n"}Suggested text: If you have an account on this site, or have
          left comments...
          {"\n\n"}
          <strong>Where your data is sent</strong>
          {"\n"}Suggested text: Visitor comments may be checked through an
          automated spam detection service.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Footer;
