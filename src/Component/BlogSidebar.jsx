import React from "react";

const BlogSidebar = () => {
  return (
    <div>
      <>
        <div className="widget widget-search-box">
          <div className="heading-layout4">
            <h4>Search</h4>
          </div>
          <div className="input-group stylish-input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Type here your topic ..."
            />
            <span className="input-group-addon">
              <button type="submit">
                <span className="fas fa-search" aria-hidden="true" />
              </button>
            </span>
          </div>
        </div>
        <div className="widget widget-category">
          <div className="heading-layout4">
            <h4>Categories</h4>
          </div>
          <div className="category-list">
            <ul>
              <li>
                <a href="#">
                  <i className="flaticon-right-arrow" />
                  Cleaning Tips
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="flaticon-right-arrow" />
                  Green Cleaning
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="flaticon-right-arrow" />
                  Moving Cleaning
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="flaticon-right-arrow" />
                  News
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="flaticon-right-arrow" />
                  Product Reviews
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="flaticon-right-arrow" />
                  Spring Cleaning
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="widget widget-recent-post">
          <div className="heading-layout4">
            <h4>Recent Posts</h4>
          </div>
          <ul className="recent-post-list">
            <li>
              <div className="post-date">
                <i className="far fa-clock" /> 14 July, 2019
              </div>
              <h6 className="item-title">
                <a href="single-blog1.html">
                  Why Clany’s a life-saver for my flatshare!
                </a>
              </h6>
            </li>
            <li>
              <div className="post-date">
                <i className="far fa-clock" /> 14 July, 2019
              </div>
              <h6 className="item-title">
                <a href="single-blog1.html">
                  Why Clany’s a life-saver for my flatshare!
                </a>
              </h6>
            </li>
            <li>
              <div className="post-date">
                <i className="far fa-clock" /> 14 July, 2019
              </div>
              <h6 className="item-title">
                <a href="single-blog1.html">
                  Why Clany’s a life-saver for my flatshare!
                </a>
              </h6>
            </li>
          </ul>
        </div>
        {/* <div className="widget widget-newsletter">
          <div className="item-img">
            <img src="img/figure/widget.png" alt="mail" />
          </div>
          <div className="item-content">
            <h3 className="item-title">Newsletter</h3>
            <p>Subscribe us &amp; stay with updates</p>
            <form className="form-box">
              <div className="row">
                <div className="col-12 form-group">
                  <input
                    type="email"
                    placeholder="Enter your e-mail"
                    className="form-control"
                    name="name"
                    data-error="Name field is required"
                    required=""
                  />
                  <div className="help-block with-errors" />
                </div>
                <div className="col-12 form-group">
                  <button type="submit" className="item-btn">
                    Subscribe
                  </button>
                </div>
              </div>
              <div className="form-response" />
            </form>
          </div>
        </div> */}
        <div className="widget widget-archive">
          <div className="heading-layout4">
            <h4>Archives</h4>
          </div>
          <div className="archive-list">
            <ul>
              <li>
                <a href="#">
                  January 2018 <span>(15)</span>
                </a>
              </li>
              <li>
                <a href="#">
                  February 2018 <span>(15)</span>
                </a>
              </li>
              <li>
                <a href="#">
                  March 2018 <span>(15)</span>
                </a>
              </li>
              <li>
                <a href="#">More +</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="widget widget-tag">
          <div className="heading-layout4">
            <h4>Tags</h4>
          </div>
          <ul className="tag-list">
            <li>
              <a href="#">Cleaner</a>
            </li>
            <li>
              <a href="#">Office Cleaning</a>
            </li>
            <li>
              <a href="#">Glass Cleaning</a>
            </li>
            <li>
              <a href="#">Kitchen Cleaning</a>
            </li>
            <li>
              <a href="#">Apartment Cleaning</a>
            </li>
            <li>
              <a href="#">Floor Cleaning</a>
            </li>
          </ul>
        </div>
      </>
    </div>
  );
};

export default BlogSidebar;
