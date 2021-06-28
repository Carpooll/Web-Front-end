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
                                <a className="FooterLink" href="">Legal notices </a>
                                <br />
                                <a className="FooterLink" href="">Terms and conditions</a>
                         
                            </div>
                            <div className="col-lg-2">
                                <a className="FooterLink" href="">About us</a>
                                <br />
                                <a className="FooterLink" href="">Security </a>
                                
                             
                            </div>
                            <div className="col-lg-2">
                                <a className="FooterLink" href="">Contact </a>
                                <br />
                                <a className="FooterLink" href="">FAQ </a>
                                
                           
                            </div>
                            <div className="col-lg-2 mt-3">
                                <a className="FooterLink" href="FooterLink"><img className="img" src="https://i.imgur.com/DQ8kHdT.png" alt="Facebook" /></a>
                                <a className="FooterLink" href="FooterLink"><img className="img" src="https://i.imgur.com/Iydxei0.png" alt="Instagram" /></a>
                                <a className="FooterLink" href="FooterLink"><img className="img" src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/twitter-icon-18-256.png" alt="Twitter" /></a> 
                                <a className="FooterLink" href="FooterLink"><img className="img" src="https://i.imgur.com/C1dW7vj.png" alt="Google play" /></a>

                            </div>
                            <div className="col-lg-3 mt-3">
                                <p className="Title" >CARPOOL 2021<a href=""><img className="logo" src="https://www.darwinchambers.com/wp-content/uploads/demo-img.jpg" alt="" /></a></p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};
export default Footer;
