import React from 'react'

const HomePageSlider = () => {
  return (
    <div>
      <div className="slider-area slider-layout1">
        <div className="bend niceties preview-1">
          <div id="ensign-nivoslider-4" className="slides">
            <img
              src="img/slider/slide2-1.jpg"
              alt="slider"
              title="#slider-direction-1"
            />
            <img
              src="img/slider/slide1-3.jpg"
              alt="slider"
              title="#slider-direction-2"
            />
            <img
              src="img/slider/slide1-2.jpg"
              alt="slider"
              title="#slider-direction-3"
            />
          </div>

          <div id="slider-direction-1" className="t-cn slider-direction">
            <div className="slider-content s-tb slide-1">
              <div className="text-left title-container s-tb-c">
                <div className="container">
                  <div className="slider-sub-text">
                    Professional. Reliable. Affordable.
                  </div>
                  <h1 className="slider-big-text">Your Space, Spotless</h1>
                  <div className="slider-paragraph">
                    Blossom Property Services delivers high-quality residential and commercial cleaning solutions tailored to your needs.
                  </div>
                  <div className="slider-btn-area">
                    <a href="#" className="item-btn-fill">
                      Book a Free Quote
                      <i className="fas fa-angle-right" />
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
                  <div className="slider-sub-text">
                    100% Cleaning Satisfaction Guaranteed
                  </div>
                  <h1 className="slider-big-text">Because Clean Matters</h1>
                  <div className="slider-paragraph">
                    We use eco-friendly products and advanced cleaning methods to make your property sparkle—without compromise.
                  </div>
                  <div className="slider-btn-area">
                    <a href="#" className="item-btn-fill">
                      Explore Our Services
                      <i className="fas fa-angle-right" />
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
                  <div className="slider-sub-text">
                    Trusted by Homes & Businesses Alike
                  </div>
                  <h1 className="slider-big-text">Let Us Do the Dirty Work</h1>
                  <div className="slider-paragraph">
                    From daily cleaning to tailored monthly solutions, we ensure peace of mind with every clean. Fast. Friendly. Reliable.
                  </div>
                  <div className="slider-btn-area">
                    <a href="#" className="item-btn-fill">
                      Get in Touch Today
                      <i className="fas fa-angle-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default HomePageSlider
