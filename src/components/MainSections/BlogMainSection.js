import React from "react";
import BlogData from "../../Data/BlogData";
import BlogCard from "../BlogCard";

const BlogMainSection = () => {
  return (
    <div
      className="   col-lg-9 col-md-8 col-sm-12 p-2 ps-3 rounded-3"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
      }}
    >
      {" "}
      <div className="p-3 rounded-4  mb-1  d-flex flex-column flex-wrap gap-2   ">
        <h4 style={{ fontWeight: "bolder" }}>Recent Achivements</h4>
        <div> {/* <h6>A Slight Touch Of my intrests .</h6> */}</div>
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
  );
};

export default BlogMainSection;
