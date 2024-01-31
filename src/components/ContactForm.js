import React from "react";
import "./component-Styles/ContactForm.css";
import { toast } from "react-hot-toast";
import { FcInvite } from "react-icons/fc";

import { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  // when i was making this website i did'nt know about the clean code ,solid principles ,code modularity but at this time a know and i have refactored my code as much a can , i can also make a custom hook for this contact form function but i am goona leave this just like this
  const [Name, Setname] = useState("");
  const [Email, Setemail] = useState("");
  const [Message, Setmessage] = useState("");
  const [loading, SetLoading] = useState(false);

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      SetLoading(true);
      const { data } = await axios.post("/api/contact", {
        Name,
        Email,
        Message,
      });
      if (data) {
        toast.success(data.message);
        SetLoading(false);
        Setemail("");
        Setname("");
        Setmessage("");
      } else {
        toast.error(data.message);
        SetLoading(false);
      }
    } catch (error) {
      SetLoading(false);
      toast.error("something went wrong");
    }
  };

  return (
    <div>
      <div className="row">
        <div className="">
          <form
            className=" form  bg-light p-4 rounded-4 "
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
            }}
            onSubmit={submitForm}
          >
            <div
              className="mt-2  fw-semibold text-capitalize text-center d-flex  py-2 flex-row flex-wrap gap-2 justify-content-center  align-items-center rounded-2 bg-none "
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
              }}
            >
              <FcInvite className="fs-3  " />
              <h5 className="text-center fw-bold text-capitalize">
                {" "}
                message box
              </h5>
            </div>

            <div className="txt_field ">
              <input
                type="text"
                name="Name"
                maxLength={30}
                value={Name}
                onChange={(e) => Setname(e.target.value)}
                required
              />
              <span></span>
              <label> Name</label>
            </div>
            <div className="txt_field">
              <input
                type="email"
                name="Email"
                value={Email}
                onChange={(e) => Setemail(e.target.value)}
                required
              />
              <span></span>
              <label>Email</label>
            </div>
            <div className="txt_field">
              <input
                type="text"
                name="Message"
                maxLength={200}
                value={Message}
                onChange={(e) => Setmessage(e.target.value)}
                required
              />
              <span></span>
              <label>Message</label>
            </div>
            <div className="d-flex justify-content-start ">
              <button
                className="  ms-2  px-5  py-2  fw-bold  button-85"
                type="submit"
                style={{ fontSize: "12px" }}
              >
                {loading ? "loading" : "send"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
