import React from "react";
import "./About.css";

class About extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid main_container" id="about">
          <div className="container abs-container">
            <div className="About__header">
              <h1>About us</h1>
            </div>
            <div className="row">
              <div className="col-lg-4 center">
                <div className="card Card card-about">
                  <div className="face face1">
                    <div className="content">
                      <h2 className="about">Us</h2>
                      <p className="about">
                      We are a company made up of young students aware of the difficulty of transferring to school destinations, offering a comfortable and technological solution.
                      </p>
                    </div>
                  </div>
                  <div className="face face2">
                    <h2 className="u">Us </h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 center">
                <div className="card Card card-mission">
                  <div className="face face1">
                    <div className="content">
                      <span className="stars"></span>
                      <h2 className="mission">Mission</h2>
                      <p className="mission">
                      Provide an efficient, intelligent, and comfortable service for young students.
                      </p>
                    </div>
                  </div>
                  <div className="face face2">
                    <h2 className="m">Mission</h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 center">
                <div className="card Card card-vision">
                  <div className="face face1">
                    <div className="content">
                      <span className="stars"></span>
                      <h2 className="vision">Vision</h2>
                      <p className="vision">
                      Have greater reach in cars and students everywhere, creating a pleasant environment and support and economic support for student drivers as passengers with personalized technology at an affordable price.
                      </p>
                    </div>
                  </div>
                  <div className="face face2">
                    <h2 className="v">Vision</h2>
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
export default About;
