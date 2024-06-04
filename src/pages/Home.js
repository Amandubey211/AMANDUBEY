import React from "react";
import Layout from "../components/Layout";
import ProfileComponent from "../components/ProfileComponent";
import { FaCss3Alt, FaReact } from "react-icons/fa";
import { GrOptimize } from "react-icons/gr";
import { BiLogoMongodb } from "react-icons/bi";
import { BsCodeSlash, BsDashLg } from "react-icons/bs";
import { IoLogoNodejs } from "react-icons/io5";
import { Objective } from "../Data/Constants";
import WhatIDoComponent from "../components/WhatIDo";
import "./Styles/Home.css";
import { SkillsLogo } from "../Data/SkillsLogo";
import { Tooltip } from "@chakra-ui/react";
import HomeMainSection from "../components/MainSections/HomeMainSection";

const Home = () => {
  return (
    <Layout title="home page">
      <div className="home_main">
        <div className="row container-fluid ">
          <div className="col-lg-3 col-md-3 col-sm-12 p-2 rounded-3">
            <div className=" ">
              <ProfileComponent HOME={true} />
            </div>
          </div>
          <div
            className="col-lg-8 col-md-8 col-sm-12  ps-4 ms-3 rounded-4 px-5"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
            }}
          >
            {" "}
            <HomeMainSection />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
