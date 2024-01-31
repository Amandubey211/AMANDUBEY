import { Progress } from "antd";
import React from "react";
import { BsDashLg } from "react-icons/bs";
import { FcStatistics } from "react-icons/fc";
import TeckStackData from "../Data/TeckStakData";
import TeckStackBar from "./TeckStackBar";

const TeckStack = () => {
  return (
    <div>
      <div className="d-flex flex-row gap-2 justify-content-center  ">
        <span>
          <FcStatistics className="fs-4 " />
        </span>{" "}
        <h5> Working skills</h5>
      </div>
      <div
        className="d-flex flex-column flex-wrap gap-1   px-3 py-2 rounded-3"
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
        }}
      >
        {TeckStackData.map((data) => {
          return <TeckStackBar key={data.title} data={data} />;
        })}
      </div>
    </div>
  );
};

export default TeckStack;
