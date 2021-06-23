import React from 'react';
import './Contact.css';

class Contact extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="Contact__background">    
                    <div className="Color_filter"></div>
                    <div className="Contact__container mt-5">
            
                            <div className="row">
                                <div className="Contact__header mt-5 mb-2">
                                    <h1>Talk with us!</h1>
                                </div>
                            </div>
            
                           <div className="row">
                               <div className="col-sm-4">
                                   <div className="Contact__img">
                                       <img src="https://api.bridge.insure/images/phone-6.jpg" alt="" />
                                   </div>
                                   <div className="Contact__text mt-2">
                                       <p>+52 678121212</p>
                                       <p>+52 678121212</p>
                                       <p>+52 678121212</p>
                                   </div>
                               </div>
            
                               <div className="col-sm-4">
                                   <div className="Contact__img">
                                       <img src="https://img.icons8.com/wired/2x/ffffff/email.png" alt="" />
                                   </div>
                                   <div className="Contact__text mt-2">
                                       <p>+52 678121212</p>
                                       <p>+52 678121212</p>
                                       <p>+52 678121212</p>
                                   </div>
                               </div>
            
                               <div className="col-sm-4">
                                   <div className="Contact__img">
                                       <img src="https://www.seekpng.com/png/full/14-144347_location-png-white-vector-free-library-location-icon.png" alt="" />
                                   </div>
                                   <div className="Contact__text mt-2">
                                       <p>+52 678121212</p>
                                       <p>+52 678121212</p>
                                       <p>+52 678121212</p>
                                   </div>
                               </div>
                           </div>
            
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Contact