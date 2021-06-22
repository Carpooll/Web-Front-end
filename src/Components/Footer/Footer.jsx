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
                                <a className="FooterLink" href="FooterLink"><img className="img" src="https://image.flaticon.com/icons/png/512/1051/1051360.png" alt="Facebook" /></a>
                                <a className="FooterLink" href="FooterLink"><img className="img" src="https://image.flaticon.com/icons/png/512/1051/1051360.png" alt="Facebook" /></a>
                                <a className="FooterLink" href="FooterLink"><img className="img" src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/twitter-icon-18-256.png" alt="Twitter" /></a> 
                                <a className="FooterLink" href="FooterLink"><img className="img" src="https://image.flaticon.com/icons/png/512/1051/1051360.png" alt="Google play" /></a>

                            </div>
                        </div>
                    </div>
                    <div className="col mt-3">
                        <h1 className="Title" >CARPOOL 2021<a href=""><img className="logo" src="https://www.darwinchambers.com/wp-content/uploads/demo-img.jpg" alt="" /></a></h1>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer;
