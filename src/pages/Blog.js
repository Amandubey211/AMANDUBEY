import Layout from "../components/Layout";
import ProfileComponent from "../components/ProfileComponent";
import BlogCard from "../components/BlogCard";
import BlogData from "../Data/BlogData";

const Blog = () => {
  return (
    <Layout title="blog page">
      <div className="blog_main">
        <div className="row container-fluid ">
          <div className="col-lg-3 col-md-3 col-sm-12 p-2 rounded-3">
            <ProfileComponent />
          </div>
          <div
            className=" ms-3  col-lg-8 col-md-8 col-sm-12 p-2 ps-3 rounded-3"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
            }}
          >
            {" "}
            <div className="p-3 rounded-4  mb-1  d-flex flex-column flex-wrap gap-2   ">
              <h4 style={{ fontWeight: "bolder" }}>#Thinker</h4>
              <div>
                {" "}
                <h6>A Slight Touch Of my intrests .</h6>
              </div>
            </div>
            <div className="d-flex flex-row flex-wrap gap-2  ">
              {BlogData.map((blog) => {
                return <BlogCard key={blog.blogTitle} BlogData={blog} />;
              })}
            </div>
            <div className="d-flex justify-content-center text-capitalize py-2 fs-4 fw-bold">
              <span>things will be added soon...</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
