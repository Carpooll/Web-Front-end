import React from 'react';
import './Contact.css';
import Hero from '../../Components/Hero/Hero'
import { setConfiguration } from 'react-grid-system';
import { Container, Row, Col } from 'react-grid-system';
setConfiguration({ maxScreenClass: 'xl' });

class Contact extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="Contact__container">
                    <Container>
                        <Row>
                            <div className="Contact__header mt-5 mb-2">
                                <h1>Talk with us!</h1>
                            </div>
                        </Row>
                        <Row>
                            <Col sm={4}>
                                <div className="Contact__img">
                                    <img src="https://api.bridge.insure/images/phone-6.jpg" alt="" />
                                </div>
                                <div className="Contact__text mt-2">
                                    <p>+52 678121212</p>
                                    <p>+52 678121212</p>
                                    <p>+52 678121212</p>
                                </div>
                            </Col>

                            <Col sm={4}>
                                <div className="Contact__img">
                                    <img src="https://img.icons8.com/wired/2x/ffffff/email.png" alt="" />
                                </div>
                                <div className="Contact__text mt-2">
                                    <p>+52 678121212</p>
                                    <p>+52 678121212</p>
                                    <p>+52 678121212</p>
                                </div>
                            </Col>

                            <Col sm={4}>
                                <div className="Contact__img">
                                    <img src="https://www.seekpng.com/png/full/14-144347_location-png-white-vector-free-library-location-icon.png" alt="" />
                                </div>
                                <div className="Contact__text mt-2">
                                    <p>+52 678121212</p>
                                    <p>+52 678121212</p>
                                    <p>+52 678121212</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Hero h={"100vh"}></Hero>
            </React.Fragment>
        )
    }
}

export default Contact