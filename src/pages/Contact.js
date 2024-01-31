import React from "react";
import { BsDashLg } from "react-icons/bs";
import { FcPhoneAndroid, FcGoogle } from "react-icons/fc";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import Layout from "../components/Layout";
import ProfileComponent from "../components/ProfileComponent";
import ContactForm from "../components/ContactForm";
const Contact = () => {
  return (
    <Layout title="contact page">
      <div className="contact_main">
        <div className="row container-fluid ">
          <div className="col-lg-3 col-md-3 col-sm-12 p-2 rounded-3">
            <ProfileComponent />
          </div>
          <div
            className="col-lg-8 col-md-8 col-sm-12 p-2 ms-3 ps-3 rounded-2"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
            }}
          >
            <h4 className="py-4 px-3">contact</h4>{" "}
            <div className="row">
              <div className="col-sm-12 col-lg-6 col-md-6 col-xl-6">
                <div
                  className="p-3 border border-successs rounded-3"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #0f0c29, #302b63, #24243e",
                    color: "whitesmoke",
                  }}
                >
                  <div className="d-flex flex-row flex-wrap  justify-content-center align-items-center ">
                    <span>
                      {" "}
                      <FcPhoneAndroid className="fs-5 me-2 " />
                    </span>{" "}
                    <span className="fw-semibold"> Phone </span>
                  </div>
                  <hr />

                  <div className="d-flex flex-row  gap-1 justify-content-center ">
                    <span className="fw-bold "> +91 77333 42037</span>
                  </div>
                  <div className="d-flex flex-row  gap-1 justify-content-center ">
                    <span className="fw-bold "> +91 77000 42334*</span>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-lg-6 col-md-6 col-xl-6">
                {" "}
                <div
                  className="p-3 border border-successs rounded-3"
                  style={{
                    backgroundImage:
                      " linear-gradient(to right, #0f0c29, #302b63, #24243e",
                    color: "whitesmoke",
                  }}
                >
                  <div className="d-flex flex-row flex-wrap  justify-content-center align-items-center  ">
                    <FcGoogle className="fs-5 me-2 " /> <span> Mail </span>
                  </div>
                  <hr />

                  <div className="d-flex flex-row  gap-1 justify-content-center ">
                    <span className="fw-bold "> amandubey8833@gmail.com</span>
                  </div>
                  <div className="d-flex flex-row  gap-1 justify-content-center ">
                    <span className="fw-bold "> amanheller8833@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="  rounded-4 pb-5 m-2 ">
              <div className=" ">
                <div className="p-3 pt-4 ">
                  <h6 className="fw-semibold text-capitalize">
                    I'm always open to discussing product
                  </h6>{" "}
                  <h6 className="fw-bold">design work or partnerships.</h6>
                </div>
                <div>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
