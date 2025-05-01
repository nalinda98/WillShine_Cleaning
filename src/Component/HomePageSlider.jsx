"use client";
import React, { useEffect } from 'react'

const HomePageSlider = () => {
  // useEffect(() => {
  //   if (typeof window !== "undefined" && window.$) {
  //     $("#ensign-nivoslider-4").nivoSlider({
  //       effect: "random",
  //       slices: 15,
  //       boxCols: 8,
  //       boxRows: 4,
  //       animSpeed: 500,
  //       pauseTime: 5000,
  //       startSlide: 0,
  //       directionNav: true,
  //       controlNav: false,
  //       controlNavThumbs: false,
  //       pauseOnHover: true,
  //       manualAdvance: false,
  //       prevText: "<",
  //       nextText: ">",
  //       randomStart: false,
  //     });
  //   }
  // }, []);

  return (
    <div>
      <div className="slider-area slider-layout1">
        <div className="bend niceties preview-1">
          <div id="ensign-nivoslider-4" className="slides">
            <img src="/img/slider/slide2-1.jpg" alt="slider" title="#slider-direction-1" />
            <img src="/img/slider/slide1-3.jpg" alt="slider" title="#slider-direction-2" />
            <img src="/img/slider/slide1-2.jpg" alt="slider" title="#slider-direction-3" />
            <img src="/img/slider/slide3-1.jpg" alt="slider" title="#slider-direction-4" />
          </div>

          <div id="slider-direction-1" className="t-cn slider-direction">
            <div className="slider-content s-tb slide-1">
              <div className="text-left title-container s-tb-c">
                <div className="container">
                  <div className="slider-sub-text">Professional Office Spaces</div>
                  <h1 className="slider-big-text">Office Cleaning</h1>
                  <div className="slider-paragraph">
                    Maintain a pristine and productive workplace with our tailored office cleaning services.
                  </div>
                  <div className="slider-btn-area">
                    <a href="/service/office-cleaning" className="item-btn-fill">
                      Learn More <i className="fas fa-angle-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="slider-direction-2" className="t-cn slider-direction">
            <div className="slider-content s-tb slide-2">
              <div className="text-left title-container s-tb-c">
                <div className="container">
                  <div className="slider-sub-text">Protect & Shine Your Floors</div>
                  <h1 className="slider-big-text">Stripping & Sealing</h1>
                  <div className="slider-paragraph">
                    Extend the life of your floors with professional stripping and sealing services.
                  </div>
                  <div className="slider-btn-area">
                    <a href="/service/stripping-and-sealing" className="item-btn-fill">
                      Discover More <i className="fas fa-angle-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="slider-direction-3" className="t-cn slider-direction">
            <div className="slider-content s-tb slide-3">
              <div className="text-left title-container s-tb-c">
                <div className="container">
                  <div className="slider-sub-text">Deep Clean, Fresh Feel</div>
                  <h1 className="slider-big-text">Carpet Cleaning</h1>
                  <div className="slider-paragraph">
                    Restore your carpets with our deep cleaning methods, leaving them fresh and sanitized.
                  </div>
                  <div className="slider-btn-area">
                    <a href="/service/carpet-cleaning" className="item-btn-fill">
                      View Service <i className="fas fa-angle-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="slider-direction-4" className="t-cn slider-direction">
            <div className="slider-content s-tb slide-4">
              <div className="text-left title-container s-tb-c">
                <div className="container">
                  <div className="slider-sub-text">Tough Dirt, Easy Wash</div>
                  <h1 className="slider-big-text">Pressure Washing</h1>
                  <div className="slider-paragraph">
                  Blast away dirt, grime, and stains with our powerful and effective pressure washing.
                  </div>
                  <div className="slider-btn-area">
                    <a href="/service/carpet-cleaning" className="item-btn-fill">
                    Book Now <i className="fas fa-angle-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default HomePageSlider;
