import React from "react";

const MiddleBanner = () => {
  return (
    <div>
      <section
        className="banner-wrap-layout1"
        data-bg-image="img/figure/banner-bg.jpg"
      >
        <div className="container">
          <div className="row d-flex justify-content-xl-end">
            <div className="col-xl-6 col-12">
              <div className="banner-box-layout1">
                <h2 className="item-title">
                  Together <span>We'll Explore</span> New Things
                </h2>
                <a
                  href="#"
                  className="btn-fill-md bg-accent btn-slide-hover text-primarytext"
                >
                  Read More
                  <i className="fas fa-angle-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MiddleBanner;
