import React from "react";
import "./Navbar.css"
import {Link} from "react-router-dom"
class Navbar extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="Navbar">
                    <div className="Navbar__filter">
                        <div className="Navbar__content">
                            <div className="Navbar__img">
                                <Link to="/">
                                    <img src="https://www.darwinchambers.com/wp-content/uploads/demo-img.jpg" alt="logo" />
                                </Link>
                                <div className="Navbar__title">
                                    <pre>Car<br></br>   Pool</pre>  
                                </div>  
                            </div>
                            
                            <div className="Navbar__elements">
                                <div className="Navbar__element">
                                    <Link to="/">
                                        <p>Home</p>
                                    </Link>
                                </div>
                                <div className="Navbar__element">
                                    <Link to="/">
                                        <p>What we offer</p>
                                    </Link>
                                </div>
                                <div className="Navbar__element">
                                    <Link to="/">
                                        <p>About</p>
                                    </Link>
                                </div>
                                <div className="Navbar__element last">
                                    <Link to="/">
                                        <p>Contact</p>
                                    </Link>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Navbar;