import  React from "react";
import "./About.css";


class About extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="backimage"></div>
                <div className="container-fluid">
                    <div className="abs-container">
                        <div className="row">
                            <div className="col-lg-4 center">
                                <div className="card Card">
                                    <div className="face face1">
                                        <div className="content">
                                        <h2 className="about">Us</h2>
                                        <p className="about">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis asperiores quae velit nam, maiores fugit sunt adipisci eligendi debitis sapiente, dolorem aperiam ratione possimus? Nisi quam repellat eligendi aliquid ad.</p>
                                        </div>
                                    </div>
                                    <div className="face face2">
                                        <h2>Us </h2>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-4 center">
                                <div className="card Card">
                                    <div className="face face1">
                                        <div className="content">
                                        <span className="stars"></span>
                                        <h2 className="mission">Mission</h2>
                                        <p className="mission">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis omnis quis repellendus ad impedit deleniti. Iste necessitatibus nihil ab adipisci eaque maxime impedit veniam. Placeat voluptas praesentium esse eligendi repellendus!</p>
                                        </div>
                                    </div>
                                    <div className="face face2">
                                        <h2>Mission</h2>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-4 center">
                                <div className="card Card">
                                    <div className="face face1">
                                        <div className="content">
                                        <span className="stars"></span>
                                        <h2 className="vision">Vision</h2>
                                        <p className="vision">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati possimus ducimus corporis aliquam atque labore quibusdam accusamus necessitatibus quod ea numquam saepe inventore, perspiciatis itaque voluptate fugiat expedita provident laboriosam.</p>
                                        </div>
                                    </div>
                                    <div className="face face2">
                                        <h2>Vision</h2>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                
                        
            </React.Fragment>
        );
    }
}
export default About;