import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Tab
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/param">
                  Param Hooks
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/parent">
                  Parent
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/master">
                  Master
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/subhomoy">
                  Use Reducer
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/reducerTab">
                  Reducer Tab
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/reducerApi">
                  Reducer Api
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
