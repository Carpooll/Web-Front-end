import React from "react";
import "./LegalNotices.css";

class LegalNotices extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid text-white " id="home"></div>
        <div className="container ">
          <img
            className="Background__img_home"
            src="https://i.imgur.com/Cg7sMu5.png"
          />
          <h1 className="title">POLICIES</h1>
          <div className="container">
          
              <ul class="text mt-4">
                <li>Provide solutions to the needs of the community that surrounds the company as part of its final results.</li>
                <li>Demonstrate zero tolerance for corruption, especially among senior and middle managers.</li>
                <li>Manage prices that are always accessible to the consumer.</li>
                <li>Contribute to the training of a generation of national workers directly and indirectly.</li>
                <li>Always provide your carpool customers with what is offered.</li>
                <li>Promote the spirit of work from the leaders to the workers.</li>
                <li>Provide company employees with a friendly, fun and comforting environment for their daily work.</li>
              </ul>

          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default LegalNotices;
