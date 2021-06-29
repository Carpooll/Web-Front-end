import React from "react";
import "./Contact.css";

class Contact extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="Color_filter" id="contact">
          <div className="Color_filter">
            <div className="mt-5">
              <div className="container-fluid">
                <div className="container">
                  <div className="row">
                    <div className="Contact__header mt-5 mb-2">
                      <h1>Talk with us!</h1>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="Contact__img">
                        <img
                          src="https://img.icons8.com/wired/2x/ffffff/email.png"
                          alt=""
                        />
                      </div>
                      <div className="Contact__text mt-2">
                        <p>+52 678121212</p>
                        <p>carpoolmx@gmail.com</p>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;
