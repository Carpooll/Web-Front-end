import React from "react";
import Card from "react-bootstrap/Card";
import "./Faq.css";
class Faq extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="container">
            <div className="row m-top">
              <div className="col-lg-6 col-sm-12">
                <div id="accordion">
                  <div className="card mb-2">
                    <div className="card-header inx" id="headingOne">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="false"
                          aria-controls="collapseOne"
                        >
                          How can I be a student driver?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapseOne"
                      className="collapse"
                      aria-labelledby="headingOne"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        To be part of the carpool community, you will be asked
                        for specific data and requirements from your carpool
                        application where you can send your request.
                      </div>
                    </div>
                  </div>
                  <div className="card mb-2">
                    <div className="card-header inx" id="headingTwo">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          What do I need to register?
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        The documents that you will have to have in order are:
                        your official identification, driver's license and a
                        non-criminal record letter, in addition to taking a
                        psychometric test.
                      </div>
                    </div>
                  </div>
                  <div className="card mb-2">
                    <div className="card-header inx" id="headingThree">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          What is the emergency phone number?
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        In any emergency, you must first notify the authorities
                        at 911 and then immediately contact Carpool by accessing
                        the Help section of the app. This numbe 6142456781r is
                        available 24 hours a day, 7 days a week to support you
                        in case that you need it.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-sm-12">
                <div id="accordion2">
                  <div className="card mb-2">
                    <div className="card-header inx" id="headingFour">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link"
                          data-toggle="collapse"
                          data-target="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >
                          How can I contact a user?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapseFour"
                      className="collapse"
                      aria-labelledby="headingOne"
                      data-parent="#accordion2"
                    >
                      <div className="card-body">
                        If after accepting a trip, you have reached the meeting
                        point and cannot find the user; Or, if after a trip you
                        find a forgotten object in the vehicle, in the Uber app
                        you will find the possibility to call the user to
                        resolve the situation. Both during trips, and if you
                        need to get in touch with a user before or after a trip,
                        we recommend that you always keep the Community Guides
                        in mind.
                      </div>
                    </div>
                  </div>
                  <div className="card mb-2">
                    <div className="card-header inx" id="headingFive">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseFive"
                          aria-expanded="false"
                          aria-controls="collapseFive"
                        >
                          Where can I download the carpool application?
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseFive"
                      className="collapse"
                      aria-labelledby="headingFvie"
                      data-parent="#accordion2"
                    >
                      <div className="card-body">
                        The Carpool application will be found in the Play Store
                        for Android devices and the App store for IOS devices.
                      </div>
                    </div>
                  </div>
                  <div className="card mb-2">
                    <div className="card-header inx" id="headingSix">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseSix"
                          aria-expanded="false"
                          aria-controls="collapseSix"
                        >
                          How can I request a refund?
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseSix"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordion2"
                    >
                      <div className="card-body">
                        If your trip was not pleasant you can communicate it
                        directly with carpool through the app or social media of
                        carpool that will give you a link where you can explain
                        any situation that was not to your liking or the request
                        of your refund, this will be corroborated with carpool
                        partners and fixed immediately.
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
export default Faq;
