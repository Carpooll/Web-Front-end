import React from 'react';
import './Contact.css';
import Hero from '../../Components/Hero/Hero'
class Contact extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="Main">
                    <div className="Main__content">
                        <div className="container">
                            <div className="content">
                                <h1>Contacts Us!</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                            </div>
                        </div>
                        <div className="content__img">
                            
                            <img src="http://www.wrigglesolutions.com/images/contact-us.jpg" alt="" />    
                            
                        </div>
                    </div>
                    <Hero h={"45vh"}></Hero>
                </div>
            </React.Fragment>
        )
    }
}

export default Contact