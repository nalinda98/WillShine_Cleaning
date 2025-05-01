import Image from "next/image";
import React from "react";
import BlogPost from "./BlogPost";

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
          {BlogPost.map((post, index) =>
            index > 2 ? null : (
              <div key={index} className="col-lg-4 col-md-6 col-12">
                <div className="blog-box-layout1 bg-assh">
                  <div className="item-img">
                    <a href={`/blog/${post.link}`}>
                      <img src={post.img} alt="blog-thumb" />
                    </a>
                  </div>
                  <div className="item-content">
                    <div className="item-date">
                      <i className="fas fa-calendar-alt" />
                      {post.date}
                    </div>
                    <h3 className="item-title">
                      <a href={`/blog/${post.link}`}>{post.title}</a>
                    </h3>
                    <div className="item-author">By {post.author}</div>
                    <p>{post.description}</p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default HomeBlog;
