import Link from "next/link";
import React from "react";
import HomePageSlider from "./HomePageSlider";
import HomeService from "./HomeService";
import CertificateSection from "./CertificateSection";
import Estimate from "./Estimate";
import Image from "next/image";
import Testominals from "./Testominals";
import HomeBlog from "./HomeBlog";
import ProjectsCount from "./ProjectsCount";

const Homepage = () => {
  return (
    <div>
      <div>
        {/* Header Area End Here */}
        {/* Slider Area Start Here */}
        <HomePageSlider />

        {/* Slider Area End Here */}
        {/* About Us Area Start Here */}
        {/* <section className="section-bubble section-padding-md-2">
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
                    settingare industrLorem Ipsum has been the industry&apos;s
                    standard dummy text everty since the when an unknown
                    centuries, but also the leap into electronic typesetting,
                    remaining essentially.
                  </p>
                  <div className="service-list">
                    <ul>
                      <li>Experienced Team</li>
                      <li>Keep the same cleaner for every visit</li>
                      <li>One-off, weekly or fortnightly visits</li>
                      <li>Book, manage & pay online</li>
                    </ul>
                  </div>
                  <div className="action-area">
                    <Link
                      href="/services"
                      className="btn-fill-sm bg-accent text-primarytext btn-slide-hover"
                    >
                      Book a Service
                      <i className="fas fa-angle-right" />
                    </Link>
                    <div className="phone-number">
                      <i className="flaticon-phone-call" />+ 985 8844 000
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* About Us Area End Here */}
        <HomeService />
        <CertificateSection />

        {/* Call To Action Area Start Here */}
        {/* <section className="action-wrap-layout1">
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
                  <Link
                    href="/estimate"
                    className="btn-fill-md hover-textprimary bg-accent text-primarytext"
                  >
                    Get an Estimate
                    <i className="fas fa-angle-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* Call To Action Area End Here */}
        {/* About Us Area Start Here */}
        <Estimate />
        {/* About Us Area End Here */}
        {/* Banner Area Start Here */}
        {/* <section
          className="banner-wrap-layout1"
          data-bg-image="img/figure/banner-bg.jpg"
        >
          <div className="container">
            <div className="row d-flex justify-content-end">
              <div className="col-xl-6 col-12">
                <div className="banner-box-layout1">
                  <h2 className="item-title">
                    Together <span>We&apos;ll Explore</span> New Things
                  </h2>
                  <Link
                    href="/about"
                    className="btn-fill-md btn-slide-hover bg-accent text-primarytext"
                  >
                    Read More
                    <i className="fas fa-angle-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* Banner Area End Here */}
        <ProjectsCount />

        {/* Pricing Table Area Start Here */}
        {/* <section className="section-padding-xl bg-Primary section-shape2">
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
                  <Link
                    href="/pricing-table"
                    className="btn-fill-xl bg-accent text-primarytext"
                  >
                    Get It Now
                  </Link>
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
                  <Link
                    href="/pricing-table"
                    className="btn-fill-xl bg-accent text-primarytext"
                  >
                    Get It Now
                  </Link>
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
                  <Link
                    href="/pricing-table"
                    className="btn-fill-xl bg-accent text-primarytext"
                  >
                    Get It Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* Pricing Table Area End Here */}
        {/* Team Area Start Here */}
        {/* <section className="section-padding-lg-3 section-bubble">
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
                      <Link href="/single-team">Richard Powel</Link>
                    </h3>
                    <div className="item-subtitle">Office Cleaner</div>
                    <div className="item-social">
                      <ul>
                        <li>
                          <Link href="https://facebook.com">
                            <i className="fab fa-facebook-f" />
                          </Link>
                        </li>
                        <li>
                          <Link href="https://twitter.com">
                            <i className="fab fa-twitter" />
                          </Link>
                        </li>
                        <li>
                          <Link href="https://linkedin.com">
                            <i className="fab fa-linkedin-in" />
                          </Link>
                        </li>
                        <li>
                          <Link href="https://pinterest.com">
                            <i className="fab fa-pinterest" />
                          </Link>
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
                      <Link href="/single-team">Merry Patel</Link>
                    </h3>
                    <div className="item-subtitle">Kitchen Cleaner</div>
                    <div className="item-social">
                      <ul>
                        <li>
                          <Link href="https://facebook.com">
                            <i className="fab fa-facebook-f" />
                          </Link>
                        </li>
                        <li>
                          <Link href="https://twitter.com">
                            <i className="fab fa-twitter" />
                          </Link>
                        </li>
                        <li>
                          <Link href="https://linkedin.com">
                            <i className="fab fa-linkedin-in" />
                          </Link>
                        </li>
                        <li>
                          <Link href="https://pinterest.com">
                            <i className="fab fa-pinterest" />
                          </Link>
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
                      <Link href="/single-team">Johnson Jack</Link>
                    </h3>
                    <div className="item-subtitle">Floor Cleaner</div>
                    <div className="item-social">
                      <ul>
                        <li>
                          <Link href="https://facebook.com">
                            <i className="fab fa-facebook-f" />
                          </Link>
                        </li>
                        <li>
                          <Link href="https://twitter.com">
                            <i className="fab fa-twitter" />
                          </Link>
                        </li>
                        <li>
                          <Link href="https://linkedin.com">
                            <i className="fab fa-linkedin-in" />
                          </Link>
                        </li>
                        <li>
                          <Link href="https://pinterest.com">
                            <i className="fab fa-pinterest" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* Team Area End Here */}
        {/* Progress Area Start Here */}

        {/* Progress Area End Here */}
        {/* Testimonial Area Start Here */}
        <Testominals />
        {/* Testimonial Area End Here */}
        {/* Blog Area Start Here */}
        <HomeBlog />

        {/* Blog Area End Here */}
      </div>
    </div>
  );
};

export default Homepage;
