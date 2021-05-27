import React, { Component } from 'react';
import projects from "../../projects.json"
import "./Portfolio.css"
import booklinesinker from "../../img/booklinesinker.png"
import burger from "../../img/burger.png"
import coronavirustracker from "../../img/coronavirustracker.png"
import employeetracker from "../../img/employeetracker.png"
import notetaker from "../../img/notetaker.png"
import readme from "../../img/readme.png"



class Portfolio extends Component {

  state = {
    projects
  }

  render() {
    return (
      <div className="container">
        <main className="row">
          <div className="col-md-8">
            <article className="block">
              <h1 className="block-header">Portfolio</h1>
              <hr />
              <div className="row">
                {/* <div className="col-md-6 "> */}
                {this.state.projects.map(project => (
                  <div className="project-width">
                  <h5>{project.name}</h5>
                  <img
                    className="img-fluid port-image"
                    src={project.image}
                    alt={project.name}
                  />
                  <p className="port-desc">{project.description}</p>
                  <a
                    href={project.deployed}
                    className="repo-links"
                  >
                    <button>Deployed Site</button>
                  </a>
                  <a
                    href={project.repo}
                    className="repo-links"
                  >
                    <button>Repo</button>
                  </a>
                  </div>
                ))}
                {/* </div> */}
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
            <a href="mailto:smithse4@gmail.com" className="contacts">
              <p>
                <i className="fas fa-envelope"></i> smithse4@gmail.com
              </p>
            </a>
            <p className="contacts">
              <i className="fas fa-phone"></i> (404) 323-3940
            </p>
            <a
              href="https://drive.google.com/file/d/1uo-rorgOIeEdr2tQBJ04JXJHyM6LNvN3/view?usp=sharing"
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

