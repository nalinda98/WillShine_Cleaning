import React from "react";

const AboutProcess = () => {
  return (
    <div>
      <section className="section-padding-lg-2">
        <div className="container">
          <div className="heading-layout1">
            <h2>How It Works</h2>
            <p>
              Our streamlined process ensures your workspace is cleaned
              professionally, efficiently, and with attention to every
              detail—from first contact to ongoing quality assurance.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-3 single-process">
              <div className="process-box-layout1">
                <div className="item-bg">
                  <img src="img/figure/bubble5.png" alt="Contact Us" />
                  <div className="item-icon">
                    <i className="fas fa-envelope" />
                  </div>
                </div>
                <div className="item-content">
                  <h3 className="item-title">Contact Us</h3>
                  <p>
                    Get in touch via phone or our website. Our team will arrange
                    a free site assessment at your convenience—no contracts
                    required.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 single-process">
              <div className="process-box-layout1">
                <div className="item-bg">
                  <img src="img/figure/bubble5.png" alt="Site Assessment" />
                  <div className="item-icon">
                    <i className="fas fa-search-location" />
                  </div>
                </div>
                <div className="item-content">
                  <h3 className="item-title">Site Assessment</h3>
                  <p>
                    We assess your workspace and listen to your needs to develop
                    a comprehensive understanding of what’s required.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 single-process">
              <div className="process-box-layout1">
                <div className="item-bg">
                  <img src="img/figure/bubble5.png" alt="Customized Plan" />
                  <div className="item-icon">
                    <i className="fas fa-tasks" />
                  </div>
                </div>
                <div className="item-content">
                  <h3 className="item-title">Customized Plan</h3>
                  <p>
                    We tailor a cleaning solution to your business, offering
                    flexible scheduling and eco-friendly products where
                    requested.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 single-process">
              <div className="process-box-layout1">
                <div className="item-bg">
                  <img src="img/figure/bubble5.png" alt="Quality Assurance" />
                  <div className="item-icon">
                    <i className="fas fa-check-double" />
                  </div>
                </div>
                <div className="item-content">
                  <h3 className="item-title">Quality Assurance</h3>
                  <p>
                    Every job is thoroughly inspected by supervisors to ensure
                    excellence, with ongoing communication and adjustments as
                    needed.
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
