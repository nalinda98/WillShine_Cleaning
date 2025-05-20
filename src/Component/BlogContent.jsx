import React from "react";
import BlogSidebar from "./BlogSidebar";
import BlogPost from "../utils/BlogPost";
import Image from "next/image";

const BlogContent = () => {
  return (
    <div>
      <section className="section-padding-12">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                {BlogPost
                .sort((a, b) => new Date(b.date) - new Date(a.date))
                .map((post, index) => (
                  <div key={index} className="col-lg-4 col-md-6 col-12 mb-4">
                    <div className="blog-box-layout1 bg-assh h-100 d-flex flex-column">
                      <div
                        className="item-img"
                        style={{ height: "220px", overflow: "hidden" }}
                      >
                        <a href={`/blog/${post.link}`}>
                          <Image
                            src={post.img}
                            alt="blog-thumb"
                            width={400}
                            height={220}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          />
                        </a>
                      </div>
                      <div className="item-content flex-grow-1 d-flex flex-column justify-content-between">
                        {/* Top: Date */}
                        <div className="item-date ">
                          <i className="fas fa-calendar-alt mr-1" />
                          {post.date}
                        </div>

                        {/* Middle: Title */}
                        <div className=" ">
                          <h3 className="item-title mb-0">
                            <a href={`/blog/${post.link}`}>{post.title}</a>
                          </h3>
                        </div>

                        {/* Bottom: Author */}
                        <div className="item-author">By {post.author}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogContent;
