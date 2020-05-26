import React from "react";
import "./About.css";
import stephaniesmith from "../../img/stephaniesmith.JPG";

const About = () => {
  return (
    <main className="container">
      <section className="row">
        <div className="col-md-8">
          <article className="block">
            <h1 className="block-header">About Me</h1>
            <hr />
            <img
              src={stephaniesmith}
              alt="Stephanie Smith Profile"
              id="about-image"
            />
            <p>
              Stephanie is a highly motivated Full-Stack Web Developer and May
              2020 graduate of Georgia Institute of Technology’s Full Stack
              Coding Boot Camp certificate program. Through this program, she
              acquired skills in HTML5, CSS3, Bootstrap, JavaScript , ES6,
              jQuery , NodeJS, Express, OOP, Handlebars, MySQL, MVC, Sequelize,
              MongoDB, Mongoose ODM, Progressive Web Apps, React, and more.
            </p>
            <br />
            <p>
              9+ years of experience in a fast-paced work environment --
              including 4 years in a leadership role -- helped Stephanie develop
              a versatile skill set in web development, marketing, social media,
              website management, digital and print advertising, communication,
              project management, database management, and sales.
            </p>
            <br />
            <p>
              Working collaboratively with a like-minded team has equipped her
              with the ability to ensure optimal results for user-centered and
              technology-centered designs. Stephanie is dedicated to web
              development and is looking forward to her next role.
            </p>
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
            href="https://drive.google.com/open?id=1SF88JA-rKU51833-WXT4hHWEfGS6fyWe"
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
