import React, { Component } from 'react';
import projects from "../../projects.json"

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
                <div className="col-sm-6 col-md-12 col-lg-6">
                {this.state.projects.map(project => (
                  <>
                  <h5>{project.name}</h5>
                  <img
                    className="img-fluid port-image"
                    src={project.images}
                    alt={project.name}
                  />
                  <a
                    href={project.deployed}
                    className="repo-links"
                  >
                    <p>Deployed Site</p>
                  </a>
                  <a
                    href={project.repo}
                    className="repo-links"
                  >
                    <p>Repo</p>
                  </a>
                  </>
                ))}
                </div>
              </div>
              
            </article>
          </div>
          
        </main>
      </div>
    );
  }
}

export default Portfolio;

