import React from "react";

const PricingTable = ({ details }) => {
  return (
    <div>
      <section className="section-padding-xl bg-Primary section-shape2">
        <div className="container">
          <div className="row">
            {Object.entries(details).map(([key, pack], index) => (
              <div className="col-lg-4" key={key}>
                <div className="pricing-box-layout1 py-3" >
                  <div className="item-icon" >
                    <i
                      className={`flaticon-clean${
                        index > 0 ? `-${index + 1}` : ""
                      }`}
                    ></i>
                  </div>
                  <h3 className="item-title">{pack.title}</h3>
                  <div className="item-feature">
                    <ul>
                      {pack.features.map((feature, i) => (
                        <li key={i} style={{ textAlign: "left", paddingLeft: "5px", paddingRight: "3px" }}>
                         <i className="fas fa-check"></i> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="item-price">
                    <div className="item-currency">{pack.price}</div>
                    <div className="item-duration">/{pack.unit}</div>
                  </div>
                  <a
                    href="#"
                    className="btn-fill-xl bg-accent text-primarytext"
                  >
                    Get It Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingTable;
