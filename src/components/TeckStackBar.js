import { Progress } from "@chakra-ui/react";
import React from "react";

const TeckStackBar = ({ data }) => {
  const { percent, color, title } = data;
  return (
    <div className="row py-1 ">
      <div className="col-12">
        <div className="d-flex pe-2 align-items-center justify-content-between  gap-1 ">
          <span className="fw-semibold fs-6  text-capitalize ">{title}</span>
          <img src={data?.logo} style={{ height: "25px" }} />
        </div>
        <Progress value={percent} size="xs" colorScheme={color} />
      </div>
    </div>
  );
};

export default TeckStackBar;
