import React, { Component } from "react";
import "./Portfolio.css";

class Portfolio extends Component {
  render() {
    return (
      <div className="container">
        <main className="row">
          <div className="col-md-8">
            <article className="block">
              <h1 className="block-header">Portfolio</h1>
              <hr />
              <div className="row">
                <div className="col-sm-6 col-md-12 col-lg-6">
                  <h5>COVID-19 Info Tracker</h5>
                  <img
                    className="img-fluid port-image"
                    src="./assets/imgs/coronavirus-tracker.png"
                    alt="Covid-19 Tracker Screenshot"
                  />
                  <a
                    href="https://smithse4.github.io/covid-19-info-tracker/"
                    className="repo-links"
                  >
                    <p>Deployed Site</p>
                  </a>
                  <a
                    href="https://github.com/smithse4/covid-19-info-tracker"
                    className="repo-links"
                  >
                    <p>Repo</p>
                  </a>
                </div>
                <div className="col-sm-6 col-md-12 col-lg-6">
                  <h5>Book, Line & Sinker</h5>
                  <img
                    className="img-fluid port-image"
                    src="./assets/imgs/book-line-sinker.png"
                    alt="Book Line and Sinker"
                  />
                  <a
                    href="https://limitless-escarpment-67448.herokuapp.com/"
                    className="repo-links"
                  >
                    <p>Deployed Site</p>
                  </a>
                  <a
                    href="https://github.com/smithse4/Book-Line-And-Sinker"
                    className="repo-links"
                  >
                    <p>Repo</p>
                  </a>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 col-md-12 col-lg-6">
                  <h5>Eat Da Burger</h5>
                  <img
                    className="img-fluid port-image"
                    src="./assets/imgs/burger.png"
                    alt="Burger Site Screenshot"
                  />
                  <a
                    href="https://fierce-fortress-25431.herokuapp.com/"
                    className="repo-links"
                  >
                    <p>Deployed Site</p>
                  </a>
                  <a
                    href="https://github.com/smithse4/13-burger"
                    className="repo-links"
                  >
                    <p>Repo</p>
                  </a>
                </div>
                <div className="col-sm-6 col-md-12 col-lg-6">
                  <h5>Note Taker</h5>
                  <img
                    className="img-fluid port-image"
                    src="./assets/imgs/note-taker.png"
                    alt="Note Taker"
                  />
                  <a
                    href="https://arcane-hollows-89245.herokuapp.com/"
                    className="repo-links"
                  >
                    <p>Deployed Site</p>
                  </a>
                  <a
                    href="https://github.com/smithse4/11-note-taker"
                    className="repo-links"
                  >
                    <p>Repo</p>
                  </a>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 col-md-12 col-lg-6">
                  <h5>README Generator</h5>
                  <img
                    className="img-fluid port-image"
                    src="./assets/imgs/readme.png"
                    alt="README Generator"
                  />
                  <a className="repo-links">
                    <p>Deployed Site NA</p>
                  </a>
                  <a
                    href="https://github.com/smithse4/09-readme-generator"
                    className="repo-links"
                  >
                    <p>Repo</p>
                  </a>
                </div>
                <div className="col-sm-6 col-md-12 col-lg-6">
                  <h5>Employee Tracker</h5>
                  <img
                    className="img-fluid port-image"
                    src="./assets/imgs/employee-tracker.png"
                    alt="Employee Tracker"
                  />
                  <a className="repo-links">
                    <p>Deployed Site NA</p>
                  </a>
                  <a
                    href="https://github.com/smithse4/12-employee-tracker"
                    className="repo-links"
                  >
                    <p>Repo</p>
                  </a>
                </div>
              </div>
            </article>
          </div>
          <div className="col-4">
            <br />
            <a href="https://github.com/smithse4" className="contacts">
              <p>
                <i className="fab fa-github"></i> Github
              </p>
            </a>
            <a
              href="https://www.linkedin.com/in/smithseliza/"
              className="contacts"
            >
              <p>
                <i className="fab fa-linkedin"></i> LinkedIn
              </p>
            </a>
            <a href="mailto:smithse4@gmail.com>" className="contacts">
              <p>
                <i className="fas fa-envelope"></i> smithse4@gmail.com
              </p>
            </a>
            <p className="contacts">
              <i className="fas fa-phone"></i> (404) 323-3940
            </p>
            <a
              href="https://drive.google.com/file/d/1Ho2RcqrCXcZ1UN-Nuqr_n6omFZNfg7iF/view?usp=sharing"
              className="contacts"
            >
              <p>
                <i className="fas fa-file-alt"></i> Resume
              </p>
            </a>
          </div>
        </main>
      </div>
    );
  }
}

export default Portfolio;
