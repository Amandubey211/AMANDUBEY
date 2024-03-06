import React from "react";
import { NavLink } from "react-router-dom";
import ErrorPage from "../Images/Error/Error.svg";
const Error = () => {
  return (
    <div
      style={{
        height: "100vh",
      }}
      className="d-flex gap-3   flex-column align-content-center  align-items-center justify-content-center   "
    >
      <img alt="Error Image" style={{ height: "350px" }} src={ErrorPage} />
      <NavLink to="/" className="btn px-5 btn-danger">
        {" "}
        go to home{" "}
      </NavLink>
    </div>
  );
};

export default Error;
