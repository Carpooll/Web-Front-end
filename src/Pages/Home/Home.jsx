import React from "react";
import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid text-white " id="home"></div>
        <div className="container ">
          <img
            className="Background__img_home"
            src="https://images.unsplash.com/photo-1518614768202-663a3a0ecf59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
          />
          <h1 className="title">CARPOOL</h1>
          <div className="container">
            <p className="text mt-4">
              Carpool is an application that allows you to share your car trips
              with more people helping you and your companions to save.
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
