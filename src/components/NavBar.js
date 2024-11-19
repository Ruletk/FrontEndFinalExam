import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  const getCurrentPage = () => {
    switch (location.pathname) {
      case "/":
        return "Home";
      case "/about":
        return "About";
      case "/regime":
        return "Regime";
      case "/gallery":
        return "Gallery";
      case "/quiz":
        return "Quiz";
      default:
        return "";
    }
  };

  const currentPage = getCurrentPage();
  return (
      <div className="bg-dark w-100 py-2">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 mx-auto">
          <li>
              <Link to="/" className={`nav-link px-2 ${currentPage === "Home" ? "text-secondary" : "text-white"}`}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={`nav-link px-2 ${currentPage === "About" ? "text-secondary" : "text-white"}`}>
                About
              </Link>
            </li>
            <li>
              <Link to="/regime" className={`nav-link px-2 ${currentPage === "Regime" ? "text-secondary" : "text-white"}`}>
                Regime
              </Link>
            </li>
            <li>
              <Link to="/gallery" className={`nav-link px-2 ${currentPage === "Gallery" ? "text-secondary" : "text-white"}`}>
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/quiz" className={`nav-link px-2 ${currentPage === "Quiz" ? "text-secondary" : "text-white"}`}>
                Quiz
              </Link>
            </li>
          </ul>
        </div>
      </div>
  );
};

export default NavBar;
