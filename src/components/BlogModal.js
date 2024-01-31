import React from "react";

const BlogModal = ({
  ModalImg,
  ModalCategory,
  ModalTitle,
  videos,
  Description1,
  Description2,
  Description3,
  ModalDate,
}) => {
  return (
    <div>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-5 rounded-3 ">
          <div className="d-flex flex-column flex-wrap gap-2 rounded-3 p-2 ps-4 ">
            <div className="d-flex justify-content-center text-uppercase">
              <h6 className="  ps-2">
                Category: <span className="fw-semibold">{ModalCategory}</span>
              </h6>
            </div>
          </div>

          <div className=" rounded-3 ps-3  ">
            <div>
              <div className="d-flex flex-column flex-wrap gap-2">
                <iframe
                  className="ModalVideos rounded-3"
                  width="330"
                  height="200"
                  src={videos}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
                <h6 className="ps-2 py-3">References/videos/informations</h6>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-7  px-4 py-3 ">
          <div className="d-flex flex-column flex-wrap ">
            <div className="d-flex justify-content-center">
              <img
                src={ModalImg}
                style={{ height: "180px" }}
                className="ModalImg rounded-3 "
              />
            </div>
            <h4 className="text-center text-uppercase ">{ModalTitle} </h4>
            <div className="fs-6 fw-semibold text-uppercase pb-2 ">
              {ModalDate}
            </div>
          </div>

          <p>{Description1}</p>
          <br />

          <p>{Description2}</p>
          <br />
          <p>{Description3}</p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default BlogModal;
