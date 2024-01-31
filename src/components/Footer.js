import React from "react";
import "./component-Styles/footer.css";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { BsDashLg } from "react-icons/bs";
import { FcCopyright } from "react-icons/fc";
import { BsLinkedin } from "react-icons/bs";
import { FaGooglePlusSquare, FaGithubSquare } from "react-icons/fa";
import { ClientsImage } from "../Data/Constants";

const Footer = () => {
  const [useremail, Setuseremail] = useState("");

  let subname = useremail.substring(0, 6);

  return (
    <div>
      <footer className="my-3">
        <div className="  bg-light rounded-4 p-4  ">
          <div className=" row">
            <div className="col-sm-12 col-md-6 col-lg-6  ">
              <div className="mx-4 pt-2">
                <div className="d-flex flex-column ps-lg-5 me-lg-5">
                  <h6 className=" text-uppercase ">
                    subscribe to get updates!{" "}
                  </h6>
                  <hr />
                </div>
                <div className="ps-lg-5">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();

                      toast.success(`thanks for your intrest  "${subname}.." `);
                      Setuseremail("");
                    }}
                    className="d-flex justify-content-start gap-2 align-items-center"
                  >
                    <input
                      className="rounded-2 border     py-2 ps-3 "
                      type="Email"
                      autoComplete="off"
                      value={useremail}
                      required
                      onChange={(e) => Setuseremail(e.target.value)}
                      placeholder="email"
                    />
                    <button
                      type="submit"
                      role="button"
                      className="   px-2 py-1  button-85"
                    >
                      {" "}
                      <span style={{ fontSize: "smaller" }}>subscribe</span>
                    </button>
                  </form>
                </div>
                <div className="d-flex flex-row align-items-center justify-content-start mt-1   ps-lg-5 fs-2 gap-2">
                  <div>
                    <BsLinkedin />
                  </div>
                  <div>
                    <FaGooglePlusSquare />
                  </div>
                  <div>
                    <FaGithubSquare />
                  </div>
                </div>
                <hr />
                <p className=" ps-lg-5 " style={{ fontSize: "12px" }}>
                  May your life be full of happiness, success, and love. Sending
                  my best wishes to you! All the best for all your future
                  endeavors
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="bg-light rounded-5">
                <div className="d-flex justify-content-center ">
                  <h4 className="text-uppercase text-center d-flex gap-2 pt-2 ">
                    <BsDashLg /> my Clients <BsDashLg />
                  </h4>{" "}
                </div>
                <div className="d-flex flex-row flex-wrap justify-content-center gap-5 p-2   ">
                  {ClientsImage.map((data, index) => {
                    return (
                      <div key={index}>
                        <img
                          className="clients_img"
                          style={{ height: "40px" }}
                          src={data}
                          alt="client 1"
                        />
                      </div>
                    );
                  })}
                  {ClientsImage.reverse().map((data, index) => {
                    return (
                      <div key={index}>
                        <img
                          loading="lazy"
                          className="clients_img"
                          style={{ height: "40px" }}
                          src={data}
                          alt="client 1"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="bg-dark">
            <div className="d-flex  justify-content-center">
              <div
                className=" fw-semibold bg-dark  text-center d-flex gap-2 align-items-center   rounded-3 py-2  ps-lg-5 "
                style={{ fontSize: "10px", color: "white" }}
              >
                All <FcCopyright className="fs-6" /> Right reserved by Aman
                Dubey
              </div>
            </div>{" "}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
