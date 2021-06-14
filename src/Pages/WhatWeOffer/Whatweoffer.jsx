import React from 'react'
import './Whatweoffer.css'

class OfferSection extends React.Component{

    render(){
        return(
            <React.Fragment>
               <div className="Hero">
                    <div className="Hero__color_filter"></div>
                    <div className="Hero__img">
                        <h1 className="Offer__title">What we offer</h1>
                        <img src={"https://s1.1zoom.me/b5657/798/McLaren_Mansory_720S_Silver_color_562518_1920x1080.jpg"} alt="" />
                    </div>
                </div>

                <div className="container-fluid Offer__section_passenger ">
                    <div className="row d-flex justify-content-center">
                        <div className="col-sm-2"></div>
                            <div className="col" >
                                <img src="https://mexico.didiglobal.com/wp-content/uploads/sites/5/2020/06/Driver.png" alt="" className="rounded-circle"/>
                            </div>
                            <div className="col col-sm- Offer__section_passenger_text">
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
                        <div className="col-sm-2"></div>
                    </div>
                </div>


                <div className="container-fluid Offer__section_driver">
                    <div className="row  d-flex justify-content-center">
                        <div className="col-sm-2"></div>
                            <div className="col Offer__section_driver_text">
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
                            <div className="col" >
                                <img src="https://mexico.didiglobal.com/wp-content/uploads/sites/5/2020/06/chica-rider.jpg" alt="" className="rounded-circle"/>
                            </div>
                        <div className="col-sm-2"></div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}

export default OfferSection;
