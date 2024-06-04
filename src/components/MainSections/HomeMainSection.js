import React from "react";
import { BsCodeSlash, BsDashLg } from "react-icons/bs";
import { Objective } from "../../Data/Constants";
import WhatIDoComponent from "../WhatIDo";
import { FaCss3Alt, FaReact } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { GrOptimize } from "react-icons/gr";
import { IoLogoNodejs } from "react-icons/io5";
import { SkillsLogo } from "../../Data/SkillsLogo";
import { Tooltip } from "@chakra-ui/react";

const HomeMainSection = () => {
  return (
    <>
      <div className=" container-fluid d-flex    flex-column flex-wrap p-3">
        <div className=" py-1 rounded-3 d-flex gap-2 align-items-center">
          <h4> About Me</h4> <BsDashLg />
        </div>
        <div className="ps-2 ">
          <p className="fw-semibold text-capitalize  fs-6">{Objective}</p>
        </div>
      </div>
      <div className="what_i_do  px-2     ">
        <h4>What I Do!</h4>

        <div className=" Whatido d-flex flex-column js   flex-xl-row   flex-md-row  flex-lg-row   gap-2">
          <div
            className=" p-3 mb-3 rounded-4 "
            style={{
              backgroundImage: " linear-gradient(to right, #ff512f, #f09819)",
              color: "black",
            }}
          >
            <WhatIDoComponent
              logo={<BsCodeSlash />}
              title="WEB-DEVELOPMENT"
              description="Creating websites or web applications using technologies like HTML, CSS, JavaScript, and server-side scripting for online functionality."
            />
          </div>
          <div
            className=" p-3 mb-3 rounded-4 "
            style={{
              backgroundImage: "linear-gradient(to right, #00b4db, #0083b0)",
              color: "black",
            }}
          >
            <WhatIDoComponent
              logo={<FaReact />}
              title="REACT"
              description="Designing and building the user interface and user experience of websites and web applications using code."
            />
          </div>
        </div>
        <div className=" Whatido d-flex flex-column   flex-xl-row  flex-md-row   flex-lg-row   gap-2">
          <div
            className=" p-3 mb-3 rounded-4 "
            style={{
              backgroundImage: "linear-gradient(to right, #870000, #190a05)",
              color: "whitesmoke",
            }}
          >
            <WhatIDoComponent
              logo={<FaCss3Alt />}
              title="UI/UX"
              description="UI (User Interface): Designing the visual layout and elements of a digital product for user interaction."
            />
          </div>
          <div
            className=" p-3 mb-3 rounded-4 "
            style={{
              backgroundImage:
                "radial-gradient( circle 759px at -6.7% 50%, rgba(80,131,73,1) 0%, rgba(140,209,131,1) 26.2%, rgba(178,231,170,1) 50.6%, rgba(144,213,135,1) 74.1%, rgba(75,118,69,1) 100.3% )",
              color: "black",
            }}
          >
            <WhatIDoComponent
              logo={<BiLogoMongodb />}
              title="Mongo-DB"
              description="NoSQL database for storing, retrieving, and managing unstructured or semi-structured data, widely used in web development."
            />
          </div>
        </div>
        <div className=" Whatido d-flex flex-column    flex-lg-row  flex-md-row  flex-xl-row gap-2">
          <div
            className=" p-3 mb-3 rounded-4 "
            style={{
              backgroundImage:
                "radial-gradient(circle farthest-side, #fceabb, #f8b500)",
              color: "black",
            }}
          >
            <WhatIDoComponent
              logo={<GrOptimize />}
              title="SEO"
              description=" excel in optimizing websites for search engines, leveraging techniques like keyword analysis, on-page and off-page optimization, and link building."
            />
          </div>
          <div
            className=" p-3 mb-3 rounded-4 "
            style={{
              backgroundImage:
                "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
              color: "whitesmoke",
            }}
          >
            <WhatIDoComponent
              logo={<IoLogoNodejs />}
              title="Node JS"
              description="We have extensive experience with Node.js, having successfully developed and deployed multiple projects, showcasing our proficiency in this technology"
            />
          </div>
        </div>
      </div>
      <hr />
      <div>
        <div className="d-flex justify-content-center align-items-center">
          <h4 className="text-center d-flex gap-1  align-items-center">
            {" "}
            <BsDashLg />
            Primary Skills <BsDashLg />
          </h4>
        </div>
        <div className="logos d-flex flex-nowrap  my-2">
          <div className="d-flex flex-row    client-logo-slides  gap-5 p-2  ">
            {SkillsLogo.map((data, index) => {
              return (
                <Tooltip label={data.label}>
                  <img
                    key={data.id + index}
                    className="clients_img  "
                    src={data.logo}
                    alt={`client${index + 1}`}
                  />
                </Tooltip>
              );
            })}

            {SkillsLogo.map((data, index) => {
              return (
                <Tooltip label={data.label}>
                  <img
                    key={data.id}
                    className="clients_img"
                    src={data.logo}
                    alt={`client${index + 1}`}
                  />
                </Tooltip>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeMainSection;
