import React from "react";
import Respositories from "./Respositories";

const Projects = () => {
  const projectsStyle = {
    backgroundImage: 'url("/images/abstract.jpg")',
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  };


  return (
    <>
      <div
        className="project w-100  text-center"
        id="project"
        style={projectsStyle}
      >
        <div className="py-2">
          <h4 className="text-white">PROJECTS</h4>
          <div className="line_contact"></div>
        </div>

        <div className="slider  d-md-flex w-100 justify-content-center my-5">
          <div className="slide-track">
            <div className="slide">
              <img
                className="w-100"
                src={"../.././images/Design_1.png"}
                alt="React Image"
              />
            </div>
            <div className="slide">
              <img
                className="w-100"
                src={"../.././images/Design_2.png"}
                alt="React Image"
              />
            </div>
            <div className="slide">
              <img
                className="w-100"
                src={"../.././images/Design_3.png"}
                alt="React Image"
              />
            </div>
            <div className="slide">
              <img
                className="w-100"
                src={"../.././images/Design_4.png"}
                alt="React Image"
              />
            </div>
            <div className="slide">
              <img
                className="w-100"
                src={"../.././images/Design_5.png"}
                alt="React Image"
              />
            </div>
            <div className="slide">
              <img
                className="w-100"
                src={"../.././images/Design_6.png"}
                alt="React Image"
              />
            </div>
            <div className="slide">
              <img
                className="w-100"
                src={"../.././images/Design_1.png"}
                alt="React Image"
              />
            </div>
            <div className="slide">
              <img
                className="w-100"
                src={"../.././images/Design_7.png"}
                alt="React Image"
              />
            </div>
            <div className="slide">
              <img
                className="w-100"
                src={"../.././images/Design_2.png"}
                alt="React Image"
              />
            </div>
            <div className="slide">
              <img
                className="w-100"
                src={"../.././images/Design_3.png"}
                alt="React Image"
              />
            </div>
            <div className="slide">
              <img
                className="w-100"
                src={"../.././images/Design_4.png"}
                alt="React Image"
              />
            </div>
            <div className="slide">
              <img
                className="w-100"
                src={"../.././images/Design_5.png"}
                alt="React Image"
              />
            </div>
            <div className="slide">
              <img
                className="w-100"
                src={"../.././images/Design_6.png"}
                alt="React Image"
              />
            </div>
            <div className="slide">
              <img
                className="w-100"
                src={"../.././images/Design_7.png"}
                alt="React Image"
              />
            </div>
          </div>
        </div>
        <Respositories />
      </div>
    </>
  );
};

export default Projects;
