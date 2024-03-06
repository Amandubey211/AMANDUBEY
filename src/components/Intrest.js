import React from "react";
import { BsDashLg } from "react-icons/bs";
import { FcLandscape } from "react-icons/fc";
import InterstData from "../Data/Intrests";

const Intrest = () => {
  return (
    <div>
      <div className="mx-3">
        <div className="d-flex flex-row flex-wrap gap-2 justify-content-center">
          <FcLandscape className="fs-4" />
          <h5> Intrests</h5>
        </div>
        <div className="d-flex flex-row flex-wrap justify-content-evenly py-2   gap-2 px-3 rounded-3 ">
          {InterstData.map((data) => {
            return (
              <h6
                key={data}
                className="py-2 px-4  rounded-1"
                style={{
                  backgroundImage:
                    " linear-gradient(to right, #434343 0%, black 100%)",
                  color: "whitesmoke",
                  fontSize: "10px",
                }}
              >
                {data}
              </h6>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Intrest;
