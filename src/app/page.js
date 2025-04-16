import Head from "next/head";
import Script from "next/script";
import "./styles/css/style.css";
import "./styles/css/main.css";
import "./styles/css/bootstrap.min.css";
import "./styles/css/meanmenu.min.css";
import "./styles/css/fontawesome-all.min.css";
import "./styles/css/animate.min.css";
import "./styles/font/flaticon.css";
import "./styles/vendor/slider/css/nivo-slider.css";
import "./styles/vendor/OwlCarousel/owl.carousel.min.css";
import "./styles/vendor/OwlCarousel/owl.theme.default.min.css";
import "./styles/css/select2.min.css";
import "./styles/css/jquery.datetimepicker.css";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="description" content="" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="manifest" href="/site.webmanifest.json" />
      </Head>
      <div>
        <div id="wrapper" className="wrapper">
          {/* Add your site or application content here */}
          {/* Header Area Start Here */}
          <header className="header">
            <div id="header-topbar" className="bg-Primary">
              <div className="container">
                <div className="row d-flex align-items-center">
                  <div className="col-lg-6">
                    <div className="header-topbar-layout1">
                      <ul className="header-top-left">
                        <li className="social-icon">
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                          <a href="#">
                            <i className="fab fa-twitter" />
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
                        <a href="#" className="header-top-btn">
                          <i className="fas fa-bell" />
                          Get A Quote
                        </a>
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
                              <a href="single-service1.html">
                                Single Services 1
                              </a>
                            </li>
                            <li>
                              <a href="single-service2.html">
                                Single Services 2
                              </a>
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
          {/* Header Area End Here */}
          {/* Slider Area Start Here */}
          <div className="slider-area slider-layout1">
            <div className="bend niceties preview-1">
              <div id="ensign-nivoslider-4" className="slides">
                <img
                  src="img/slider/slide1-1.jpg"
                  alt="slider"
                  title="#slider-direction-1"
                />
                <img
                  src="img/slider/slide1-2.jpg"
                  alt="slider"
                  title="#slider-direction-2"
                />
                <img
                  src="img/slider/slide1-3.jpg"
                  alt="slider"
                  title="#slider-direction-3"
                />
              </div>
              <div id="slider-direction-1" className="t-cn slider-direction">
                <div className="slider-content s-tb slide-1">
                  <div className="text-left title-container s-tb-c">
                    <div className="container">
                      <div className="slider-sub-text">
                        The Best Cleaning Service Ever!
                      </div>
                      <h1 className="slider-big-text">Certified Company</h1>
                      <div className="slider-paragraph">
                        Our best-in-class WordPress solution, with additional
                        optimization to make running a WooCommerce online store
                        easy. Our prices are clear and straight forward so you
                        can.
                      </div>
                      <div className="slider-btn-area">
                        <a href="#" className="item-btn-fill">
                          Take Our Service
                          <i className="fas fa-angle-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="slider-direction-2" className="t-cn slider-direction">
                <div className="slider-content s-tb slide-2">
                  <div className="text-left title-container s-tb-c">
                    <div className="container">
                      <div className="slider-sub-text">
                        The Best Cleaning Service Ever!
                      </div>
                      <h1 className="slider-big-text">Certified Company</h1>
                      <div className="slider-paragraph">
                        Our best-in-class WordPress solution, with additional
                        optimization to make running a WooCommerce online store
                        easy. Our prices are clear and straight forward so you
                        can.
                      </div>
                      <div className="slider-btn-area">
                        <a href="#" className="item-btn-fill">
                          Take Our Service
                          <i className="fas fa-angle-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="slider-direction-3" className="t-cn slider-direction">
                <div className="slider-content s-tb slide-3">
                  <div className="text-left title-container s-tb-c">
                    <div className="container">
                      <div className="slider-sub-text">
                        The Best Cleaning Service Ever!
                      </div>
                      <h1 className="slider-big-text">Certified Company</h1>
                      <div className="slider-paragraph">
                        Our best-in-class WordPress solution, with additional
                        optimization to make running a WooCommerce online store
                        easy. Our prices are clear and straight forward so you
                        can.
                      </div>
                      <div className="slider-btn-area">
                        <a href="#" className="item-btn-fill">
                          Take Our Service
                          <i className="fas fa-angle-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Slider Area End Here */}
          {/* About Us Area Start Here */}
          <section className="section-bubble section-padding-md-2">
            <div className="container">
              <div className="row gutters-50 d-flex align-items-center">
                <div className="col-xl-7">
                  <div className="about-box-layout3">
                    <div className="item-icon shape1">
                      <img src="img/figure/icon-shape1.png" alt="shape" />
                    </div>
                    <div className="item-icon shape2">
                      <img src="img/figure/icon-shape2.png" alt="shape" />
                    </div>
                    <div className="item-icon shape3">
                      <img src="img/figure/icon-shape3.png" alt="shape" />
                    </div>
                    <div className="item-icon shape4">
                      <img src="img/figure/icon-shape4.png" alt="shape" />
                    </div>
                    <div className="item-img">
                      <img src="img/figure/figure5.png" alt="img" />
                    </div>
                  </div>
                </div>
                <div className="col-xl-5">
                  <div className="about-box-layout4">
                    <h2 className="item-title">
                      Making Your House <span>As Good As New</span>
                    </h2>
                    <p>
                      Spa isa newsimply dummy text of the printing and type
                      settingare industrLorem Ipsum has been the industry's
                      standard dummy text everty since the when an unknown
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially.
                    </p>
                    <div className="service-list">
                      <ul>
                        <li>Experienced Team</li>
                        <li>Keep the same cleaner for every visit</li>
                        <li>One-off, weekly or fortnightly visits</li>
                        <li>Book, manage &amp; pay online</li>
                      </ul>
                    </div>
                    <div className="action-area">
                      <a
                        href="#"
                        className="btn-fill-sm bg-accent text-primarytext btn-slide-hover"
                      >
                        Book a Service
                        <i className="fas fa-angle-right" />
                      </a>
                      <div className="phone-number">
                        <i className="flaticon-phone-call" />+ 985 8844 000
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* About Us Area End Here */}
          {/* Service Area Start Here */}
          <section
            className="section-padding-lg bg-common bg-aash"
            data-bg-image="img/figure/bg-shape1.png"
          >
            <div className="container">
              <div className="heading-layout1">
                <h2>Cleaning Services</h2>
                <p>
                  Perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium dol oremque laudantium, totam remeaque ipsa
                </p>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="service-box-layout1">
                    <div className="item-img">
                      <img src="img/service/service.jpg" alt="Thumb" />
                    </div>
                    <div className="item-middle-content">
                      <div className="item-icon">
                        <div className="home-icon">
                          <i className="fas fa-home" />
                        </div>
                      </div>
                    </div>
                    <div className="item-content">
                      <h3 className="item-title">
                        <a href="single-service1.html">Residential</a>
                      </h3>
                      <div className="serivce-list">
                        <ul>
                          <li>Kitchen</li>
                          <li>Bathrooms</li>
                          <li>Bedrooms</li>
                          <li>Windows</li>
                          <li>Carpet</li>
                          <li>Move in/out</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="service-box-layout1">
                    <div className="item-img">
                      <img src="img/service/service1.jpg" alt="Thumb" />
                    </div>
                    <div className="item-middle-content">
                      <div className="item-icon">
                        <div className="home-icon">
                          <i className="far fa-building" />
                        </div>
                      </div>
                    </div>
                    <div className="item-content">
                      <h3 className="item-title">
                        <a href="single-service1.html">Commercial</a>
                      </h3>
                      <div className="serivce-list">
                        <ul>
                          <li>Kitchen</li>
                          <li>Bathrooms</li>
                          <li>Bedrooms</li>
                          <li>Windows</li>
                          <li>Carpet</li>
                          <li>Move in/out</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 d-block d-md-none d-lg-block col-12">
                  <div className="service-box-layout1">
                    <div className="item-img">
                      <img src="img/service/service2.jpg" alt="Thumb" />
                    </div>
                    <div className="item-middle-content">
                      <div className="item-icon">
                        <div className="home-icon">
                          <i className="fas fa-car" />
                        </div>
                      </div>
                    </div>
                    <div className="item-content">
                      <h3 className="item-title">
                        <a href="single-service1.html">Vehicle Wash</a>
                      </h3>
                      <div className="serivce-list">
                        <ul>
                          <li>Kitchen</li>
                          <li>Bathrooms</li>
                          <li>Bedrooms</li>
                          <li>Windows</li>
                          <li>Carpet</li>
                          <li>Move in/out</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Service Area End Here */}
          {/* Call To Action Area Start Here */}
          <section className="action-wrap-layout1">
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <div className="action-box-layout1">
                    <h2 className="item-title">
                      Get started with your free estimate
                    </h2>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="action-box-layout1">
                    <div className="item-img bottom-bubble">
                      <img src="img/figure/figure4.png" alt="img" />
                    </div>
                    <a
                      href="#"
                      className="btn-fill-md hover-textprimary bg-accent text-primarytext"
                    >
                      Get an Estimate
                      <i className="fas fa-angle-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Call To Action Area End Here */}
          {/* About Us Area Start Here */}
          <section className="section-padding-md-2 section-bubble">
            <div className="container">
              <div className="row">
                <div className="col-xl-7 col-lg-6 col-12">
                  <div className="about-box-layout1">
                    <h2 className="item-title">
                      Our Goal is to Wow With Every Clean
                    </h2>
                    <div className="item-subtitle">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form.
                    </div>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. some form, by
                      injected humour, some form, by injected humour.
                    </p>
                    <div className="list-item">
                      <ul>
                        <li>
                          <h3>Customer Focused Reviews</h3>
                          <p>
                            Aorem ipsum dolor sit amet consectetur adipisicing
                            elit sed do eiusmod tempor incididunt ut labore et
                            dolore.
                          </p>
                        </li>
                        <li>
                          <h3>We Are Committed</h3>
                          <p>
                            Aorem ipsum dolor sit amet consectetur adipisicing
                            elit sed do eiusmod tempor incididunt ut labore et
                            dolore.
                          </p>
                        </li>
                        <li>
                          <h3>Regular &amp; Monthly Cleaning</h3>
                          <p>
                            Aorem ipsum dolor sit amet consectetur adipisicing
                            elit sed do eiusmod tempor incididunt ut labore et
                            dolore.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-6 col-12">
                  <div className="about-box-layout2">
                    <h3 className="item-title">Request An Estimate</h3>
                    <form className="contact-form-box" id="contact-form">
                      <div className="row gutters-10">
                        <div className="col-12 form-group">
                          <select className="select2">
                            <option value={0}>Residential</option>
                            <option value={1}>Residential</option>
                            <option value={2}>Commercial</option>
                            <option value={3}>Plot</option>
                            <option value={4}>Apartment</option>
                          </select>
                        </div>
                        <div className="col-md-6 col-12 form-group">
                          <select className="select2">
                            <option value={0}>Property Type</option>
                            <option value={1}>Residential</option>
                            <option value={2}>Commercial</option>
                            <option value={3}>Plot</option>
                            <option value={4}>Apartment</option>
                          </select>
                        </div>
                        <div className="col-md-6 col-12 form-group">
                          <select className="select2">
                            <option value={0}>-- Approx SF --</option>
                            <option value={1}>400</option>
                            <option value={2}>200</option>
                            <option value={3}>600</option>
                            <option value={4}>300</option>
                          </select>
                        </div>
                        <div className="col-md-6 col-12 form-group">
                          <select className="select2">
                            <option value={0}>-- Bedrooms --</option>
                            <option value={1}>Residential</option>
                            <option value={2}>Commercial</option>
                            <option value={3}>Plot</option>
                            <option value={4}>Apartment</option>
                          </select>
                        </div>
                        <div className="col-md-6 col-12 form-group">
                          <select className="select2">
                            <option value={0}>-- Bathrooms --</option>
                            <option value={1}>Residential</option>
                            <option value={2}>Commercial</option>
                            <option value={3}>Plot</option>
                            <option value={4}>Apartment</option>
                          </select>
                        </div>
                        <div className="col-md-6 col-12 form-group">
                          <select className="select2">
                            <option value={0}>-- Frequency --</option>
                            <option value={1}>Residential</option>
                            <option value={2}>Commercial</option>
                            <option value={3}>Plot</option>
                            <option value={4}>Apartment</option>
                          </select>
                        </div>
                        <div className="col-md-6 col-12 form-group">
                          <input
                            type="text"
                            placeholder="ZIP Code"
                            className="form-control"
                            name="name"
                            data-error="zip code field is required"
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
                            data-error="Subject field is required"
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
                            data-error="Subject field is required"
                            required=""
                          />
                        </div>
                        <div className="col-md-6 col-12 form-group">
                          <input
                            type="text"
                            placeholder="Name"
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
                            placeholder="Phone"
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
                            data-error="email field is required"
                            required=""
                          />
                          <div className="help-block with-errors" />
                        </div>
                        <div className="col-12 form-group mg-b-20">
                          <textarea
                            placeholder="Address"
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
                            Book Now
                            <i className="fas fa-angle-right" />
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
          {/* About Us Area End Here */}
          {/* Banner Area Start Here */}
          <section
            className="banner-wrap-layout1"
            data-bg-image="img/figure/banner-bg.jpg"
          >
            <div className="container">
              <div className="row d-flex justify-content-end">
                <div className="col-xl-6 col-12">
                  <div className="banner-box-layout1">
                    <h2 className="item-title">
                      Together <span>We'll Explore</span> New Things
                    </h2>
                    <a
                      href="#"
                      className="btn-fill-md btn-slide-hover bg-accent text-primarytext"
                    >
                      Read More
                      <i className="fas fa-angle-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Banner Area End Here */}
          {/* Pricing Table Area Start Here */}
          <section className="section-padding-xl bg-Primary section-shape2">
            <div className="container">
              <div className="heading-layout1 mg-b-60">
                <h2 className="text-white">Affordable Pricing</h2>
                <p className="text-textprimary">
                  Perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium dol oremque laudantium, totam remeaque ipsa
                </p>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <div className="pricing-box-layout1">
                    <div className="item-icon">
                      <i className="flaticon-clean" />
                    </div>
                    <h3 className="item-title">Basic</h3>
                    <div className="item-feature">
                      <ul>
                        <li>
                          <i className="fas fa-check" />
                          Surfaces Hand Wiped
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          Floors Cleaned
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          General Dusting
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          Cobwebs Removed
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          Doors Cleaned
                        </li>
                      </ul>
                    </div>
                    <div className="item-price">
                      <div className="item-currency">$49</div>
                      <div className="item-duration">/per mo</div>
                    </div>
                    <a
                      href="#"
                      className="btn-fill-xl bg-accent text-primarytext"
                    >
                      Get It Now
                    </a>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="pricing-box-layout1">
                    <div className="popular-text">Popular Sale!</div>
                    <div className="item-icon popular-shape">
                      <i className="flaticon-mop" />
                    </div>
                    <h3 className="item-title">Standard</h3>
                    <div className="item-feature">
                      <ul>
                        <li>
                          <i className="fas fa-check" />
                          Surfaces Hand Wiped
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          Floors Cleaned
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          General Dusting
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          Cobwebs Removed
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          Doors Cleaned
                        </li>
                      </ul>
                    </div>
                    <div className="item-price">
                      <div className="item-currency">$99</div>
                      <div className="item-duration">/per mo</div>
                    </div>
                    <a
                      href="#"
                      className="btn-fill-xl bg-accent text-primarytext"
                    >
                      Get It Now
                    </a>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="pricing-box-layout1">
                    <div className="item-icon">
                      <i className="flaticon-clean-2" />
                    </div>
                    <h3 className="item-title">Premium</h3>
                    <div className="item-feature">
                      <ul>
                        <li>
                          <i className="fas fa-check" />
                          Surfaces Hand Wiped
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          Floors Cleaned
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          General Dusting
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          Cobwebs Removed
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          Doors Cleaned
                        </li>
                      </ul>
                    </div>
                    <div className="item-price">
                      <div className="item-currency">$199</div>
                      <div className="item-duration">/per mo</div>
                    </div>
                    <a
                      href="#"
                      className="btn-fill-xl bg-accent text-primarytext"
                    >
                      Get It Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Pricing Table Area End Here */}
          {/* Team Area Start Here */}
          <section className="section-padding-lg-3 section-bubble">
            <div className="container">
              <div className="heading-layout1">
                <h2>Our Working Experts</h2>
                <p>
                  Perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium dol oremque laudantium, totam remeaque ipsa
                </p>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="team-box-layout1">
                    <div className="item-img">
                      <img src="img/team/team1.png" alt="team-thumb" />
                    </div>
                    <div className="item-content">
                      <h3 className="item-title">
                        <a href="single-team.html">Richard Powel</a>
                      </h3>
                      <div className="item-subtitle">Office Cleaner</div>
                      <div className="item-social">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-linkedin-in" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-pinterest" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="team-box-layout1">
                    <div className="item-img">
                      <img src="img/team/team2.png" alt="team-thumb" />
                    </div>
                    <div className="item-content">
                      <h3 className="item-title">
                        <a href="single-team.html">Merry Patel</a>
                      </h3>
                      <div className="item-subtitle">Kitchen Cleaner</div>
                      <div className="item-social">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-linkedin-in" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-pinterest" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 d-block d-md-none d-lg-block col-12">
                  <div className="team-box-layout1">
                    <div className="item-img">
                      <img src="img/team/team3.png" alt="team-thumb" />
                    </div>
                    <div className="item-content">
                      <h3 className="item-title">
                        <a href="single-team.html">Johnson Jack</a>
                      </h3>
                      <div className="item-subtitle">Floor Cleaner</div>
                      <div className="item-social">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-linkedin-in" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-pinterest" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Team Area End Here */}
          {/* Progress Area Start Here */}
          <section className="progress-wrap-layout1 section-padding-12">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-8 col-12">
                  <div className="progress-box-layout1">
                    <h2 className="item-title">
                      All of our Specialists are Fully Trained
                    </h2>
                    <div className="item-content">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="counter-item">
                            <div
                              className="counter count-number"
                              data-num={159}
                            >
                              159
                            </div>
                            <div className="count-title">Project Done</div>
                            <div className="bg-icon">
                              <i className="far fa-thumbs-up" />
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="counter-item">
                            <div
                              className="counter count-number"
                              data-num={1900}
                            >
                              1900
                            </div>
                            <div className="count-title">Happy Clients</div>
                            <div className="bg-icon">
                              <i className="far fa-smile" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Progress Area End Here */}
          {/* Testimonial Area Start Here */}
          <section
            className="section-padding-md-4 bg-Primary bg-common"
            data-bg-image="img/figure/bg-shape.png"
          >
            <div className="container">
              <div className="heading-layout2 mg-b-30">
                <h2 className="text-white">
                  What’s Client’s Say<span>About Us</span>
                </h2>
              </div>
              <div
                className="rc-carousel nav-control-layout1"
                data-loop="true"
                data-items={10}
                data-margin={30}
                data-autoplay="false"
                data-autoplay-timeout={3000}
                data-smart-speed={1000}
                data-dots="false"
                data-nav="true"
                data-nav-speed="false"
                data-r-x-small={1}
                data-r-x-small-nav="true"
                data-r-x-small-dots="false"
                data-r-x-medium={1}
                data-r-x-medium-nav="true"
                data-r-x-medium-dots="false"
                data-r-small={1}
                data-r-small-nav="true"
                data-r-small-dots="false"
                data-r-medium={2}
                data-r-medium-nav="true"
                data-r-medium-dots="false"
                data-r-large={3}
                data-r-large-nav="true"
                data-r-large-dots="false"
                data-r-extra-large={3}
                data-r-extra-large-nav="true"
                data-r-extra-large-dots="false"
              >
                <div className="testimonial-box-layout1">
                  <p>
                    Wimply dummy text of the printing and typesetting
                    industryrem Ipsum has been the industry's standard dummy
                    text ever since{" "}
                  </p>
                  <h3 className="item-title">Steven Joes</h3>
                  <div className="item-subtitle">CEO, RT</div>
                  <ul className="item-rating">
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                  </ul>
                  <div className="item-quote">
                    <i className="fas fa-quote-right" />
                  </div>
                </div>
                <div className="testimonial-box-layout1">
                  <p>
                    Wimply dummy text of the printing and typesetting
                    industryrem Ipsum has been the industry's standard dummy
                    text ever since{" "}
                  </p>
                  <h3 className="item-title">Mike Tyson</h3>
                  <div className="item-subtitle">CEO, RT</div>
                  <ul className="item-rating">
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                  </ul>
                  <div className="item-quote">
                    <i className="fas fa-quote-right" />
                  </div>
                </div>
                <div className="testimonial-box-layout1">
                  <p>
                    Wimply dummy text of the printing and typesetting
                    industryrem Ipsum has been the industry's standard dummy
                    text ever since{" "}
                  </p>
                  <h3 className="item-title">Bobby John</h3>
                  <div className="item-subtitle">CEO, RT</div>
                  <ul className="item-rating">
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                  </ul>
                  <div className="item-quote">
                    <i className="fas fa-quote-right" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Testimonial Area End Here */}
          {/* Blog Area Start Here */}
          <section className="section-padding-lg-4 section-bubble">
            <div className="container">
              <div className="heading-layout1">
                <h2> Our Latest Blogs</h2>
                <p>
                  Perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium fa-angle-double-up oremque laudantium, totam
                  remeaque ipsa
                </p>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="blog-box-layout1">
                    <div className="item-img">
                      <a href="single-blog1.html">
                        <img src="img/blog/blog7.jpg" alt="blog-thumb" />
                      </a>
                    </div>
                    <div className="item-content">
                      <div className="item-date">
                        <i className="fas fa-calendar-alt" />
                        24 July, 2019
                      </div>
                      <h3 className="item-title">
                        <a href="single-blog1.html">
                          What is Best domin Name For Business
                        </a>
                      </h3>
                      <div className="item-author">By Mark Wily</div>
                      <p>
                        Aimply dummy text of the printing anden type setting
                        industrym Ipsum has been the industry's standard.
                      </p>
                      <div className="entry-meta">
                        <ul>
                          <li>
                            <i className="fas fa-heart" />
                            <span>06</span> Likes
                          </li>
                          <li>
                            <i className="fas fa-comment" />
                            <span>02</span> <a href="#">Comments</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="blog-box-layout1">
                    <div className="item-img">
                      <a href="single-blog1.html">
                        <img src="img/blog/blog2.jpg" alt="blog-thumb" />
                      </a>
                    </div>
                    <div className="item-content">
                      <div className="item-date">
                        <i className="fas fa-calendar-alt" />
                        24 July, 2019
                      </div>
                      <h3 className="item-title">
                        <a href="single-blog1.html">
                          What is Best domin Name For Business
                        </a>
                      </h3>
                      <div className="item-author">By Mark Wily</div>
                      <p>
                        Aimply dummy text of the printing anden type setting
                        industrym Ipsum has been the industry's standard.
                      </p>
                      <div className="entry-meta">
                        <ul>
                          <li>
                            <i className="fas fa-heart" />
                            <span>06</span> Likes
                          </li>
                          <li>
                            <i className="fas fa-comment" />
                            <span>02</span> <a href="#">Comments</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 d-block d-md-none d-lg-block col-12">
                  <div className="blog-box-layout1">
                    <div className="item-img">
                      <a href="single-blog1.html">
                        <img src="img/blog/blog3.jpg" alt="blog-thumb" />
                      </a>
                    </div>
                    <div className="item-content">
                      <div className="item-date">
                        <i className="fas fa-calendar-alt" />
                        24 July, 2019
                      </div>
                      <h3 className="item-title">
                        <a href="single-blog1.html">
                          What is Best domin Name For Business
                        </a>
                      </h3>
                      <div className="item-author">By Mark Wily</div>
                      <p>
                        Aimply dummy text of the printing anden type setting
                        industrym Ipsum has been the industry's standard.
                      </p>
                      <div className="entry-meta">
                        <ul>
                          <li>
                            <i className="fas fa-heart" />
                            <span>06</span> Likes
                          </li>
                          <li>
                            <i className="fas fa-comment" />
                            <span>02</span> <a href="#">Comments</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Blog Area End Here */}
          {/* Footer Area Start Here */}
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
                        <a href="contact.html" className="contact-btn">
                          <i className="far fa-envelope" />
                          HAVE ANY QUESTION
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-middle-box">
                <div className="row">
                  <div className="col-lg-5 col-12">
                    <div className="footer-newsletter">
                      <h3 className="item-title">
                        Sign up for news and special offers
                      </h3>
                      <div className="input-group stylish-input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search Keywords ..."
                        />
                        <span className="input-group-addon">
                          <button type="submit">Submit</button>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7 col-12">
                    <div className="footer-social">
                      <h4 className="item-title">Follow Us On :</h4>
                      <ul className="social-icon">
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-linkedin-in" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-google-plus-g" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-pinterest" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-vimeo-v" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-bottom-box">
                <div className="row">
                  <div className="col-md-6">
                    <div className="copyright">
                      Copyright 2019 clenix. All Rights Reserved.
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="footer-bottom-menu">
                      <ul>
                        <li>
                          <a href="#">Sitemap</a>
                        </li>
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
          {/* Footer Area End Here */}
        </div>
      </div>
      <Script src="js/jquery-3.3.1.min.js"></Script>
      <Script src="js/plugins.js"></Script>
      <Script src="js/popper.min.js"></Script>
      <Script src="js/bootstrap.min.js"></Script>
      <Script src="js/jquery.meanmenu.min.js"></Script>
      <Script src="vendor/slider/js/jquery.nivo.slider.js"></Script>
      <Script src="vendor/slider/home.js"></Script>
      <Script src="vendor/OwlCarousel/owl.carousel.min.js"></Script>
      <Script src="js/jquery.counterup.min.js"></Script>
      <Script src="js/waypoints.min.js"></Script>
      <Script src="js/validator.min.js"></Script>
      <Script src="js/select2.min.js"></Script>
      <Script src="js/jquery.datetimepicker.full.min.js"></Script>
      <Script src="js/main.js"></Script>
    </>
  );
}
