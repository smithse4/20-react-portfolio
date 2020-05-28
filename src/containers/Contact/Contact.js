import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <main className="container">
      <section className="row">
        <div className="col-md-8">
          <article className="block">
            <h1 className="block-header">Contact</h1>
            <hr />
            <h4>
              I'm currently looking for new opportunities!
            </h4>
            <br></br>
            <a href="mailto:smithse4@gmail.com">
              <button className="submit-btn">Contact Me</button>
            </a>
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
            href="https://drive.google.com/file/d/1uVpsYSARNEbr7dwyXyclLzg3bZhw6rp-/view?usp=sharing"
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

export default Contact;
