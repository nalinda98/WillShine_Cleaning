"use client";
import React, { useEffect } from "react";

const Banner = ({ title, path, pathName, path2, path2Name }) => {
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
        style={{
          width: "100%",
          height: "150px",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumbs-area">
                <h1>{title}</h1>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  {path && (
                    <li>
                      <a href={path}>&nbsp;{pathName}</a>
                    </li>
                  )}
                  {path2 && (
                    <li>
                      <a href={path2}>&nbsp;{path2Name}</a>
                    </li>
                  )}
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
