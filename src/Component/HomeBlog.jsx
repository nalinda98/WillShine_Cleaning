import Image from "next/image";
import React from "react";

const HomeBlog = () => {
  return (
    <section className="section-padding-lg section-bubble">
      <div className="container">
        <div className="heading-layout1">
          <h2> Our Latest Blogs</h2>
          <p>
            Perspiciatis unde omnis iste natus error sit voluptatem accusantium
            fa-angle-double-up oremque laudantium, totam remeaque ipsa
          </p>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="blog-box-layout1 bg-assh">
              <div className="item-img">
                <a href="single-blog1.html">
                  <img src="/img/blog/blog5.jpg" alt="blog-thumb" />
                </a>
              </div>
              <div className="item-content">
                <div className="item-date">
                  <i className="fas fa-calendar-alt" />
                  24 July, 2019
                </div>
                <h3 className="item-title">
                  <a href="single-blog1.html">
                    What is Best domin Name For Business
                  </a>
                </h3>
                <div className="item-author">By Mark Wily</div>
                <p>
                  Aimply dummy text of the printing anden type setting industrym
                  Ipsum has been the industry's standard.
                </p>
                <div className="entry-meta">
                  <ul>
                    <li>
                      <i className="fas fa-heart" />
                      <span>06</span> Likes
                    </li>
                    <li>
                      <i className="fas fa-comment" />
                      <span>02</span> <a href="#">Comments</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="blog-box-layout1 bg-assh">
              <div className="item-img">
                <a href="single-blog1.html">
                  <img src="img/blog/blog8.jpg" alt="blog-thumb" />
                </a>
              </div>
              <div className="item-content">
                <div className="item-date">
                  <i className="fas fa-calendar-alt" />
                  24 July, 2019
                </div>
                <h3 className="item-title">
                  <a href="single-blog1.html">
                    What is Best domin Name For Business
                  </a>
                </h3>
                <div className="item-author">By Mark Wily</div>
                <p>
                  Aimply dummy text of the printing anden type setting industrym
                  Ipsum has been the industry's standard.
                </p>
                <div className="entry-meta">
                  <ul>
                    <li>
                      <i className="fas fa-heart" />
                      <span>06</span> Likes
                    </li>
                    <li>
                      <i className="fas fa-comment" />
                      <span>02</span> <a href="#">Comments</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 d-block d-md-none d-lg-block col-12">
            <div className="blog-box-layout1 bg-assh">
              <div className="item-img">
                <a href="single-blog1.html">
                  <img src="img/blog/blog6.jpg" alt="blog-thumb" />
                </a>
              </div>
              <div className="item-content">
                <div className="item-date">
                  <i className="fas fa-calendar-alt" />
                  24 July, 2019
                </div>
                <h3 className="item-title">
                  <a href="single-blog1.html">
                    What is Best domin Name For Business
                  </a>
                </h3>
                <div className="item-author">By Mark Wily</div>
                <p>
                  Aimply dummy text of the printing anden type setting industrym
                  Ipsum has been the industry's standard.
                </p>
                <div className="entry-meta">
                  <ul>
                    <li>
                      <i className="fas fa-heart" />
                      <span>06</span> Likes
                    </li>
                    <li>
                      <i className="fas fa-comment" />
                      <span>02</span> <a href="#">Comments</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBlog;
