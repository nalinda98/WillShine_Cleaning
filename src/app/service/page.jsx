import React from "react";
import Banner from "../../Component/Banner";
import ServiceContent from "../../Component/ServiceContent";

const Service = () => {
  return (
    <div>
      <Banner title={"Our Services"} path={"Services"} />
      <ServiceContent />
      <>
        <section className="section-padding-lg-2">
          <div className="container">
            <div className="heading-layout1">
              <h2>How It Works</h2>
              <p>
                Perspiciatis unde omnis iste natus error sit voluptatem
                accusantium dol oremque laudantium, totam remeaque ipsa
              </p>
            </div>
            <div className="row">
              <div className="col-lg-4 single-process">
                <div className="process-box-layout1">
                  <div className="item-bg">
                    <img src="img/figure/bubble5.png" alt="thumb" />
                    <div className="item-icon">
                      <i className="far fa-calendar-check" />
                    </div>
                  </div>
                  <div className="item-content">
                    <h3 className="item-title">Book Online</h3>
                    <p>
                      Ahen an unknown printer took a galley of type and
                      scrambled.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 single-process">
                <div className="process-box-layout1">
                  <div className="item-bg">
                    <img src="img/figure/bubble5.png" alt="thumb" />
                    <div className="item-icon">
                      <i className="far fa-envelope" />
                    </div>
                  </div>
                  <div className="item-content">
                    <h3 className="item-title">Get Confirmation</h3>
                    <p>
                      Ahen an unknown printer took a galley of type and
                      scrambled.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 single-process">
                <div className="process-box-layout1">
                  <div className="item-bg">
                    <img src="img/figure/bubble5.png" alt="thumb" />
                    <div className="item-icon">
                      <i className="far fa-smile" />
                    </div>
                  </div>
                  <div className="item-content">
                    <h3 className="item-title">Let’s Enjoy</h3>
                    <p>
                      Ahen an unknown printer took a galley of type and
                      scrambled.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Process Area End Here */}
        {/* Banner Area Start Here */}
        <section className="banner-wrap-layout3 bg-lightprimary">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-lg-6 order-lg-2">
                <div className="banner-box-layout2">
                  <h2 className="item-title">
                    Together <span>We'll Explore</span> New Things
                  </h2>
                  <p>
                    Chen an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting, remaining essentially.
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
      </>
    </div>
  );
};

export default Service;
