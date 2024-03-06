import React from "react";

const ProgressBar = ({ title, value, color }) => {
  return (
    <div>
      <div>
        <div className="row">
          <div className="col-9">
            <h6>{title}</h6>{" "}
          </div>
          <div className="col-3">
            <div className="d-flex flex-row  justify-content-end pe-3">
              {" "}
              <p>{value}%</p>
            </div>{" "}
          </div>
        </div>

        <div
          className="progress"
          role="progressbar"
          aria-label="Warning example"
          aria-valuenow={`${value}%`}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div
            className={`progress-bar bg-${color}`}
            style={{ width: `${value}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
