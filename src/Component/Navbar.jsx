import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="header">
      <div id="header-topbar" className="bg-Primary">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6">
              <div className="header-topbar-layout1">
                <ul className="header-top-left">
                  <li className="social-icon">
                    <Link href="https://facebook.com">
                      <i className="fab fa-facebook-f" />
                    </Link>
                    <Link href="https://twitter.com">
                      <i className="fab fa-twitter" />
                    </Link>
                    <Link href="https://plus.google.com">
                      <i className="fab fa-google-plus-g" />
                    </Link>
                    <Link href="https://pinterest.com">
                      <i className="fab fa-pinterest" />
                    </Link>
                    <Link href="https://snapchat.com">
                      <i className="fab fa-snapchat-ghost" />
                    </Link>
                  </li>
                  <li className="opening-hour">
                    <i className="far fa-clock" />
                    Mon - Fri: 09.00am - 10.00 pm
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-end">
              <div className="header-topbar-layout1">
                <div className="header-top-right">
                  <Link href="/quote" className="header-top-btn">
                    <i className="fas fa-bell" />
                    Get A Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="rt-sticky-placeholder" />
      <div id="header-menu" className="header-menu menu-layout1">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-xl-2 col-lg-2">
              <div className="logo-area">
                <Link href="/" className="temp-logo">
                  <img
                    src="img/logo-dark.png"
                    alt="logo"
                    className="img-fluid"
                  />
                </Link>
              </div>
            </div>
            <div className="col-lg-7 d-flex justify-content-end position-static">
              <nav id="dropdown" className="template-main-menu">
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/services">Services</Link>
                    <ul className="dropdown-menu-col-1">
                      <li>
                        <Link href="/service">Service</Link>
                      </li>
                      <li>
                        <Link href="/single-service">Single Services</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/blog">Blog</Link>
                    <ul className="dropdown-menu-col-1">
                      <li>
                        <Link href="/blog">Blog</Link>
                      </li>
                      <li>
                        <Link href="/single-blog">Blog Details</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="position-static hide-on-mobile-menu">
                    <Link href="/pages">Pages</Link>
                    <div className="template-mega-menu">
                      <div className="container">
                        <div className="row">
                          <div className="col-3">
                            <div className="menu-ctg-title">Pages</div>
                            <ul className="sub-menu">
                              <li>
                                <Link href="/project1">
                                  <i className="fas fa-handshake" />
                                  Project
                                </Link>
                              </li>
                              <li>
                                <Link href="/single-project1">
                                  <i className="fas fa-handshake" />
                                  Project Details
                                </Link>
                              </li>
                              <li>
                                <Link href="/pricing-table">
                                  <i className="far fa-money-bill-alt" />
                                  Pricing Table
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="col-3">
                            <div className="menu-ctg-title">Pages</div>
                            <ul className="sub-menu">
                              <li>
                                <Link href="/team1">
                                  <i className="fas fa-user-tie" />
                                  Team 1
                                </Link>
                              </li>
                              <li>
                                <Link href="/team2">
                                  <i className="fas fa-user-tie" />
                                  Team 2
                                </Link>
                              </li>
                              <li>
                                <Link href="/single-team">
                                  <i className="fas fa-user-tie" />
                                  Single Team
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="col-3">
                            <div className="menu-ctg-title">Pages</div>
                            <ul className="sub-menu">
                              <li>
                                <Link href="/shop">
                                  <i className="fas fa-cart-plus" />
                                  Shop
                                </Link>
                              </li>
                              <li>
                                <Link href="/single-product">
                                  <i className="fas fa-cart-plus" />
                                  Product Details
                                </Link>
                              </li>
                              <li>
                                <Link href="/calculate-form">
                                  <i className="fas fa-calculator" />
                                  Calculation Form
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="col-3">
                            <div className="menu-ctg-title">Pages</div>
                            <ul className="sub-menu">
                              <li>
                                <Link href="/faq">
                                  <i className="fas fa-chalkboard-teacher" />
                                  Faq Page
                                </Link>
                              </li>
                              <li>
                                <Link href="/404">
                                  <i className="fas fa-exclamation-triangle" />
                                  404 Error
                                </Link>
                              </li>
                              <li>
                                <Link href="/coming-soon">
                                  <i className="fas fa-spinner" />
                                  Coming Soon
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="hide-on-desktop-menu">
                    <Link href="/pages">Pages</Link>
                    <ul>
                      <li>
                        <Link href="/about1">About</Link>
                      </li>
                      <li>
                        <Link href="/service1">Services</Link>
                      </li>
                      <li>
                        <Link href="/project1">Project</Link>
                      </li>
                      <li>
                        <Link href="/404">404 Error</Link>
                      </li>
                      <li>
                        <Link href="/contact">Contact</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-3 d-flex justify-content-end">
              <div className="header-action-layout1">
                <ul>
                  <li className="header-action-number">
                    <div className="item-icon">
                      <i className="flaticon-phone-call" />
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

export default Navbar;
