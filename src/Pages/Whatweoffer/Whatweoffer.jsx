import React from "react";
import "./Whatweoffer.css";

class OfferSection extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid " id="whatweoffer">
          <div className="container ">
            <div className="container-fluid Background__img Background__img_driver text-white">
              <div className="row justify-content-end ">
                <div className="col-lg-7 Offer__text_driver pb-5 pt-5 ">
                  <h1>Driver</h1>
                  <p>
                    With carpool you can take advantage of destinations where
                    you go every day to help other people reach the same
                    destination receiving a pleasant income having company in
                    your car.
                  </p>
                  <button className="btn_whatweoffer">
                    Be a carpool driver
                  </button>
                </div>
              </div>
            </div>

            <div className="container-fluid Background__img Background__img_passenger text-white">
              <div className="row justify-content-start">
                <div className="col-lg-7 Offer__text_passenger pb-5 pt-5">
                  <h1>PASSENGER</h1>
                  <p>
                    With carpool you can travel comfortably to your destination
                    in a very safe and pleasant way to your pocket with company
                    of suitable people following a protocol for your safety.
                  </p>
                  <button className="btn_whatweoffer">
                    Be a carpool passenger
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default OfferSection;
