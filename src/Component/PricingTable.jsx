import React from "react";

const PricingTable = () => {
  return (
    <div>
      <section className="section-padding-xl bg-Primary section-shape2">
        <div className="container">
          <div className="heading-layout1 mg-b-60">
            <h2 className="text-white">Affordable Pricing</h2>
            <p className="text-textprimary">
              Perspiciatis unde omnis iste natus error sit voluptatem
              accusantium dol oremque laudantium, totam remeaque ipsa
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="pricing-box-layout1">
                <div className="item-icon">
                  <i className="flaticon-clean"></i>
                </div>
                <h3 className="item-title">Basic</h3>
                <div className="item-feature">
                  <ul>
                    <li>
                      <i className="fas fa-check"></i>Surfaces Hand Wiped
                    </li>
                    <li>
                      <i className="fas fa-check"></i>Floors Cleaned
                    </li>
                    <li>
                      <i className="fas fa-check"></i>General Dusting
                    </li>
                    <li>
                      <i className="fas fa-check"></i>Cobwebs Removed
                    </li>
                    <li>
                      <i className="fas fa-check"></i>Doors Cleaned
                    </li>
                  </ul>
                </div>
                <div className="item-price">
                  <div className="item-currency">$49</div>
                  <div className="item-duration">/per mo</div>
                </div>
                <a href="#" className="btn-fill-xl bg-accent text-primarytext">
                  Get It Now
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="pricing-box-layout1">
                <div className="popular-text">Popular Sale!</div>
                <div className="item-icon popular-shape">
                  <i className="flaticon-mop"></i>
                </div>
                <h3 className="item-title">Standard</h3>
                <div className="item-feature">
                  <ul>
                    <li>
                      <i className="fas fa-check"></i>Surfaces Hand Wiped
                    </li>
                    <li>
                      <i className="fas fa-check"></i>Floors Cleaned
                    </li>
                    <li>
                      <i className="fas fa-check"></i>General Dusting
                    </li>
                    <li>
                      <i className="fas fa-check"></i>Cobwebs Removed
                    </li>
                    <li>
                      <i className="fas fa-check"></i>Doors Cleaned
                    </li>
                  </ul>
                </div>
                <div className="item-price">
                  <div className="item-currency">$99</div>
                  <div className="item-duration">/per mo</div>
                </div>
                <a href="#" className="btn-fill-xl bg-accent text-primarytext">
                  Get It Now
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="pricing-box-layout1">
                <div className="item-icon">
                  <i className="flaticon-clean-2"></i>
                </div>
                <h3 className="item-title">Premium</h3>
                <div className="item-feature">
                  <ul>
                    <li>
                      <i className="fas fa-check"></i>Surfaces Hand Wiped
                    </li>
                    <li>
                      <i className="fas fa-check"></i>Floors Cleaned
                    </li>
                    <li>
                      <i className="fas fa-check"></i>General Dusting
                    </li>
                    <li>
                      <i className="fas fa-check"></i>Cobwebs Removed
                    </li>
                    <li>
                      <i className="fas fa-check"></i>Doors Cleaned
                    </li>
                  </ul>
                </div>
                <div className="item-price">
                  <div className="item-currency">$199</div>
                  <div className="item-duration">/per mo</div>
                </div>
                <a href="#" className="btn-fill-xl bg-accent text-primarytext">
                  Get It Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingTable;
