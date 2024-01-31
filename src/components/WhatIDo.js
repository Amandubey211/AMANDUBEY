import React from "react";

const WhatIDoComponent = ({ logo, title, description, bg }) => {
  return (
    <div>
      <div className="what_i_do fw-semibold">
        <div className="d-flex align-items-center gap-2">
          <span className=" fs-3  text-uppercase "> {logo}</span>
          <span>{title}</span>
        </div>
        <p className="ps-2" style={{ fontSize: "10px" }}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default WhatIDoComponent;
