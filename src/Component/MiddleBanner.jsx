import React from "react";

const MiddleBanner = () => {
  return (
    <div>
      <section className="banner-wrap-layout3 bg-lightprimary">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="banner-box-layout2">
                <h2 className="item-title">
                  Together <span>We'll Explore</span> New Things
                </h2>
                <p>
                  Chen an unknown printer took a galley of type and scrambled it
                  to make a type specimen book. It has survived not only five
                  centuries, but also the leap into electronic typesetting,
                  remaining essentially.
                </p>
                <a
                  href="#"
                  className="btn-fill-sm btn-slide-hover bg-accent text-primarytext"
                >
                  Request an Estimate
                  <i className="fas fa-angle-right" />
                </a>
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="banner-box-layout3">
                <div className="item-img">
                  <img src="img/figure/figure9.png" alt="Banner-thumb" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MiddleBanner;
