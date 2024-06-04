import React from "react";
import LoaderSVG from "../Images/Loader/Loader.svg";
const FallBack = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div class="text-center">
        <img
          src={LoaderSVG}
          style={{ height: "100px" }}
          alt="Loading Please Wait"
        />
      </div>
    </div>
  );
};

export default FallBack;
