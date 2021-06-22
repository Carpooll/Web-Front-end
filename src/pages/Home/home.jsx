import React from "react";
import "./Home.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';


class Home extends React.Component{
    render(){
        return(
            <React.Fragment>
                
                <div className="all_c">
                    <div className="Carru">
                        <Carousel>
                            <Carousel.Item>
                                
                                <div className="imagen_c" style={{height: "70vh"}}>
                                    <img
                                        src="https://i.pinimg.com/originals/07/b5/5e/07b55e4038516321f44d458c9eaf3a3c.jpg"
                                        alt="First slide"
                                    />
                                </div>
                                <Carousel.Caption>
                                        <h3>First slide label</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="imagen_c" style={{height: "70vh"}}>
                                    <img
                                       
                                        src="https://wallpaperaccess.com/full/3097725.jpg"
                                        alt="Second slide"
                                    />
                                </div>
                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="imagen_c" style={{height: "70vh"}}>
                                    <img
                                        
                                        src="https://wallpaperaccess.com/full/723583.jpg"
                                        alt="Third slide"
                                    />
                                </div>
                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>  
                </div>
                <div className="title_1">
                    <div class="card mt-10">
                        <div class="card-header">
                            <h1>Title</h1>
                        </div>
                        <p>mucho texto xd</p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Home;