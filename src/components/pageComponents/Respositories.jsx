import React from "react";

function Respositories() {

    const config = {
        projects: [
          {
            name: "HealthCare",
            description: "HealthHub is a basic placeholder healthcare webpage built using HTML, Bootstrap, and SCSS. This initiative offers a fundamental blueprint for individuals aspiring to construct a simple healthcare website with a responsive layout and refined styling.",
            githubLink: "https://github.com/mani2206/Health-Care",
            demoLink: "https://health-care-omega-smoky.vercel.app/",
          },
          {
            name: "Form",
            description: "Form  webpage built using HTML, Bootstrap,SCSS,jquery. This initiative offers a fundamental blueprint for individuals aspiring to construct a simple healthcare website with a responsive layout and refined styling.",
            githubLink: "https://github.com/mani2206/Form_Table_jquery",
            demoLink: "https://form-table-jquery.vercel.app/",
          },
          {
            name: "Marketing",
            description: "Marketing is a basic placeholder Marketing webpage built using HTML, Bootstrap, and SCSS. This initiative offers a fundamental blueprint for individuals aspiring to construct a simple healthcare website with a responsive layout and refined styling.",
            githubLink: "https://github.com/mani2206/Responsive_Web_page",
            demoLink: "https://responsive-web-page-omega.vercel.app/",
          },
          {
            name: "CRUD With API",
            description: "ReactJs CRUD Application webpage built using HTML, Bootstrap, SCSS ,ReactJs. This initiative offers a fundamental blueprint for individuals aspiring to construct a simple healthcare website with a responsive layout and refined styling.",
            githubLink: "https://github.com/mani2206/CRUD_with_API",
            demoLink: "https://crud-with-api-chi.vercel.app/",
          },
        ],
      };
  return (
    <>
      <div>
        <button className="btn respostiry fw-bold btn-white rounded-1 mt-3 py-3 px-4">
          RESPOSITORIES
        </button>
      </div>
      <h5 className="text-white py-4 res-heading">
        "Here you will find some of the personal projects that I created"
      </h5>
      <div className="Respositories">
        {/* <div className="res-card">
          <h6 className="text-dark res-heading">HealthCare</h6>
          <p className="text-dark res-content">
            "HealthHub is a basic placeholder healthcare webpage built using
            HTML, Bootstrap, and SCSS. This initiative offers a fundamental
            blueprint for individuals aspiring to construct a simple healthcare
            website with a responsive layout and refined styling."
          </p>
          <div className="d-flex justify-content-around align-items-center">
          <a className="git-hover"  target="_blank" href={demoProject.link1} >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
            </svg>
          </a>
          <button className="btn rounded "><a className= "res-link" target="_blank" href={liveProject}>Demo Link</a></button>
          </div>
        
        </div> */}
         {config.projects.map((project, index) => (
          <div key={index} className="res-card" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
            <h6 className="text-dark res-heading">{project.name}</h6>
            <p className="text-dark res-content">{project.description}</p>
            <div className="d-flex justify-content-around align-items-center">
              <a className="git-hover" target="_blank" href={project.githubLink}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-github"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.20-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
              </a>
              <button className="btn rounded">
                <a className="res-link" target="_blank" href={project.demoLink}>
                  Demo Link
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Respositories;
