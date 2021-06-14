import React from "react"
import "./hero.css"

const Hero = props =>{
    return (
        <React.Fragment>
            <div className="Hero">
                <div className="Hero__color" style={{height: props.h}}></div>
                <div className="Hero__img" style={{height: props.h}}>
                    <img src="https://i.pinimg.com/originals/99/49/f1/9949f1295cba4f4cd9838a61cddbe65c.jpg" alt="hero_image" />
                </div>
            </div>

        </React.Fragment>
    )
}
export default Hero
