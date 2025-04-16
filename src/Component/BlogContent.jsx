import React from "react";
import BlogSidebar from "./BlogSidebar";

const blogPosts = [
  {
    img: "img/blog/blog3.jpg",
    date: "24 July, 2019",
    title: "What is Best domin Name For Business",
    author: "Mark Wily",
    likes: 6,
    comments: 2,
  },
  {
    img: "img/blog/blog4.jpg",
    date: "24 July, 2019",
    title: "What is Best domin Name For Business",
    author: "Mark Wily",
    likes: 6,
    comments: 2,
  },
  {
    img: "img/blog/blog5.jpg",
    date: "24 July, 2019",
    title: "What is Best domin Name For Business",
    author: "Mark Wily",
    likes: 6,
    comments: 2,
  },
  {
    img: "img/blog/blog6.jpg",
    date: "24 July, 2019",
    title: "What is Best domin Name For Business",
    author: "Mark Wily",
    likes: 6,
    comments: 2,
  },
  {
    img: "img/blog/blog7.jpg",
    date: "24 July, 2019",
    title: "What is Best domin Name For Business",
    author: "Mark Wily",
    likes: 6,
    comments: 2,
  },
  {
    img: "img/blog/blog8.jpg",
    date: "24 July, 2019",
    title: "What is Best domin Name For Business",
    author: "Mark Wily",
    likes: 6,
    comments: 2,
  },
  {
    img: "img/blog/blog1.jpg",
    date: "24 July, 2019",
    title: "What is Best domin Name For Business",
    author: "Mark Wily",
    likes: 6,
    comments: 2,
  },
  {
    img: "img/blog/blog2.jpg",
    date: "24 July, 2019",
    title: "What is Best domin Name For Business",
    author: "Mark Wily",
    likes: 6,
    comments: 2,
  },
];

const BlogContent = () => {
  return (
    <div>
      <section className="section-padding-12">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                {blogPosts.map((post, index) => (
                  <div key={index} className="col-md-6 col-12">
                    <div className="blog-box-layout1">
                      <div className="item-img">
                        <a href={`/blog/single/${index + 1}`}>
                          <img src={post.img} alt="blog-thumb" />
                        </a>
                      </div>
                      <div className="item-content">
                        <div className="item-date">
                          <i className="fas fa-calendar-alt" /> {post.date}
                        </div>
                        <h3 className="item-title">
                          <a href={`/blog/single/${index + 1}`}>{post.title}</a>
                        </h3>
                        <div className="item-author">By {post.author}</div>
                        <p>
                          Aimply dummy text of the printing anden type setting
                          industrym Ipsum has been the industry's standard.
                        </p>
                        <div className="entry-meta">
                          <ul>
                            <li>
                              <i className="fas fa-heart" />
                              <span>
                                {post.likes.toString().padStart(2, "0")}
                              </span>{" "}
                              Likes
                            </li>
                            <li>
                              <i className="fas fa-comment" />
                              <span>
                                {post.comments.toString().padStart(2, "0")}
                              </span>{" "}
                              <a href="#">Comments</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="pagination-layout1 text-center pt-5">
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
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4 sidebar-break-md sidebar-widget-area">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogContent;
