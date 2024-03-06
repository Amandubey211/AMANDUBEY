import React from "react";
import Layout from "../components/Layout";
import ProfileComponent from "../components/ProfileComponent";
import ProjectCard from "../components/ProjectCard";
import BakeNCake from "../Images/Projects/bake-n-cake thumbnail.png";
import AmanV3 from "../Images/Projects/AmanV3.png";
import AmanV2 from "../Images/Projects/AmanV2.png";
import AmanV1 from "../Images/Projects/AmanV1.png";
import Dashboard from "../Images/Projects/Dashboard.png";
import Aistudios from "../Images/Projects/AiStudio.png";
import ChatApp from "../Images/Projects/ChatApp.png";
import soundWizard from "../Images/Projects/soundWizard.png";
import ProjectData from "../Data/ProjectData";

const Work = () => {
  return (
    <Layout title="Work page">
      <div className="work_main">
        <div className="row container-fluid ">
          <div className="col-lg-3 col-md-3 col-sm-12 p-2 rounded-3">
            <ProfileComponent />
          </div>
          <div
            className="col-lg-8 col-md-8 col-sm-12 text-center  pt-3 ps-3 ms-3 rounded-2 "
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
            }}
          >
            <h5 className="fw-bold text-uppercase mb-2   ps-2">
              {" "}
              WEB projects
            </h5>{" "}
            <div className="d-flex flex-row flex-wrap gap-4">
              {ProjectData.map((data) => {
                return <ProjectCard key={data.title} data={data} />;
              })}
            </div>
            <div className=" fw-semibold ">
              {" "}
              <p className="text-center text-capitalize pt-3  ">
                next project releasing on
                <span className="fw-bold"> nov 23</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Work;
