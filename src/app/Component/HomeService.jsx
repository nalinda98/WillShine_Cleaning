import React from "react";

const HomeService = () => {
  return (
    <div>
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
                      <i className="fas fa-home"></i>
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
                      <i className="far fa-building"></i>
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
                      <i className="fas fa-car"></i>
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
    </div>
  );
};

export default HomeService;
