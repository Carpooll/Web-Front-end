import React from "react";
import "./Whatweoffer.css";

class OfferSection extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="container">
            <div
              className="Background__img_driver text-white "
              id="whatweoffer"
            >
              <div className="Color_filter_driver"></div>
              <div className="row">
                <div className="col-lg-4 col-sm-2"></div>
                <div className="col-lg-7 col-sm-10 Offer__text_driver pb-5 pt-5 ">
                  <h1>DRIVER</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Suscipit rem sint vel. Quis velit id deleniti tempore.
                    Doloremque recusandae nobis vel velit quae, sunt enim
                    placeat accusantium excepturi totam laborum.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Suscipit rem sint vel. Quis velit id deleniti tempore.
                    Doloremque recusandae nobis vel velit quae, sunt enim
                    placeat accusantium excepturi totam laborum.
                  </p>
                  <button className="btn_driver">BECOME A DRIVER</button>
                </div>
                <div className="col-lg-1"></div>
              </div>
            </div>
            <div className="container-fluid Background__img_passenger text-white">
              <div className="Color_filter_passenger"></div>
              <div className="row">
                <div className="col-lg-1 col-sm-1"></div>
                <div className="col-lg-7 col-sm-10  Offer__text_passenger pb-5 pt-5">
                  <h1>PASSENGER</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Suscipit rem sint vel. Quis velit id deleniti tempore.
                    Doloremque recusandae nobis vel velit quae, sunt enim
                    placeat accusantium excepturi totam laborum.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Suscipit rem sint vel. Quis velit id deleniti tempore.
                    Doloremque recusandae nobis vel velit quae, sunt enim
                    placeat accusantium excepturi totam laborum.
                  </p>
                  <button className="btn_passenger">BECOME A PASSENGER</button>
                </div>
                <div className="col-lg-5 col-sm-2"></div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default OfferSection;
