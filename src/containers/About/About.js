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
      
      </section>
    </main>
  );
};

export default About;
