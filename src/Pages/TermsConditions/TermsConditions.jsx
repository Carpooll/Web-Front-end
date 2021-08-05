import React from "react";
import "./TermsConditions.css";

class TermsConditions extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid text-white " id="home"></div>
        <div className="container ">
          <img
            className="Background__img_home"
            src="https://i.imgur.com/Cg7sMu5.png"
          />
          <h1 className="title">Customer loyalty program</h1>
          <div className="container">
          
            <h2>Registry</h2>
              <ul class="text mt-4">
                <li>Membership is free</li>
                <li>To be eligible for the Loyalty Program, customers must be 18 years of age or older.</li>
              </ul>
              <p>To enroll in the Loyalty Program, the client must provide the following</p>
              <ul>
                <li>Identification</li>
                <li>Full name</li>
                <li>Phone number</li>
                <li>Email address</li>
                <li>Debit card where carpool trips will be charged</li>
                <li>Postal Code</li>
              </ul>
          </div>

          <h1 className="title">Activity</h1>
          <div className="container">
            <ul>
              <li>Loyalty program accounts will be identified by the member's phone number. Members will not receive a membership card or membership number.</li>
              <li>Points are awarded based on the net total of the purchase. No points are awarded on taxes.</li>
              <li>Points cannot be exchanged for cash.</li>
              <li>Loyalty points are not transferable.</li>
              <li>Trips where one is used for payment are not eligible for collection of points or discounts.</li>
              <li>Points redemption.</li>
              <li>When redeeming points, the loyalty program member must provide a scanned ID, to verify identity, also with the phone number and perfectly correct data requested from the app</li>
              <li>Points cannot be redeemed by anyone other than the member.</li>
              <li>The loyalty program account must have the total number of points the customer wishes to redeem at the beginning of the transaction. By redeeming points, the customer will receive a star to use on future carpool trips.</li>
            </ul>
          </div>

          <h1 className="title">Loyalty program cancellation</h1>
          <div className="container">
            <p>Carpool company reserves the right to terminate the account of any loyalty program member and revoke any and all unredeemed points for reasons including, but not limited to: breach of the Terms and Conditions,provide false or misleading information, or misuse this Loyalty Program, violation of any law or regulation regarding the use of membership privileges, commission of fraud or abuse involving any part of this Loyalty Program, physical, verbal or written abuse of the carpool service or staff.</p>
          </div>

          <h1 className="title">General terms and conditions</h1>
          <div className="container">
            <ul>
              <li>Carpool company may restrict, suspend or alter aspects of these Terms and Conditions with or without prior notice to members.</li>
              <li>Any of these changes will be shown in the Terms and Conditions in the carpool application will take effect immediately unless otherwise stated.</li>
            </ul>
          </div>

        </div>
      </React.Fragment>
    );
  }
}

export default TermsConditions;
