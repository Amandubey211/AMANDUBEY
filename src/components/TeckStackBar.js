import { Progress } from "@chakra-ui/react";
import React from "react";

const TeckStackBar = ({ data }) => {
  const { percent, color, title } = data;
  return (
    <div className="row py-1">
      <div className="col-5">
        <div className="d-flex ">
          <span
            className="fw-semibold text-uppercase"
            style={{ fontSize: "12px" }}
          >
            {title}
          </span>
        </div>
      </div>
      <div className="col-7">
        <Progress value={percent} size="xs" colorScheme={color} />
      </div>
    </div>
  );
};

export default TeckStackBar;
