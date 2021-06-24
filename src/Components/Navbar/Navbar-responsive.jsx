import React from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"

class Navbar extends React.Component {
    render() {
        return(
            <React.Fragment>
                <nav id="navbar" class="Navbar navbar-expand-lg fixed-top">
                    <div className="Navbar__img navbar-brand">
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
                    <div class="collapse navbar-collapse Navbar__elements" id="navbarSupportedContent">
                        <ul class="navbar-nav nav-pills ml-auto">
                            <li class="Navbar__element">
                                <a class="nav-link" href="#what_we_offer">What we offer </a>
                            </li>
                            <li class="Navbar__element ">
                                <a class="nav-link" href="#mdo">Link</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}
export default Navbar;