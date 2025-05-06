import React from "react";

const Testominals = () => {
  return (
    <div>
      <section
        className="section-padding-md-4 bg-Primary bg-common"
        data-bg-image="img/figure/bg-shape.png"
      >
        <div className="container">
          <div className="heading-layout2 mg-b-30">
            <h2 className="text-white">
              What’s Client’s Say<span>About Us</span>
            </h2>
          </div>
          <div
            className="rc-carousel nav-control-layout1"
            data-loop="true"
            data-items={10}
            data-margin={30}
            data-autoplay="false"
            data-autoplay-timeout={3000}
            data-smart-speed={1000}
            data-dots="false"
            data-nav="true"
            data-nav-speed="false"
            data-r-x-small={1}
            data-r-x-small-nav="true"
            data-r-x-small-dots="false"
            data-r-x-medium={1}
            data-r-x-medium-nav="true"
            data-r-x-medium-dots="false"
            data-r-small={1}
            data-r-small-nav="true"
            data-r-small-dots="false"
            data-r-medium={2}
            data-r-medium-nav="true"
            data-r-medium-dots="false"
            data-r-large={3}
            data-r-large-nav="true"
            data-r-large-dots="false"
            data-r-extra-large={3}
            data-r-extra-large-nav="true"
            data-r-extra-large-dots="false"
          >
            <div className="testimonial-box-layout1">
              <p>
                Wilshine Cleaning Services has been fantastic for our office
                cleaning needs. Their team is always professional, punctual, and
                thorough. Our office looks spotless after every visit, and we
                love that they use eco-friendly products. Highly recommend them
                for any business needing reliable cleaning services!{" "}
              </p>
              <h3 className="item-title">Optimum Roofing</h3>
              <div className="item-subtitle">CEO, RT</div>
              <ul className="item-rating">
                <li>
                  <i className="fas fa-star" />
                </li>
                <li>
                  <i className="fas fa-star" />
                </li>
                <li>
                  <i className="fas fa-star" />
                </li>
                <li>
                  <i className="fas fa-star" />
                </li>
                <li>
                  <i className="fas fa-star" />
                </li>
              </ul>
              <div className="item-quote">
                <i className="fas fa-quote-right" />
              </div>
            </div>
            <div className="testimonial-box-layout1">
              <p>
                I’m extremely happy with the pressure washing service from
                Wilshine Cleaning Services. They arrived on time, worked
                efficiently, and made my driveway and exterior look brand new.
                Great results, fair pricing, and excellent customer service.
                Highly recommend!{" "}
              </p>
              <h3 className="item-title">Tanya Regan</h3>
              <div className="item-subtitle">CEO, RT</div>
              <ul className="item-rating">
                <li>
                  <i className="fas fa-star" />
                </li>
                <li>
                  <i className="fas fa-star" />
                </li>
                <li>
                  <i className="fas fa-star" />
                </li>
                <li>
                  <i className="fas fa-star" />
                </li>
                <li>
                  <i className="fas fa-star" />
                </li>
              </ul>
              <div className="item-quote">
                <i className="fas fa-quote-right" />
              </div>
            </div>
            <div className="testimonial-box-layout1">
              <p>
                Wilshine Property Services is fantastic! Always reliable,
                thorough, and professional. Highly recommend!{" "}
              </p>
              <h3 className="item-title">Jason</h3>
              <div className="item-subtitle">CEO, RT</div>
              <ul className="item-rating">
                <li>
                  <i className="fas fa-star" />
                </li>
                <li>
                  <i className="fas fa-star" />
                </li>
                <li>
                  <i className="fas fa-star" />
                </li>
                <li>
                  <i className="fas fa-star" />
                </li>
                <li>
                  <i className="fas fa-star" />
                </li>
              </ul>
              <div className="item-quote">
                <i className="fas fa-quote-right" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testominals;
