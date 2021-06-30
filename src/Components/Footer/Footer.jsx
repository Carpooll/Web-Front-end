import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="Box">
      <div className="Container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="row">
              <div className="col-lg-3">
                <ul class="list-unstyled mb-0">
                  <li>
                    <Link to="/">
                      <a href="#" className="text-white FooterLink">
                        Legal notices
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <a href="#" className="text-white FooterLink">
                        Terms and conditions
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2">
                <ul class="list-unstyled mb-0">
                  <li>
                    <a href="#about" className="text-white FooterLink">
                      About us
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="text-white FooterLink">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2">
                <ul class="list-unstyled mb-0">
                  <li>
                    <Link to="/security">
                      <a href="#" className="text-white FooterLink">
                        Security
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/faq">
                      <a href="#" className="text-white FooterLink">
                        FAQ
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 mt-3">
                <Link to="/">
                  <a className="FooterLink" href="FooterLink">
                    <img
                      className="img"
                      src="https://i.imgur.com/DQ8kHdT.png"
                      alt="Facebook"
                    />
                  </a>
                </Link>
                <Link to="/">
                  <a className="FooterLink" href="FooterLink">
                    <img
                      className="img"
                      src="https://i.imgur.com/Iydxei0.png"
                      alt="Instagram"
                    />
                  </a>
                </Link>
                <Link to="/">
                  <a className="FooterLink" href="FooterLink">
                    <img
                      className="img"
                      src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/twitter-icon-18-256.png"
                      alt="Twitter"
                    />
                  </a>
                </Link>
                <Link to="/">
                  <a className="FooterLink" href="FooterLink">
                    <img
                      className="img"
                      src="https://i.imgur.com/C1dW7vj.png"
                      alt="Google play"
                    />
                  </a>
                </Link>
              </div>
              <div className="col-lg-3 mt-3">
                <a href="/" className="text-white FooterLink">
                  <img
                    className="logo"
                    src="https://i.imgur.com/hHhjKaM.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
