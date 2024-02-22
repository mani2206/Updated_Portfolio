import React from "react";

// function About() {
//   return (
//     <>
//       <div
//         id="about"
//         className=" py-5 d-md-flex justify-content-around align-items-center content"
//       >
//         <img
//           data-aos="zoom-in"
//           className="about_shadow"
//           src={"../.././images/about.png"}
//           alt="React Image"
//         />

//         <div className="py-2" data-aos="fade-left">
//           <h4>ABOUT</h4>
//           <div className="line"></div>
//           <h6 className="">
//             Qualified and professional{" "}
//             <span className="fw-bold">Front End Web Developer</span> with 2
//             years of experience in website design. Strong creative and
//             analytical skills, specializing in responsive website design. A team
//             player with an eye for detail.
//           </h6>
//           <div>
//             <button type="button" className="btn btn-primary skills">
//               HTML
//             </button>
//             <button type="button" className="btn btn-primary m-2 skills">
//               CSS
//             </button>
//             <button type="button" className="btn btn-primary m-2 skills">
//               TAILWIND CSS
//             </button>
//             <button type="button" className="btn btn-primary skills">
//               SASS
//             </button>
//             <button type="button" className="btn btn-primary m-2 skills">
//               JAVASCRIPT
//             </button>
//             <button type="button" className="btn btn-primary skills">
//               REACTJS
//             </button>
//             <button type="button" className="btn btn-primary m-2 skills">
//               REDUX-TOOLKIT
//             </button>
//             <button type="button" className="btn btn-primary my-2 skills">
//              NODEJS
//             </button>
//             <button type="button" className="btn btn-primary m-2 skills">
//              EXPRESSJS
//             </button>
//             <button type="button" className="btn btn-primary my-2 skills">
//              MONGODB
//             </button>
//             <button type="button" className="btn btn-primary my-2 skills">
//              NEXT JS
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default About;

function About({ imageSource }) {
  const skills = [
    "HTML",
    "CSS",
    "Tailwind CSS",
    "SASS",
    "JavaScript",
    "ReactJS",
    "Redux-Toolkit",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Next js",
  ];

  return (
    <div id="about" className="py-5 d-md-flex justify-content-around align-items-center content">
      <img
        data-aos="zoom-in"
        className="about_shadow"
        src={"../.././images/about.png"}
        alt="React Image"
      />

      <div className="py-2" data-aos="fade-left">
        <h4>ABOUT</h4>
        <div className="line"></div>
        <h6 className="About_word">
          Qualified and professional{" "}
          <span className="fw-bold">FrontEnd Web Developer</span> with 2
          years of experience in website design. Strong creative and
          analytical skills, specializing in responsive website design. A team
          player with an eye for detail.
        </h6>
        <div>
          {skills.map((skill, index) => (
            <button key={index} type="button" className="btn btn-primary m-2 skills">
              {skill}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
