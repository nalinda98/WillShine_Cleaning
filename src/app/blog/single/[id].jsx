"use client"; // Required because we're using client-side features (though we could make this server-side if needed)

import React from "react";

// Sample blog data (same as in BlogContent for consistency)
const blogPosts = [
  {
    img: "img/blog/blog3.jpg",
    date: "24 July, 2019",
    title: "What is Best domin Name For Business",
    author: "Mark Wily",
    likes: 6,
    comments: 2,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    img: "img/blog/blog4.jpg",
    date: "24 July, 2019",
    title: "What is Best domin Name For Business",
    author: "Mark Wily",
    likes: 6,
    comments: 2,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    img: "img/blog/blog5.jpg",
    date: "24 July, 2019",
    title: "What is Best domin Name For Business",
    author: "Mark Wily",
    likes: 6,
    comments: 2,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    img: "img/blog/blog6.jpg",
    date: "24 July, 2019",
    title: "What is Best domin Name For Business",
    author: "Mark Wily",
    likes: 6,
    comments: 2,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    img: "img/blog/blog7.jpg",
    date: "24 July, 2019",
    title: "What is Best domin Name For Business",
    author: "Mark Wily",
    likes: 6,
    comments: 2,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    img: "img/blog/blog8.jpg",
    date: "24 July, 2019",
    title: "What is Best domin Name For Business",
    author: "Mark Wily",
    likes: 6,
    comments: 2,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    img: "img/blog/blog1.jpg",
    date: "24 July, 2019",
    title: "What is Best domin Name For Business",
    author: "Mark Wily",
    likes: 6,
    comments: 2,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    img: "img/blog/blog2.jpg",
    date: "24 July, 2019",
    title: "What is Best domin Name For Business",
    author: "Mark Wily",
    likes: 6,
    comments: 2,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

// SingleBlog component as the page
export default function SingleBlog({ params }) {
  const { id } = params; // Get the blog ID from params (App Router)

  // Find the blog post by ID (ID is 1-based in the URL, but array is 0-based)
  const post = blogPosts[id ? parseInt(id) - 1 : 0];

  if (!post) {
    return <div>Blog post not found</div>;
  }

  return (
    <div>
      <section className="section-padding-12">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-box-layout1">
                <div className="item-img">
                  <img src={post.img} alt="blog-thumb" />
                </div>
                <div className="item-content">
                  <div className="item-date">
                    <i className="fas fa-calendar-alt" /> {post.date}
                  </div>
                  <h3 className="item-title">{post.title}</h3>
                  <div className="item-author">By {post.author}</div>
                  <p>{post.content}</p>
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <i className="fas fa-heart" />
                        <span>{post.likes.toString().padStart(2, "0")}</span>{" "}
                        Likes
                      </li>
                      <li>
                        <i className="fas fa-comment" />
                        <span>{post.comments.toString().padStart(2, "0")}</span>{" "}
                        Comments
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}