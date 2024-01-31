import React from "react";
import Layout from "../components/Layout";
import ProfileComponent from "../components/ProfileComponent";
import { FaCss3Alt, FaReact, FaCameraRetro } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { BsCodeSlash, BsDashLg } from "react-icons/bs";
import { TbTestPipe } from "react-icons/tb";
import { ClientsImage, Objective } from "../Data/Constants";
import WhatIDoComponent from "../components/WhatIDo";

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
            className="col-lg-8 col-md-8 col-sm-12  pt-2 ps-4 ms-3 rounded-4 px-5"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
            }}
          >
            {" "}
            <div className=" container-fluid d-flex    flex-column flex-wrap p-3">
              <div className=" py-2 rounded-3 d-flex gap-2 align-items-center">
                <h4> About Me</h4> <BsDashLg />
              </div>
              <div className="ps-2">
                <p className="fw-semibold">{Objective}</p>
              </div>
            </div>
            <div className="what_i_do  mt-2 px-2     ">
              <h4 className="py-2 ">What I Do!</h4>

              <div className=" Whatido d-flex flex-column js   flex-xl-row   flex-md-row  flex-lg-row   gap-2">
                <div
                  className=" p-3 mb-3 rounded-4 "
                  style={{
                    backgroundImage:
                      " linear-gradient(to right, #ff512f, #f09819)",
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
                    backgroundImage:
                      "linear-gradient(to right, #00b4db, #0083b0)",
                    color: "black",
                  }}
                >
                  <WhatIDoComponent
                    logo={<FaReact />}
                    title="Front-End Dev"
                    description="Designing and building the user interface and user experience of websites and web applications using code."
                  />
                </div>
              </div>
              <div className=" Whatido d-flex flex-column   flex-xl-row  flex-md-row   flex-lg-row   gap-2">
                <div
                  className=" p-3 mb-3 rounded-4 "
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #870000, #190a05)",
                    color: "whitesmoke",
                  }}
                >
                  <WhatIDoComponent
                    logo={<FaCss3Alt />}
                    title="ui/ux"
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
                    title="Mongo db"
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
                    logo={<FaCameraRetro />}
                    title="Photo-Graphy"
                    description="Capturing moments and scenes using cameras, composing visuals, and manipulating light to create compelling images."
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
                    logo={<TbTestPipe />}
                    title="streching"
                    description="orem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat."
                  />
                </div>
              </div>
            </div>
            <hr />
            <div>
              <div className="d-flex justify-content-center align-items-center">
                <h4 className="text-center d-flex gap-1 align-items-center">
                  {" "}
                  <BsDashLg /> Daily clients <BsDashLg />
                </h4>
              </div>

              <div className="d-flex flex-row flex-wrap  justify-content-evenly gap-2 p-2  ">
                {ClientsImage.map((data, index) => {
                  return (
                    <div key={index}>
                      <img
                        className="clients_img"
                        src={data}
                        style={{ width: "80px" }}
                        alt="client 1"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
