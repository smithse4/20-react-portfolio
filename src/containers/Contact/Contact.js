import React from 'react';
import "./Contact.css"

const Contact = () => {
    return (
        <main className="container">
        <section className="row">
          <div className="col-md-8">
            <form className="block form-horizontal">
              <h1 className="block-header">Contact</h1>
              <hr />
              <div className="form-group">
                <label for="name" className="col-sm-2 control-label">Name</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="name" placeholder="Name" />
                </div>
              </div>
              <div className="form-group">
                <label for="email" className="col-sm-2 control-label">Email</label>
                <div className="col-sm-10">
                  <input type="password" className="form-control" id="email" placeholder="Email" />
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-2 control-label" for="msg">Message</label>
                <div className="col-sm-10">
                  <textarea id="msg" className="form-control" rows="3" placeholder="Message"></textarea>
                </div>
              </div>
              <button className="submit-btn">Submit</button>
            </form>
          </div>
          
        </section>
      </main>
    );
};

export default Contact;