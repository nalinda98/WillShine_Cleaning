import React from "react";

const AboutProcess = () => {
  return (
    <div>
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
                    Ahen an unknown printer took a galley of type and scrambled.
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
                    Ahen an unknown printer took a galley of type and scrambled.
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
                    Ahen an unknown printer took a galley of type and scrambled.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutProcess;
