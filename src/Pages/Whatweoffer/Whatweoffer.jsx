import React from "react";
import "./Whatweoffer.css";

class OfferSection extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid ">
          <div className="container ">
            <div className="container-fluid Background__img Background__img_driver text-white">
       
              <div className="row justify-content-end ">
                
                <div className="col-lg-7 Offer__text_driver pb-5 pt-5 ">
                  <h1>Driver</h1>
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
                  <button className="btn_whatweoffer">BECOME A DRIVER</button>
                </div>
              </div>
            </div>
      

            <div className="container-fluid Background__img Background__img_passenger text-white">
              <div className="row justify-content-start">
                
                <div className="col-lg-7 Offer__text_passenger pb-5 pt-5">
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
                  <button className="btn_whatweoffer">BECOME A PASSENGER</button>
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
