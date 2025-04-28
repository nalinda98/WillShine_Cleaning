"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const placeholderRef = useRef(null);
  const menuRef = useRef(null);
  const topbarRef = useRef(null);
  const middlebarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!menuRef.current || !placeholderRef.current) return;

      const topbarHeight = topbarRef.current?.offsetHeight || 0;
      const middlebarHeight = middlebarRef.current?.offsetHeight || 0;
      const targetScroll = topbarHeight + middlebarHeight;
      const scrollY = window.scrollY;

      if (scrollY > targetScroll) {
        if (!isSticky) setIsSticky(true);
        placeholderRef.current.style.height = `${menuRef.current.offsetHeight}px`;
      } else {
        if (isSticky) setIsSticky(false);
        placeholderRef.current.style.height = "0px";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isSticky]);
  return (
    <header className="header">
      <div id="header-topbar" ref={topbarRef} className="bg-assh-2 pd-y-10">
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
                    <a href="https://www.facebook.com/blossompropertyservice">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="https://www.instagram.com/blossompropertyservices/">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="https://www.linkedin.com/company/blossom-property-services/">
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a href="tel:0433691812">
                      <i className="fas fa-envelope" />{" "}
                    </a>
                    <a href="mailto:blossompropertyservices@gmail.com">
                      <i className="fas fa-phone" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="header-middlebar"
        ref={middlebarRef}
        className="header-middlebar-layout1"
      >
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-3">
              <div className="logo-area">
                <a href="index.html" className="temp-logo">
                  <img
                    // fill={true}
                    src="/img/logo-dark2.png"
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
                        Mon - Fri: 09.00am - 5.00pm
                        {/* <br />
                        Saturday: 10.00am - 6.00pm */}
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
      <div id="rt-sticky-placeholder" ref={placeholderRef} />
      <div
        id="header-menu"
        ref={menuRef}
        className={`header-menu menu-layout3 ${isSticky ? "rt-sticky" : ""}`}
      >
        <div className="container">
          <div className="bg-Primary border-radius-4 pl-4">
            <div className="row d-flex align-items-center">
              <div className="col-lg-9 d-flex justify-content-start position-static">
                <nav id="dropdown" className="template-main-menu">
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/about">About</a>
                    </li>
                    <li>
                      <a href="/service/office-cleaning">Office Cleaning</a>
                    </li>
                    <li>
                      <a href="/service">Services</a>
                      <ul className="dropdown-menu-col-1">
                        <li>
                          <a href="/service/office-cleaning">Office Cleaning</a>
                          <a href="/service/stripping-and-sealing">
                            Stripping & Sealing
                          </a>
                          <a href="/service/carpet-cleaning">Carpet Cleaning</a>
                          <a href="/service/pressure-washing">
                            Pressure Washing
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/blog">Blogs</a>
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
              <div className="col-lg-3 d-flex justify-content-end align-items-center">
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
