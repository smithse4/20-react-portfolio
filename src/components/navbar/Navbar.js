import React from 'react';
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm">
        <div className="container">
          <a className="navbar-brand" href="index.html" id="logo">Stephanie Smith</a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="contact.html">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="portfolio.html">Portfolio</a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="index.html">About</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;