import React from "react";
import "./FooterStyle.css";

const Footer = () => {
    return (
        <div className="Box">
            <h1 className="Title"> CARPOOL 2021 </h1>
            <div className="Container">
                <div className="Row">
                    <div className="Column">
                        <a className="FooterLink" href="">About us </a>
                    </div>
                    <div className="Column">
                        <a className="FooterLink" href="">Contact </a>
                    </div>
                    <div className="Column">
                        <a className="FooterLink" href="">FAQ </a>
                    </div>
                    <div className="Row2">
                        <a className="FooterLink col-4" href="FooterLink"><img className="img" src="https://image.flaticon.com/icons/png/512/1384/1384063.png" alt="Instagram" /></a>
                        <a className="FooterLink col-4" href="FooterLink"><img className="img" src="https://image.flaticon.com/icons/png/512/733/733547.png" alt="Facebook" /></a>
                        <a className="FooterLink col-4" href="FooterLink"><img className="img" src="https://image.flaticon.com/icons/png/512/220/220233.png" alt="Twitter" /></a> 
                        <a className="FooterLink col-4" href="FooterLink"><img className="img" src="https://image.flaticon.com/icons/png/512/732/732208.png" alt="Google play" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer;
