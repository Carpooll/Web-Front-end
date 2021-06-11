import React from 'react';
import './Contact.css';
import Hero from '../../Components/Hero/Hero'
class Contact extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                    <Hero h={"15vh"}></Hero>
                        <div className="col">
                            <h1></h1>
                            <p></p>
                        </div>
                        <div className="col"></div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}