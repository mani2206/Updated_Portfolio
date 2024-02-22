import React from "react";

export const Navbar = () => {
  
  return (
    <>
      {/* navbar  */}
      <nav className="position navbar navbar-expand-lg navbar-light bg-light shadow p-3 mb-4 bg-white rounded">
        <a className="navbar-brand fw-bold d-flex hover" href="#">
          Port <p className ="m-0"style={{ color: "#e12c5b" }}>folio.</p>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav text-center justify-content-between">
            <li className="nav-item active">
              <a className="nav-link hover text-dark" href="/">
                Home <span className="sr-only"></span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link hover text-dark" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link hover text-dark" href="#resume">
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link hover text-dark" href="#project">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link hover text-dark" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
