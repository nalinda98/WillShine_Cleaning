import Link from "next/link";
import React from "react";

const HomeService = () => {
  return (
    <section
      className="section-padding-lg bg-common bg-aash"
      data-bg-image="img/figure/bg-shape1.png"
    >
      <div className="container">
        <div className="heading-layout1">
          <h2>Our Cleaning Services</h2>
          <p>
            Blossom Property Services offers top-quality residential, commercial, and end-of-lease cleaning services across Sydney.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="service-box-layout1">
              <div className="item-img">
                <img src="img/service/service.jpg" alt="Residential" />
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
                  <Link href="/single-service1">Residential Cleaning</Link>
                </h3>
                <div className="serivce-list">
                  <ul>
                    <li>General House Cleaning</li>
                    <li>Kitchen & Bathrooms</li>
                    <li>Windows</li>
                    <li>Vacuuming & Mopping</li>
                    <li>Dusting</li>
                    <li>Move-in/out Cleaning</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="service-box-layout1">
              <div className="item-img">
                <img src="img/service/service1.jpg" alt="Commercial" />
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
                  <Link href="/single-service2">Commercial Cleaning</Link>
                </h3>
                <div className="serivce-list">
                  <ul>
                    <li>Office & Retail Spaces</li>
                    <li>Workstations & Desks</li>
                    <li>Washrooms</li>
                    <li>Common Areas</li>
                    <li>Carpets & Floors</li>
                    <li>Windows & Glass</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 d-block d-md-none d-lg-block col-12">
            <div className="service-box-layout1">
              <div className="item-img">
                <img src="img/service/service2.jpg" alt="End of Lease" />
              </div>
              <div className="item-middle-content">
                <div className="item-icon">
                  <div className="home-icon">
                    <i className="fas fa-key" />
                  </div>
                </div>
              </div>
              <div className="item-content">
                <h3 className="item-title">
                  <Link href="/single-service3">End of Lease Cleaning</Link>
                </h3>
                <div className="serivce-list">
                  <ul>
                    <li>Deep Clean for Bond Return</li>
                    <li>Full Kitchen & Bathroom</li>
                    <li>Wall & Skirting Wipe</li>
                    <li>Floor to Ceiling Cleaning</li>
                    <li>Spotless Windows</li>
                    <li>Professional Results</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeService;
