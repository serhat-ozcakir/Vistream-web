import React from "react";
import vistream from "../assets/Group 1478.svg";

const Footer = () => {
  return (
    <>
      <footer class="p-5 footer text-center position-relative">
        <div class="container d-flex justify-content-between">
          <div>
            <a class="navbar-brand" href="#">
              <img src={vistream} alt="" />
            </a>
          </div>
          <div className="mx-5">
            <p class="lead">Copyright &copy; 2022 Vistream</p>
          </div>
          <div className="">
            <b class="text-light">Bizi Takip Edin</b>
            <b className="mx-2">
              <a href="">
                <i class="bi bi-whatsapp text-light fs-5"></i>
              </a>
            </b>
          </div>
          <a href="#" class="position-absolute bottom-0 end-0 p-5">
            <i class="bi bi-arrow-up-circle h1"></i>
          </a>
        </div>
      </footer>

      <div
        class="modal fade"
        id="enroll"
        tabindex="-1"
        aria-labelledby="enrollLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="enrollLabel">
                Enrollment
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
