import React, { useState } from "react";
import { toast } from "react-hot-toast";

const EEresume = ({ period, title, subTitle, grade, source }) => {
  const [result, SetResult] = useState(source);
  return (
    <div>
      <div className="d-flex flex-column flex-wrap    ps-3 pt-2 rounded-3 ">
        <div className="row">
          <div className="col-9">
            {" "}
            <h6 className="fw-semibold">{period}</h6>
          </div>
          <div className="col-3">
            <div className="d-flex justify-content-end pe-3">
              <button type="button" className="btn btn-outline-warning">
                <a
                  className="text-reset"
                  style={{ textDecoration: "none" }}
                  
                  href={source}
                  
                  onClick={() =>
                    result
                      ? toast.success("downloading file please wait...")
                      : toast.error("file not present yet..")
                  }
                  download 
                >
                  result
                </a>
              </button>
            </div>
          </div>
        </div>

        <h6 className=" fw-bold">{title}</h6>
        <div className="row">
          <div className="col-sm-12 col-lg-9">
            {" "}
            <h6  style={{fontSize:"10px"}} className="">{subTitle}</h6>
          </div>

          <div className="col-sm-12 col-lg-3">
            <div className="d-flex justify-content-end pe-3">
              <span  className="fw-bold" style={{fontSize:"10px"}} >{grade}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EEresume;
