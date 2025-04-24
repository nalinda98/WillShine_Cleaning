import React from "react";

const AboutProcess = () => {
  return (
    <div>
      <section className="section-padding-lg-2">
        <div className="container">
          <div className="heading-layout1">
            <h2>How It Works</h2>
            <p>
              Enjoy a spotless workspace with our seamless and professional 4-step cleaning process designed to meet your unique requirements.
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
                    Reach out via email, phone, or our website form. We'll respond within 4 hours to schedule your free assessment.
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
                    We visit your office to assess cleaning needs, identify special requirements, and evaluate the workspace thoroughly.
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
                    Based on our assessment, we develop a personalized cleaning schedule tailored to your office’s workflow and needs.
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
                    We ensure high standards through regular inspections and adapt our services based on your feedback and evolving needs.
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
              