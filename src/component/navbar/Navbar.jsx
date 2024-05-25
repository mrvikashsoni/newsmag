import React from "react";

export default function Navbar({ setCategory }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a
            className="navbar-brand badge bg-secondary fs-4 "
            href="https://google.com"
          >
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="https://google.comnavbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav">
              <li className="nav-item">
                <div
                  className="nav-link"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setCategory("general");
                  }}
                >
                  General
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link"
                  style={{ cursor: "pointer" }}
                  onClick={() => setCategory("technology")}
                >
                  Technology
                </div>
              </li>

              <li className="nav-item">
                <div
                  className="nav-link"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setCategory("health");
                  }}
                >
                  Health
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setCategory("science");
                  }}
                >
                  Science
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setCategory("sports");
                  }}
                >
                  Sports
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setCategory("entertainment");
                  }}
                >
                  Entertainment
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
