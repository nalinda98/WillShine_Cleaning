import Image from "next/image";
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
                    <a href="tel:0433691812">
                      <i className="fas fa-envelope" />{" "}
                    </a>
                    <a href="mailto:blossompropertyservices@gmail.com">
                      <i className="fas fa-phone" />
                      {/* blossompropertyservices@gmail.com */}
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
                  <div>
                    <Image
                      fill={true}
                      src="/img/logo-dark2.png"
                      alt="logo"
                      className="img-fluid"
                    />
                  </div>
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
                        Mon - Fri: 09.00am - 5.00pm
                        <br />
                        Saturday: 10.00am - 6.00pm
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="item-icon">
                      <i className="flaticon-message" />
                    </div>
                    <div className="item-content">
                      <div className="item-title">E-mail Us</div>
                      <div className="item-subtitle">info@blossom.com</div>
                    </div>
                  </li>
                  <li>
                    <div className="item-icon">
                      <i className="flaticon-phone-call" />
                    </div>
                    <div className="item-content">
                      <div className="item-title">Quick Contact</div>
                      <div className="item-subtitle">043 369 1812</div>
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
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/about">About</Link>
                    </li>
                    <li>
                      <Link href="/service">Services</Link>
                      <ul className="dropdown-menu-col-1">
                        <li>
                          <Link href="/service/office-cleaning">
                            Office Cleaning
                          </Link>
                          <Link href="/service/stripping-and-sealing">
                            Stripping & Sealing
                          </Link>
                          <Link href="/service/carpet-cleaning">
                            Carpet Cleaning
                          </Link>
                          <Link href="/service/pressure-washing">
                            Pressure Washing
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/blog">Blogs</Link>
                      {/* <ul className="dropdown-menu-col-1">
                        <li>
                          <a href="blog1.html">Blog 1</a>
                        </li>
                        <li>
                          <a href="blog2.html">Blog 2</a>
                        </li>
                      </ul> */}
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
                    <li className="header-action-btn">
                      <Link href="#" className="item-btn">
                        <i className="fas fa-bell" />
                        Get A Quote
                      </Link>
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
