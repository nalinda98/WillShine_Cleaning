import React from "react";
import Banner from "../../Component/Banner";
import BlogContent from "../../Component/BlogContent";

const Blog = () => {
  return (
    <div>
      <Banner topic={"Our Latest Blog"} path={"Blogs"} />
      <BlogContent />
    </div>
  );
};

export default Blog;
