import React from "react";
import owner from "../Images/Aman Dubey.png";
import { toast } from "react-hot-toast";
import "./component-Styles/Profilecomponent.css";
import { Link } from "react-router-dom";
import CV from "../Images/Results/CV.pdf";
import { FcPhoneAndroid, FcGoogle, FcGlobe, FcCalendar } from "react-icons/fc";

import { ImFolderDownload } from "react-icons/im";

import MyLinks from "../Data/MyLinks";
import { Tooltip } from "@chakra-ui/react";
const ProfileComponent = ({ HOME }) => {
  return (
    <div>
      <div className="proile_section">
        <div className="profile_header ">
          <div className="profile_img d-flex   justify-content-center flex-center">
            <h5 className="text-uppercase  "> Aman Dubey</h5>
          </div>
          <div className="profile_img pb-2 d-flex  justify-content-center flex-center ">
            <img
              loading="eager"
              className="Image "
           
              src={owner}
              alt="Aman Dubey Img"
            />
          </div>
          <div className=" rounded-3  ">
            <div className=" d-flex   justify-content-center ">
              <h6
                className="text-capitalize btn btn-dark "
                style={{ fontSize: "12px" }}
              >
                Full-Stack MERN Developer
              </h6>
            </div>
            <div className=" d-flex  gap-3  justify-content-center  rounded-3 ">
              {" "}
              {MyLinks.map((data) => {
                return (
                  <Tooltip label={data.role}>
                    <Link
                      title={data.role}
                      key={data.id}
                      target="_blank"
                      className="text-decoration-none text-reset"
                      to={data.url}
                    >
                      {data.logo}
                    </Link>
                  </Tooltip>
                );
              })}
            </div>
          </div>
        </div>
        {HOME && (
          <div className="profile-main  mb-3 d-flex  justify-content-center  ">
            <div className=" d-flex flex-column gap-2 rounded-2">
              <div className=" rounded-2 px-4 my-2  py-3 fs-md-3 fs-lg-2 fs-xl-1 justify-content-between  align-items-center    d-flex flex-row gap-2 hoverButton">
                {" "}
                <span>
                  <FcGoogle
                    role="button"
                    className="fs-3 rounded-2  p-1"
                    style={{
                      boxShadow:
                        "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px",
                    }}
                  />{" "}
                </span>
                <span style={{ fontSize: "12px" }} className="fw-semibold px-2">
                  amandubey8833@gmail.com
                </span>{" "}
              </div>
              <div className="hoverButton rounded-2 px-4  align-items-center  justify-content-between   py-3 d-flex flex-row gap-2">
                {" "}
                <span>
                  <FcPhoneAndroid
                    role="button"
                    className="fs-3 rounded-2  p-1"
                    style={{
                      boxShadow:
                        "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px",
                    }}
                  />
                </span>
                <span className="fw-bold" style={{ fontSize: "12px" }}>
                  +91 7700042037
                </span>
              </div>
              <div className="hoverButton  rounded-2 px-4  justify-content-between   py-3 align-items-center  d-flex flex-row gap-2 ">
                {" "}
                <span>
                  <FcGlobe
                    role="button"
                    className="fs-3 rounded-2  p-1"
                    style={{
                      boxShadow:
                        "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px",
                    }}
                  />{" "}
                </span>
                <span className="fw-bold" style={{ fontSize: "12px" }}>
                  Mumbai (IN)
                </span>
              </div>
              <div className="hoverButton rounded-2 py-3 px-4  justify-content-between  align-items-center   d-flex flex-row gap-2">
                {" "}
                <span>
                  <FcCalendar
                    role="button"
                    className="fs-3 rounded-2  p-1"
                    style={{
                      boxShadow:
                        "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px",
                    }}
                  />{" "}
                </span>
                <span className="fw-bold" style={{ fontSize: "12px" }}>
                  29-1-2002
                </span>{" "}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="profile_footer mt-4">
        <div className="d-flex flex-row justify-content-center align-items-center">
          <button
            className="button-57 align-items-center gap-3 rounded-3 d-flex p-2"
            role="button"
          >
            {" "}
            <ImFolderDownload className="fs-3  " />{" "}
            <span className="text-center fw-semibold fs-5"> Get CV</span>
            <a
              href={CV}
              onClick={() =>
                CV
                  ? toast.success("downloading file please wait...", {
                      position: "bottom-left",
                    })
                  : toast.error("file not present", {
                      position: "bottom-left",
                    })
              }
              download
              className="pt-2 text-reset"
            >
              <span className="pt-2">download</span>{" "}
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
