import Layout from "../components/Layout";
import ProfileComponent from "../components/ProfileComponent";
import BlogCard from "../components/BlogCard";
import BlogData from "../Data/BlogData";

import { Suspense, lazy } from "react";
import FallBack from "../components/FallBack";
const BlogMainSection = lazy(() =>
  import("../components/MainSections/BlogMainSection")
);
const Blog = () => {
  return (
    <Layout title="blog page">
      <div className="blog_main">
        <div className="row container-fluid ">
          <div className="col-lg-3 col-md-3 col-sm-12 p-2 rounded-3">
            <ProfileComponent />
          </div>
          <Suspense fallback={<FallBack />}>
            <BlogMainSection />
          </Suspense>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
