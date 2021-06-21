import React from "react";
import "./FooterStyle.css";
import Facebook from "../../images/facebook.png"
import Instagram from "../../images/instagram.png"
import Twitter from "../../images/twitter.png"
import Playstore from "../../images/playstore.png"
import Logo from "../../images/taxi.png"

const Footer = () => {
    return (
        <div className="Box">
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
                                <a className="FooterLink" href="FooterLink"><img className="img" src={Facebook} alt="Facebook" /></a>
                                <a className="FooterLink" href="FooterLink"><img className="img" src={Instagram} alt="Facebook" /></a>
                                <a className="FooterLink" href="FooterLink"><img className="img" src={Twitter} alt="Twitter" /></a> 
                                <a className="FooterLink" href="FooterLink"><img className="img" src={Playstore} alt="Google play" /></a>

                            </div>
                        </div>
                    </div>
                    <div className="col mt-3">
                        <h1 className="Title" >CARPOOL 2021<a href=""><img className="logo" src={Logo} alt="" /></a></h1>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer;
