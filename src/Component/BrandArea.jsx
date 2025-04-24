import React from "react";

const BrandArea = () => {
  return (
    <div>
      <section className="brand-wrap-layout1">
        <div className="container">
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
            data-r-x-medium={2}
            data-r-x-medium-nav="true"
            data-r-x-medium-dots="false"
            data-r-small={3}
            data-r-small-nav="true"
            data-r-small-dots="false"
            data-r-medium={4}
            data-r-medium-nav="true"
            data-r-medium-dots="false"
            data-r-large={5}
            data-r-large-nav="true"
            data-r-large-dots="false"
            data-r-extra-large={5}
            data-r-extra-large-nav="true"
            data-r-extra-large-dots="false"
          >
            <div className="brand-box-layout1">
              <div className="item-img">
                <img src="img/brand/brand1.png" alt="Brand" />
              </div>
            </div>
            <div className="brand-box-layout1">
              <div className="item-img">
                <img src="img/brand/brand2.png" alt="Brand" />
              </div>
            </div>
            <div className="brand-box-layout1">
              <div className="item-img">
                <img src="img/brand/brand3.png" alt="Brand" />
              </div>
            </div>
            <div className="brand-box-layout1">
              <div className="item-img">
                <img src="img/brand/brand4.png" alt="Brand" />
              </div>
            </div>
            <div className="brand-box-layout1">
              <div className="item-img">
                <img src="img/brand/brand5.png" alt="Brand" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandArea;
