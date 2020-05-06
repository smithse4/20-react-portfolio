import React from 'react';

const ContactLinks = () => {
    return (
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
    );
};

export default ContactLinks;