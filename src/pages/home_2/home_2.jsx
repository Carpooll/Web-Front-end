import React from "react";
import "./Home_2.css";
class Home_2 extends React.Component{
    render(){
        return(
            <React.Fragment>
                
                <div className="imagen_c">
                    <div className="capa"></div>
                    <img src="https://images.unsplash.com/photo-1489824904134-891ab64532f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=889&q=80" alt="" />
                </div>
               <div className="title_1">
                    <div>
                        <h1>From student to student. Travel comfortably. Travel safely.</h1>
                    </div>
                    <div class="container">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culp</p>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}
export default Home_2;