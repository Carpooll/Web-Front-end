import React from "react";
import SecurityText from "../../Components/SecurityText";
import "./Security.css";

class Security extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="top">
          <h1>security</h1>
          <img src="https://i.imgur.com/65dQw2F.png" alt="cab"/>
        </div>

        <div className="text-gp">
          <SecurityText></SecurityText>
          <SecurityText></SecurityText>
        </div>
        <div className="text-gp">
          <SecurityText></SecurityText>
        </div>
      </React.Fragment>
    );
  }
}

export default Security;
