import React from "react";
import "./component-Styles/projectCard.css";
import { FcCalendar } from "react-icons/fc";
import { FiExternalLink } from "react-icons/fi";
const ProjectCard = ({ data }) => {
  const { title, projectImg, link, date, tech1, tech2, tech3, tech4, tech5 } =
    data;

  return (
    <div>
      {" "}
      <div className="projectcard  rounded-2 ">
        <div className="row ">
          <div className="col-sm-12 col-md-7 col-lg-7  overflow-hidden">
            <div className="d-flex justify-content-center ">
              <img
                loading="lazy"
                height={100}
                src={projectImg}
                className="rounded-4 projectimg p-2 "
                alt={title}
              />
            </div>
          </div>
          <div
            className="  d-none p-2 rounded-3  d-sm-block  col-lg-4 col-md-4 col-xl-3"
            style={{
              backgroundImage: " linear-gradient(to right, #870000, #190a05)",
              color: "whitesmoke",
            }}
          >
            <div className="techstack    rounded-1 rounded-bottom-2">
              {" "}
              <span className="text-uppercase pt-1 text-center">
                tech Stack
              </span>{" "}
              <hr />
              <div
                className="text-center  border-top-success  flex-wrap flex-column d-flex gap-2  fw-semibold text-capitalize"
                style={{ fontSize: "12px" }}
              >
                {tech1 && <span>{tech1}</span>}
                {tech2 && <span>{tech2}</span>}
                {tech3 && <span>{tech3}</span>}
                {tech4 && <span>{tech4}</span>}
                {tech5 && <span>{tech5}</span>}
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className=" fw-bold d-flex flex-row flex-wrap gap-2 pt-1 rounded-3  justify-content-between align-items-center px-2 ">
            <a
              href={link}
              target="_blank"
              className="text-reset btn btn-warning d-flex gap-2"
            >
              <FiExternalLink
                className="fs-4 icon-link-hover"
                title="visit page"
              />
              <span> Live Demo</span>
            </a>

            <div className="  overflow-hidden">
              {" "}
              <p className="  mt-2 ">{title}</p>
            </div>
            <div className=" d-none   d-sm-block fw-semibold mt-1 ">
              <div className="d-flex gap-2 align-items-center">
                <FcCalendar className="fs-5   " />
                <span>{date} </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
