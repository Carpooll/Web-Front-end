import React from 'react'
import './Whatweoffer.css'

class OfferSection extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className="container-fluid Background__img_driver text-white ">
                    <div className="Color_filter_driver"></div>
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-9 Offer__text_driver">
                            <h1>Driver</h1>
                            <p>Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Suscipit rem sint vel. Quis velit id deleniti tempore.
                                Doloremque recusandae nobis vel velit quae, sunt enim placeat accusantium
                                excepturi totam laborum.</p>
                            <p>Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Suscipit rem sint vel. Quis velit id deleniti tempore.
                                Doloremque recusandae nobis vel velit quae, sunt enim placeat accusantium
                                excepturi totam laborum.</p>
                            <button className="btn_driver">BECOME A DRIVER</button>
                        </div>
                    </div>
                </div>



            </React.Fragment>
        );
    }

}

export default OfferSection;
