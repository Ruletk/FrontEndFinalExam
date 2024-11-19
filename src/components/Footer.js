import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-dark my-0 w-100 pt-2">
    <section className="container bg-dark w-100">
      <footer className="py-3">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <Link to="/" className="nav-link px-2 text-white">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link px-2 text-white">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/regime" className="nav-link px-2 text-white">
              Regime
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/gallery" className="nav-link px-2 text-white">
              Gallery
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/quiz" className="nav-link px-2 text-white">
              Quiz
            </Link>
          </li>
        </ul>
      </footer>
    </section>
    </div>
  );
};

export default Footer;
