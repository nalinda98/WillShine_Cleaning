import React from "react";
import BlogSidebar from "./BlogSidebar";
import BlogPost from "./BlogPost";

const BlogContent = () => {
  return (
    <div>
      <section className="section-padding-12">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                {BlogPost.map((post, index) => (
                  <div key={index} className="col-md-4 col-12">
                    <div className="blog-box-layout1">
                      <div className="item-img">
                        <a href={post.path}>
                          <img src={post.img} alt="blog-thumb" />
                        </a>
                      </div>
                      <div className="item-content">
                        <div className="item-date">
                          <i className="fas fa-calendar-alt" /> {post.date}
                        </div>
                        <h3 className="item-title">
                          <a href={post.path}>{post.title}</a>
                        </h3>
                        <div className="item-author">By {post.author}</div>
                        <p>
                          Aimply dummy text of the printing anden type setting
                          industrym Ipsum has been the industry's standard.
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {/* <div className="pagination-layout1 text-center pt-5">
                <ul>
                  <li>
                    <a href="/blog/1" className="nav-item active">
                      1
                    </a>
                  </li>
                  <li>
                    <a href="/blog/2" className="nav-item">
                      2
                    </a>
                  </li>
                  <li>
                    <a href="/blog/3" className="nav-item">
                      3
                    </a>
                  </li>
                  <li>
                    <a href="/blog/4" className="nav-item">
                      4
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>

            {/* <div className="col-lg-4 sidebar-break-md sidebar-widget-area">
              <BlogSidebar />
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogContent;
