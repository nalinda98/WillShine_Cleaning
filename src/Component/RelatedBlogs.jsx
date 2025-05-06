import React from "react";
import BlogPost from "../utils/BlogPost";

const RelatedBlogs = ({ category }) => {
  return (
    <div>
      <div className="widget widget-recent-post">
        <div className="heading-layout4">
          <h4>Related Blogs</h4>
        </div>
        <ul className="recent-post-list">
          {BlogPost.map(
            (post, index) =>
              post.category.includes(category) && (
                <>
                  <li key={index}>
                    <div className="item-img">
                      <a href={`/blog/${post.link}`}>
                        <img src={post.img} alt="blog-thumb" />
                      </a>
                    </div>
                    <div className="item-content">
                      <h6 className="item-title">
                        <a href={`/blog/${post.link}`}>{post.title}</a>
                      </h6>
                      <div className="item-date">
                        <i className="fas fa-calendar-alt" /> {post.date}
                      </div>
                    </div>
                  </li>
                </>
              )
          )}
        </ul>
      </div>
    </div>
  );
};

export default RelatedBlogs;
