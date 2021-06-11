import  React from "react";
import "./AboutStyle.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class About extends React.Component{
    render(){
        return(
            <React.Fragment>
                
                <div className="Container1">
                    <h1 className="Header__title">About us</h1>
                    <div className="Row">
                        <div className="Column">
                            <p className="text1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias quibusdam, iure iusto culpa numquam esse ducimus placeat eum inventore hic doloribus minus nam ab! Repellendus similique quisquam sunt iste exercitationem?
                            Soluta, dicta, ipsam, quia amet possimus reprehenderit voluptatum dolores non aliquid vel expedita blanditiis ad facilis nostrum quaerat accusantium similique eos quos dignissimos fugit beatae labore corrupti distinctio sunt. Autem.
                            Temporibus totam nemo facere, dolore dolorum laboriosam in voluptatibus deserunt eveniet quam quod? Molestias numquam, nisi recusandae quo repellat minus ea necessitatibus itaque quos dolorem modi praesentium inventore, saepe adipisci.</p>
                        </div>
                    </div>
                </div>
                <div className="Container">
                        <div className="card">
                            <div className="face face1">
                                <div className="content">
                                <h2 className="about">Values</h2>
                                <p className="about">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis asperiores quae velit nam, maiores fugit sunt adipisci eligendi debitis sapiente, dolorem aperiam ratione possimus? Nisi quam repellat eligendi aliquid ad.</p>
                                </div>
                            </div>
                            <div className="face face2">
                                <h2>Values </h2>
                            </div>
                        </div>

                        <div className="card">
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

                        <div className="card">
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
                        
            </React.Fragment>
        );
    }
}
export default About;