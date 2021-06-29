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
              <h1>security</h1>
              <img src="https://i.imgur.com/Cg7sMu5.png" alt="cab"/>
            </div>

            <div className="text-gp">
              <SecurityText></SecurityText>
              <SecurityText></SecurityText>
            </div>
          </div>
        </div>
        <div className="quote">
          <h2 className="text-center">WE CARE ABOUT YOU</h2>
        </div>
      </React.Fragment>
    );
  }
}

export default Security;
