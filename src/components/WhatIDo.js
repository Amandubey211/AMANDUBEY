import React from "react";

const WhatIDoComponent = ({ logo, title, description, bg }) => {
  return (
    <div>
      <div className=" fw-semibold">
        <div className="d-flex align-items-center mb-2 gap-2 ">
          <span className=" fs-3  text-uppercase "> {logo}</span>
          <span className="fw-bold">{title}</span>
        </div>

        <p className="ps-2" style={{ fontSize: "10px" }}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default WhatIDoComponent;
