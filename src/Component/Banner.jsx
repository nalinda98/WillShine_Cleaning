"use client";
import React, { useEffect } from "react";

const Banner = ({ title, path }) => {
  useEffect(() => {
    // Manually set background-image if needed
    const section = document.querySelector(".inner-page-banner.bg-common");
    if (section && section.dataset.bgImage) {
      section.style.backgroundImage = `url(${section.dataset.bgImage})`;
    }
  }, []);
  return (
    <div>
      <section
        className="inner-page-banner bg-common"
        data-bg-image="/img/figure/breadcumb.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumbs-area">
                <h1>{title}</h1>
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>{path}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
