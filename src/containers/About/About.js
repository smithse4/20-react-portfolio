import React from "react";
import "./About.css";

const About = () => {
  return (
    <main className="container">
      <section className="row">
        <div className="col-md-8">
          <article className="block">
            <h1 className="block-header">About Me</h1>
            <hr />
            <img
              src="../../img/stephaniesmith.JPG"
              alt="Stephanie Smith Profile"
              id="about-image"
            />
            <p>
              Stephanie is a highly motivated professional with 9+ years in a
              fast-paced work environment. She is currently a certificate
              candidate in Georgia Institute of Technology’s Full Stack Coding
              Boot Camp.
            </p>
            <br />
            <p>
              Stephanie has developed a versatile skill set through her
              leadership role in a small business with experience in marketing,
              social media, website management, digital and print advertising,
              communication, project management, database management, and sales.
              She is dedicated to company growth and positive client
              relationships.
            </p>
          </article>
        </div>
        <div className="col-4 contacts-box">
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
      </section>
    </main>
  );
};

export default About;
