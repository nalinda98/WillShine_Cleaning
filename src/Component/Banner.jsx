import React from "react";

const Banner = ({
    title,
    path
}) => {
  return (
    <div>
      <section
        className="inner-page-banner bg-common"
        data-bg-image="img/figure/breadcumb.jpg"
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
