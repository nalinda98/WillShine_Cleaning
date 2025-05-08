import React from "react";

const PricingTable = ({ details }) => {
  return (
    <div>
      <section className="section-padding-xl  ">
        <div className="container">
          <div className="row d-flex" style={{ alignItems: "stretch" }}>
            {Object.entries(details).map(([key, pack], index) => (
              <div className="col-lg-4 d-flex" key={key}>
                <div
                  className="pricing-box-layout1 py-3 w-100"
                  style={{
                    boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
                    padding: "5px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* Content that fills available space */}
                  <div style={{ flexGrow: 1 }}>
                    <div className="item-icon">
                      <i
                        className={`flaticon-clean${
                          index > 0 ? `-${index + 1}` : ""
                        }`}
                        style={{
                          fontSize: "50px",
                          color: "#287ff9",
                        }}
                      ></i>
                    </div>
                    <h3 className="item-title">{pack.title}</h3>
                    <div className="item-feature">
                      <ul>
                        {pack.features.map((feature, i) => (
                          <li
                            key={i}
                            style={{
                              textAlign: "left",
                              paddingLeft: "5px",
                              paddingRight: "3px",
                            }}
                          >
                            <i className="fas fa-check"></i> {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Price and Button pinned to the bottom */}
                  <div>
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingTable;
