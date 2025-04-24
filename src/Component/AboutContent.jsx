import React from "react";

const AboutContent = () => {
  return (
    <div>
      <section className="section-padding-md-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-box-layout7">
                <div className="top-left-item">
                  <div className="item-tagline">Know About Us</div>
                  <h2 className="item-title">
                    Professional Office Cleaning Service Provider in Australia
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-box-layout7">
                <div className="top-right-item">
                  <p>
                    Blossom Property Services is proudly Western Australia owned
                    and operated, specializing in office cleaning and hygiene
                    services. With years of industry expertise, we use proven
                    techniques to deliver superior results at competitive
                    prices. Our regular post-service supervision ensures
                    consistent quality, so you can enjoy a spotless and healthy
                    workspace every day.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="about-box-layout7">
                <div className="item-popup-img">
                  <img src="img/figure/about2.jpg" alt="Thumb" />
                  <div className="item-icon">
                    <a
                      className="play-btn popup-youtube"
                      href="https://www.youtube.com/watch?v=1iIZeIy7TqM"
                    >
                      <i className="flaticon-play-arrow" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-box-layout7 pr-5">
                <div className="feature-list">
                  <ul>
                    <li>
                      <h3>100% Cleaning Satisfaction</h3>
                      <p>
                        We are committed to delivering spotless results with
                        every service, ensuring complete satisfaction for every
                        client, every time.
                      </p>
                    </li>
                    <li>
                      <h3>Daily & Monthly Cleaning Options</h3>
                      <p>
                        Choose from flexible cleaning plans tailored to your
                        needs—whether you require daily attention or scheduled
                        monthly maintenance.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-box-layout7">
                <div className="feature-list">
                  <ul>

                  <li>
                      <h3>Thorough Supervision After Work Completion</h3>
                      <p>
                        Our supervisors inspect every job upon completion to
                        maintain high standards and ensure no detail is
                        overlooked.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutContent;
