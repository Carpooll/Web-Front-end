import React from 'react'
import './Whatweoffer.css'

class OfferSection extends React.Component{

    render(){
        return(
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row Offer__section_passenger">
                        <div className="col col-lg-6 d-flex justify-content-end" >
                            <img src="https://mexico.didiglobal.com/wp-content/uploads/sites/5/2020/06/Driver.png" alt="" className="rounded-circle"/>
                        </div>
                        <div className="col col-lg-4 Offer__section_passenger_text">
                            <h1>Passenger</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur incidunt facere odit voluptatibus 
                                earum non provident veritatis accusantium asperiores iusto! Tenetur voluptate nisi doloribus 
                                commodi sit, minima sequi praesentium cum?</p>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur incidunt facere odit voluptatibus 
                                earum non provident veritatis accusantium asperiores iusto! Tenetur voluptate nisi doloribus 
                                commodi sit, minima sequi praesentium cum?</p>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur incidunt facere odit voluptatibus 
                                earum non provident veritatis accusantium asperiores iusto! Tenetur voluptate nisi doloribus 
                                commodi sit, minima sequi praesentium cum?</p>
                            <button className="btn_passenger">BECOME A PASSENGER</button>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row Offer__section_driver">
                        <div className="col col-lg-4 Offer__section_driver_text">
                            <h1>Driver</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur incidunt facere odit voluptatibus 
                                earum non provident veritatis accusantium asperiores iusto! Tenetur voluptate nisi doloribus 
                                commodi sit, minima sequi praesentium cum?</p>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur incidunt facere odit voluptatibus 
                                earum non provident veritatis accusantium asperiores iusto! Tenetur voluptate nisi doloribus 
                                commodi sit, minima sequi praesentium cum?</p>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur incidunt facere odit voluptatibus 
                                earum non provident veritatis accusantium asperiores iusto! Tenetur voluptate nisi doloribus 
                                commodi sit, minima sequi praesentium cum?</p>
                            <button className="btn_driver">BECOME A DRIVER</button>
                        </div>
                        <div className="col col-lg-6 d-flex justify-content-end" >
                            <img src="https://mexico.didiglobal.com/wp-content/uploads/sites/5/2020/06/Driver.png" alt="" className="rounded-circle"/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}

export default OfferSection;
