import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="Box fixed-bottom">
            <div className="Container ">
                <div className="row">
                    <div className="col-8">
                        <div className="row">
                            <div className="col">
                                <a className="FooterLink" href="">Legal notices </a>
                                <div className="row">
                                    <a className="FooterLink" href="">Terms and conditions</a>
                                </div>
                            </div>
                            <div className="col">
                                <a className="FooterLink" href="">About us</a>
                                <div className="row">
                                    <a className="FooterLink" href="">Security </a>
                                </div>
                            </div>
                            <div className="col">
                                <a className="FooterLink" href="">Contact </a>
                                <div className="row">
                                    <a className="FooterLink" href="">FAQ </a>
                                </div>
                            </div>
                            <div className="col mt-3">
                                <a className="FooterLink" href="FooterLink"><img className="img" src="https://i.imgur.com/DQ8kHdT.png" alt="Facebook" /></a>
                                <a className="FooterLink" href="FooterLink"><img className="img" src="https://i.imgur.com/Iydxei0.png" alt="Instagram" /></a>
                                <a className="FooterLink" href="FooterLink"><img className="img" src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/twitter-icon-18-256.png" alt="Twitter" /></a> 
                                <a className="FooterLink" href="FooterLink"><img className="img" src="https://i.imgur.com/C1dW7vj.png" alt="Google play" /></a>

                            </div>
                        </div>
                    </div>
                    <div className="col mt-3">
                        <p className="Title" >CARPOOL 2021<a href=""><img className="logo" src="https://www.darwinchambers.com/wp-content/uploads/demo-img.jpg" alt="" /></a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer;
