import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="Box">
            <div className="Container">
                <div className="row">
                    <div className="col-lg-12 col-sm-1">
                        <div className="row">
                            <div className="col-lg-3">
                                <ul class="list-unstyled mb-0">
                                    <li>
                                        <a href="#" className="text-white FooterLink">Legal notices</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-white FooterLink">Terms and conditions</a>
                                    </li>
                                </ul>

                            </div>
                            <div className="col-lg-2">
                                <ul class="list-unstyled mb-0">
                                    <li>
                                        <a href="#" className="text-white FooterLink">About us</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-white FooterLink">Security</a>
                                    </li>
                                </ul>

                            </div>
                            <div className="col-lg-2">
                                <ul class="list-unstyled mb-0">
                                    <li>
                                        <a href="#" className="text-white FooterLink">Contact</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-white FooterLink">FAQ</a>
                                    </li>
                                </ul>



                            </div>
                            <div className="col-lg-2 mt-3">
                                <a className="FooterLink" href="FooterLink"><img className="img" src="https://i.imgur.com/DQ8kHdT.png" alt="Facebook" /></a>
                                <a className="FooterLink" href="FooterLink"><img className="img" src="https://i.imgur.com/Iydxei0.png" alt="Instagram" /></a>
                                <a className="FooterLink" href="FooterLink"><img className="img" src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/twitter-icon-18-256.png" alt="Twitter" /></a>
                                <a className="FooterLink" href="FooterLink"><img className="img" src="https://i.imgur.com/C1dW7vj.png" alt="Google play" /></a>

                            </div>
                            <div className="col-lg-3 mt-3">
                               <img className="logo" src="https://i.imgur.com/hHhjKaM.png" alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};
export default Footer;
