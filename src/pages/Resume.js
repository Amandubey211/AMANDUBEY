import React from "react";
import Layout from "../components/Layout";
import { BsDashLg } from "react-icons/bs";

import "./Styles/Resume.css";
import { FcLandscape } from "react-icons/fc";
import ProfileComponent from "../components/ProfileComponent";
import EductionComponent from "../components/EductionComponent";
import Knowledge from "../components/Knowledge";
import TeckStack from "../components/TeckStack";
import Intrest from "../components/Intrest";

const Resume = () => {
  return (
    <Layout title="Resume page">
      <div className="resume_main">
        <div className="row container-fluid ">
          <div className="col-lg-3 col-md-3 col-sm-12 p-2 rounded-3">
            <ProfileComponent />
          </div>
          <div
            className="col-lg-8 col-md-8 col-sm-12  ms-3 p-4 rounded-4"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
            }}
          >
            <EductionComponent />
            <div className="row p-4 ">
              <div className="col-sm-12 col-md-6 col-xl-6 col-lg-6 mb-3">
                <TeckStack />
              </div>
              <div className="col-sm-12 col-md-6 col-xl-6 col-lg-6 mb-3">
                <Knowledge />
              </div>
            </div>
            <Intrest />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Resume;
