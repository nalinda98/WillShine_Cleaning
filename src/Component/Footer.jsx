import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <footer className="footer-wrap-layout1 section-shape1">
        <div className="container">
          <div className="footer-top-box">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="footer-box-layout1">
                  <div className="footer-title">
                    <h4>FEATURES</h4>
                  </div>
                  <div className="footer-menu-box">
                    <ul className="footer-menu-list">
                      <li>
                        <a href="#">Residential Services</a>
                      </li>
                      <li>
                        <a href="#">Commercial Services</a>
                      </li>
                      <li>
                        <a href="#">Vechile Wash</a>
                      </li>
                      <li>
                        <a href="#">Londry Facilities</a>
                      </li>
                      <li>
                        <a href="#">Carpet Removal</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="footer-box-layout1">
                  <div className="footer-title">
                    <h4>COMPANY</h4>
                  </div>
                  <div className="footer-menu-box">
                    <ul className="footer-menu-list">
                      <li>
                        <a href="about1.html">About Us</a>
                      </li>
                      <li>
                        <a href="#">Testimonials</a>
                      </li>
                      <li>
                        <a href="#">Terms</a>
                      </li>
                      <li>
                        <a href="#">Media Kit</a>
                      </li>
                      <li>
                        <a href="#">Sitemap</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="footer-box-layout1">
                  <div className="footer-title">
                    <h4>QUICK LINKS</h4>
                  </div>
                  <div className="footer-menu-box">
                    <ul className="footer-menu-list">
                      <li>
                        <a href="#">Features</a>
                      </li>
                      <li>
                        <a href="#">Pricing</a>
                      </li>
                      <li>
                        <a href="#">Partners</a>
                      </li>
                      <li>
                        <a href="#">Cloud Affiliate Program</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="footer-box-layout1">
                  <div className="footer-title">
                    <h4>AFFILIATES</h4>
                  </div>
                  <div className="footer-menu-box">
                    <ul className="footer-menu-list">
                      <li>
                        <a href="#">Become An Affiliate</a>
                      </li>
                      <li>
                        <a href="#">Affiliate Portal</a>
                      </li>
                    </ul>
                    {/* <a href="contact.html" className="contact-btn">
                      <i className="far fa-envelope"></i>HAVE ANY QUESTION
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom-box">
            <div className="row">
              <div className="col-md-6">
                <div className="copyright">
                  All rights reserved | This website is Designed & Developed by <a style={{
                    color:"white",
                    fontWeight:"bold"
                  }} href="https://buildzoneit.com/">BuildZone IT</a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="footer-bottom-menu">
                  <ul>
                    {/* <li>
                      <a href="#">Sitemap</a>
                    </li> */}
                    <li>
                      <a href="#">Terms of Service</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
