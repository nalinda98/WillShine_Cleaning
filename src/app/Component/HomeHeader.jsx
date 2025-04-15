import React from "react";

const HomeHeader = () => {
  return (
    <header className="header">
      <div id="header-topbar" className="bg-Primary">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6">
              <div className="header-topbar-layout1">
                <ul className="header-top-left">
                  <li className="social-icon">
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-google-plus-g"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-snapchat-ghost"></i>
                    </a>
                  </li>
                  <li className="opening-hour">
                    <i className="far fa-clock"></i>Mon - Fri: 09.00am - 10.00
                    pm
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-end">
              <div className="header-topbar-layout1">
                <div className="header-top-right">
                  <a href="#" className="header-top-btn">
                    <i className="fas fa-bell"></i>Get A Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="rt-sticky-placeholder"></div>
      <div id="header-menu" className="header-menu menu-layout1">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-xl-2 col-lg-2">
              <div className="logo-area">
                <a href="index.html" className="temp-logo">
                  <img
                    src="img/logo-dark.png"
                    alt="logo"
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-7 d-flex justify-content-end position-static">
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
                        <div className="row">
                          <div className="col-3">
                            <div className="menu-ctg-title">Pages</div>
                            <ul className="sub-menu">
                              <li>
                                <a href="project1.html">
                                  <i className="fas fa-handshake"></i>
                                  Project
                                </a>
                              </li>
                              <li>
                                <a href="single-project1.html">
                                  <i className="fas fa-handshake"></i>
                                  Project Details
                                </a>
                              </li>
                              <li>
                                <a href="pricing-table.html">
                                  <i className="far fa-money-bill-alt"></i>
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
                                  <i className="fas fa-user-tie"></i>Team 1
                                </a>
                              </li>
                              <li>
                                <a href="team2.html">
                                  <i className="fas fa-user-tie"></i>Team 2
                                </a>
                              </li>
                              <li>
                                <a href="single-team.html">
                                  <i className="fas fa-user-tie"></i>
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
                                  <i className="fas fa-cart-plus"></i>Shop
                                </a>
                              </li>
                              <li>
                                <a href="single-product.html">
                                  <i className="fas fa-cart-plus"></i>
                                  Product Details
                                </a>
                              </li>
                              <li>
                                <a href="calculate-form.html">
                                  <i className="fas fa-calculator"></i>
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
                                  <i className="fas fa-chalkboard-teacher"></i>
                                  Faq Page
                                </a>
                              </li>
                              <li>
                                <a href="404.html">
                                  <i className="fas fa-exclamation-triangle"></i>
                                  404 Error
                                </a>
                              </li>
                              <li>
                                <a href="coming-soon.html">
                                  <i className="fas fa-spinner"></i>Coming Soon
                                </a>
                              </li>
                            </ul>
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
                  <li className="header-action-number">
                    <div className="item-icon">
                      <i className="flaticon-phone-call"></i>
                    </div>
                    <div className="item-content">
                      <div className="item-title">Quick Contact :</div>
                      <div className="item-number">+ 985 8844 000</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
