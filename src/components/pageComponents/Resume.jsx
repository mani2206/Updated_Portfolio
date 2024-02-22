import React from "react";

function Resume() {
  return (
    <div
      id="resume"
      className=" container d-md-flex justify-content-between align-items-center content"
    >
      <div data-aos="fade-right">
        <h4>RESUME</h4>
        <div className="line"></div>
        <div className="w-100">
          I'm open to <span className="fw-bold">Job opportunities</span> where I can contribute, learn and grow.
          you can view <span  className="fw-bold">My Resume</span>
          <button className="btn download_resume">
            <a
              href="../images/Manikandan_Developer_Resume.pdf"
              download="Manikandan_Developer_Resume.pdf"
              className=""
            >
              Download
            </a>
          </button>
        </div>
      </div>
      <img
        data-aos="zoom-in"
        className=" resume_shadow py-2"
        src={"../.././images/resume.jpg"}
        alt="React Image"
      />
    </div>
  );
}

export default Resume;
