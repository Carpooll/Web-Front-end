import React from "react";
import "./Navbar.css"
import {Link} from "react-router-dom"
class Navbar extends React.Component{
    render(){
        return(
            <React.Fragment>
                <nav className="Navbar fixed-top Navbar__content">
                    <div className="Navbar__img">
                        <Link to="/">
                            <img src="https://www.darwinchambers.com/wp-content/uploads/demo-img.jpg" alt="logo" />
                        </Link>
                        <div className="Navbar__title">
                            <pre>Car<br></br>   Pool</pre>  
                        </div>  
                    </div>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="Navbar__elements collapse navbar-collapse" id="navbarSupportedContent">
                        <ul>
                            <li className="Navbar__element">
                                <Link to="/">
                                    <p>Home</p>
                                </Link>
                            </li>
                            <li className="Navbar__element nav-item">
                                <Link to="/">
                                    <a>What we offer</a>
                                </Link>
                            </li>
                            <li className="Navbar__element">
                                <Link to="/">
                                    <p>About</p>
                                </Link>
                            </li>
                            <li className="Navbar__element last">
                                <Link to="/">
                                    <p>Contact</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    
                </nav>
            </React.Fragment>
        );
    }
}

export default Navbar;