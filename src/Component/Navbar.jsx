import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="header">
      <div id="header-topbar" className="bg-assh-2 pd-y-10">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6">
              <div className="header-topbar-layout2">
                <div className="header-top-left">
                  <div className="item-location">
                    <i className="fas fa-map-marker-alt" />
                    59 Street, B4 Appartment, Australia
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-end">
              <div className="header-topbar-layout2">
                <ul className="header-top-right">
                  <li className="social-icon">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a href="#">
                      <i className="fab fa-google-plus-g" />
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest" />
                    </a>
                    <a href="#">
                      <i className="fab fa-snapchat-ghost" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="header-middlebar" className="header-middlebar-layout1">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-3">
              <div className="logo-area">
                <a href="index.html" className="temp-logo">
                  <img
                    src="img/logo-dark2.png"
                    alt="logo"
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-9 d-flex justify-content-end">
              <div className="middlebar-content">
                <ul>
                  <li>
                    <div className="item-icon">
                      <i className="far fa-clock" />
                    </div>
                    <div className="item-content">
                      <div className="item-title">Opening Hours</div>
                      <div className="item-subtitle">
                        Mon - Fri: 09.00am - 10.00pm
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="item-icon">
                      <i className="flaticon-message" />
                    </div>
                    <div className="item-content">
                      <div className="item-title">E-mail Us</div>
                      <div className="item-subtitle">info@cleanix.com</div>
                    </div>
                  </li>
                  <li>
                    <div className="item-icon">
                      <i className="flaticon-phone-call" />
                    </div>
                    <div className="item-content">
                      <div className="item-title">Quick Contact</div>
                      <div className="item-subtitle">+ 985 8844 000</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="rt-sticky-placeholder" />
      <div id="header-menu" className="header-menu menu-layout3">
        <div className="container">
          <div className="bg-Primary border-radius-4 pl-4">
            <div className="row d-flex align-items-center">
              <div className="col-lg-9 d-flex justify-content-start position-static">
                <nav id="dropdown" className="template-main-menu">
                  <ul>
                    <li>
                      <a href="#">Home</a>
                      <ul className="dropdown-menu-col-1">
                        <li>
                          <a href="index.html">Home Page 1</a>
                        </li>
                        <li>
                          <a href="index2.html">Home Page 2</a>
                        </li>
                        <li>
                          <a href="index3.html">Home Page 3</a>
                        </li>
                        <li>
                          <a href="index4.html">Home Page 4</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">About</a>
                      <ul className="dropdown-menu-col-1">
                        <li>
                          <a href="about1.html">About 1</a>
                        </li>
                        <li>
                          <a href="about2.html">About 2</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Services</a>
                      <ul className="dropdown-menu-col-1">
                        <li>
                          <a href="service1.html">Services 1</a>
                        </li>
                        <li>
                          <a href="service2.html">Services 2</a>
                        </li>
                        <li>
                          <a href="single-service1.html">Single Services 1</a>
                        </li>
                        <li>
                          <a href="single-service2.html">Single Services 2</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                      <ul className="dropdown-menu-col-1">
                        <li>
                          <a href="blog1.html">Blog 1</a>
                        </li>
                        <li>
                          <a href="blog2.html">Blog 2</a>
                        </li>
                        <li>
                          <a href="single-blog1.html">Blog Details</a>
                        </li>
                      </ul>
                    </li>
                    <li className="position-static hide-on-mobile-menu">
                      <a href="#">Pages</a>
                      <div className="template-mega-menu">
                        <div className="container">
                          <div className="bg-white mega-menu-small">
                            <div className="row">
                              <div className="col-3">
                                <div className="menu-ctg-title">Pages</div>
                                <ul className="sub-menu">
                                  <li>
                                    <a href="project1.html">
                                      <i className="fas fa-handshake" />
                                      Project
                                    </a>
                                  </li>
                                  <li>
                                    <a href="single-project1.html">
                                      <i className="fas fa-handshake" />
                                      Project Details
                                    </a>
                                  </li>
                                  <li>
                                    <a href="pricing-table.html">
                                      <i className="far fa-money-bill-alt" />
                                      Pricing Table
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-3">
                                <div className="menu-ctg-title">Pages</div>
                                <ul className="sub-menu">
                                  <li>
                                    <a href="team1.html">
                                      <i className="fas fa-user-tie" />
                                      Team 1
                                    </a>
                                  </li>
                                  <li>
                                    <a href="team2.html">
                                      <i className="fas fa-user-tie" />
                                      Team 2
                                    </a>
                                  </li>
                                  <li>
                                    <a href="single-team.html">
                                      <i className="fas fa-user-tie" />
                                      Single Team
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-3">
                                <div className="menu-ctg-title">Pages</div>
                                <ul className="sub-menu">
                                  <li>
                                    <a href="shop.html">
                                      <i className="fas fa-cart-plus" />
                                      Shop
                                    </a>
                                  </li>
                                  <li>
                                    <a href="single-product.html">
                                      <i className="fas fa-cart-plus" />
                                      Product Details
                                    </a>
                                  </li>
                                  <li>
                                    <a href="calculate-form.html">
                                      <i className="fas fa-calculator" />
                                      Calculation Form
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-3">
                                <div className="menu-ctg-title">Pages</div>
                                <ul className="sub-menu">
                                  <li>
                                    <a href="faq.html">
                                      <i className="fas fa-chalkboard-teacher" />
                                      Faq Page
                                    </a>
                                  </li>
                                  <li>
                                    <a href="404.html">
                                      <i className="fas fa-exclamation-triangle" />
                                      404 Error
                                    </a>
                                  </li>
                                  <li>
                                    <a href="coming-soon.html">
                                      <i className="fas fa-spinner" />
                                      Coming Soon
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="hide-on-desktop-menu">
                      <a href="#">Pages</a>
                      <ul>
                        <li>
                          <a href="about1.html">About</a>
                        </li>
                        <li>
                          <a href="service1.html">Services</a>
                        </li>
                        <li>
                          <a href="project1.html">Project</a>
                        </li>
                        <li>
                          <a href="404.html">404 Error</a>
                        </li>
                        <li>
                          <a href="contact.html">Contact</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-lg-3 d-flex justify-content-end">
                <div className="header-action-layout1">
                  <ul>
                    <li className="header-action-btn">
                      <a href="#" className="item-btn">
                        <i className="fas fa-bell" />
                        Get A Quote
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
