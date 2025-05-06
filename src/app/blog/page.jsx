import Banner from "../../Component/Banner";
import BlogContent from "../../Component/BlogContent";

const Blog = () => {
  return (
    <div>
      <Banner
        title={"Our Latest Blog"}
        path={"/blog"}
        pathName={"Blog"}
        path2={""}
        path2Name={""}
      />
      <BlogContent />
    </div>
  );
};

export default Blog;
