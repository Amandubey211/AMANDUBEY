import React from "react";
import Cet from "../Images/Results/Cet.jpg";
import Nimcet from "../Images/Results/Nimcet.jpg";
import { FcGraduationCap, FcBriefcase, FcApproval } from "react-icons/fc";
import EEresume from "../components/EEresume";
import { toast } from "react-hot-toast";
import EducationData from "../Data/EducationData";
import EducationDataBar from "./EducationDataBar";
import CertificatesData from "../Data/Certificates";
const EductionComponent = () => {
  return (
    <div>
      <div className="row pb-3">
        <h4 className="my-3  ps-3   text-uppercase">Resume</h4>
        <div className="col-12 col-lg-6 col-xl-6">
          <div className="d-flex flex-row flex-wrap py-2 gap-2 ps-2">
            <FcGraduationCap className="fs-4" />
            <h5> Education</h5>
          </div>
          <div className="d-flex flex-column  flex-wrap gap-2 ">
            <div
              className="rounded-3"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
                color: "whitesmoke",
              }}
            >
              <EEresume
                period="23-present (2 year)"
                title=" MCA"
                subTitle="JAIN-University"
                grade="-"
              />
            </div>
            <div className="  row ">
              <div className="col-sm-12 col-lg-6 col-xl-6">
                {" "}
                <div
                  className="border border-secondary p-2 rounded-3 d-flex flex-column align-items-center flex-wrap gap-1"
                  style={{
                    backgroundImage:
                      " linear-gradient(to right, #0f0c29, #302b63, #24243e",
                    color: "whitesmoke",
                  }}
                >
                  <span style={{ fontSize: "13px" }}>CET MCA-23</span>
                  <div>
                    <button
                      className="button-57 rounded-1 px-4  py-2"
                      role="button"
                    >
                      {" "}
                      <span className="text"> 61%</span>
                      <a
                        href={Cet}
                        onClick={(e) =>
                          Cet
                            ? toast.success("downloading file please wait...")
                            : toast.error("file not present")
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
              <div className="col-sm-12 col-lg-6 col-xl-6">
                <div
                  className="border border-secondary p-2 rounded-3 d-flex flex-column flex-wrap align-items-center gap-1 "
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #0f0c29, #302b63, #24243e",
                    color: "whitesmoke",
                  }}
                >
                  <span style={{ fontSize: "13px" }}> NIMCET-23</span>
                  <div>
                    <button
                      className="button-57 rounded-1 px-2 py-2"
                      role="button"
                    >
                      {" "}
                      <span className="text"> Rank:7000</span>
                      <a
                        href={Nimcet}
                        onClick={() =>
                          Nimcet
                            ? toast.success("downloading file please wait...")
                            : toast.error("file not present")
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
            </div>

            {EducationData.map((data) => {
              return <EducationDataBar key={data.title} data={data} />;
            })}
          </div>
        </div>
        <div className="col-12 col-lg-6 col-xl-6 ">
          <div>
            <div className="d-flex flex-row flex-wrap gap-2 ps-2">
              <div className="d-flex flex-row py-2 gap-2">
                <FcApproval className="fs-4" />
                <h5> Certificates</h5>
              </div>
            </div>
            <div className="d-flex flex-column flex-wrap gap-2 ">
              {CertificatesData.map((data) => {
                return <EducationDataBar key={data.title} data={data} />;
              })}
            </div>
          </div>
          <div>
            <div className="d-flex flex-row flex-wrap gap-2 ps-2">
              <div className="d-flex flex-row gap-2 py-3">
                <FcBriefcase className="fs-4" />
                <h5> Experience</h5>
              </div>
            </div>
            <div className="d-flex flex-column flex-wrap gap-2 ">
              <div
                className="rounded-3"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #434343 0%, black 100%)",
                  color: "whitesmoke",
                }}
              >
                <EEresume
                  period="Aug-23 (2 smonths)"
                  title=" Microsoft Intern-Ship"
                  subTitle="microsoft"
                  grade="A"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EductionComponent;
