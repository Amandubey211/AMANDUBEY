import React from "react";
import { FcIdea } from "react-icons/fc";
import { BsDashLg } from "react-icons/bs";
import KnowledgeData from "../Data/Knowledge";
const Knowledge = () => {
  return (
    <div>
      <div className="d-flex flex-row py-1 flex-wrap gap-1 justify-content-center fw-bold ">
        <FcIdea className="fs-4" />
        <h5> Knowledge</h5>
      </div>
      <div className="    d-flex justify-content-start flex-wrap gap-1 ">
        {KnowledgeData.map((data) => {
          return (
            <span
              key={data}
              className="bg-secondary small  hoverlink rounded-1 p-1"
            >
              {data}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Knowledge;
