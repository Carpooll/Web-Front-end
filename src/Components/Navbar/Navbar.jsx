import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <Link to="/">
            <a href="/" className="text-white FooterLink">
              <img
                className="navbar-logo"
                src="https://i.imgur.com/hHhjKaM.png"
                alt="logo"
              />
            </a>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ml-auto">
              <li className="Navbar__element">
                <Link to="/">
                  <a className="nav-link text-white" href="#">
                    Home
                  </a>
                </Link>
              </li>
              <li class="Navbar__element">
                <a class="nav-link text-white" href="#whatweoffer">
                  What we offer{" "}
                </a>
              </li>
              <li class="Navbar__element ">
                <a class="nav-link text-white" href="#about">
                  About
                </a>
              </li>
              <li class="Navbar__element ">
                <a class="nav-link text-white" href="#contact">
                  Contact
                </a>
              </li>
              <li class="Navbar__element ">
                <Link to="/security">
                  <a class="nav-link text-white" href="#">
                    Security
                  </a>
                </Link>
              </li>
              <li class="Navbar__element ">
                <Link to="/faq">
                  <a class="nav-link text-white" href="#">
                    PRUEBA3
                  </a>
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
