import React from "react"
import './Hero.css'
import Imgage from "../../Img/contact.jpg"
const Hero = props =>{
    return(
        <React.Fragment>
            <div className="Hero">
                <div className="Hero__filter" style={{height:props.h}}></div>
                <div className="Hero__image" style={{height:props.h}}>
                    <img src={Imgage} alt="" />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Hero;