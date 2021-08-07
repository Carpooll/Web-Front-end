import React from "react";
import SecurityText from "../../Components/SecurityText/SecurityText";
import "./Security.css";

class Security extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="container">
            <div className="top">
              <div className="top_h1">
                <h1 className="title_security">security</h1>
              </div>
              <img
                className="image"
                src="https://i.imgur.com/Cg7sMu5.png"
                alt="cab"
              />
            </div>

            <br />

            <div className="text-gp">
              <div className="container">
                <h2 className="ml-4">Seat belt</h2>
                <p className="ml-4">
                  The seat belt is mandatory if it is available in the vehicles
                  in which you travel. No matter how short the journey is, it
                  must always be placed in the corresponding way, completely
                  closed. the years, the responsibility for traveling with or
                  without a belt has fallen on both the driver and the
                  passenger, although today it is the latter who must face the
                  corresponding sanction.
                </p>
              </div>
            </div>

            <br />

            <div className="text-gp">
              <div className="container">
                <h2 className="ml-4">Staying correctly positioned</h2>
                <p className="ml-4">
                  In addition to being in their place, passengers must maintain
                  a proper, safe posture that does not hinder driving or traffic
                  in general. There are several actions to consider regarding
                  this situation, although carpool emphasize not removing the
                  extremities of the vehicles and not placing the feet on the
                  dashboard.
                </p>
              </div>
              <div className="container">
                <h2 className="ml-4">Get on or off the carpool</h2>
                <p className="ml-4">
                  It is important to wait for any vehicle to be perfectly
                  stopped to get on or off it. However, since unknown people are
                  involved, this becomes an obligation of special interest in
                  carpool.
                </p>
              </div>
            </div>

            <div className="text-gp">
              <div className="container">
                <h2 className="ml-4">Driver distraction</h2>
                <p className="ml-4">
                  Not distracting the carpool driver. Reference is always made
                  to the person who drives the vehicle in which you are mounted,
                  although, as is obvious, the rest should not be disturbed
                  either, something that can happen.
                </p>
              </div>
            </div>

            <br />

            <div className="text-gp">
              <div className="container">
                <h2 className="ml-4">Proper use of vehicle zones</h2>
                <p className="ml-4">
                  All vehicles have areas for passengers to accommodate and
                  others where this is not allowed, such as stands. Obviously,
                  it is mandatory to properly occupy the seats, intended for the
                  use of people and it is completely forbidden to travel in
                  areas intended for other purposes.
                </p>
              </div>
            </div>

            <br />
          </div>
          <div className="quote">
            <h2 className="text-center">WE CARE ABOUT YOU</h2>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Security;
