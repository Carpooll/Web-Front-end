import React from "react"
import './Hero.css'

const Hero = props =>{
    return(
        <React.Fragment>
            <div className="Hero">

                <div className="Hero__image" style={{height:props.h}}>
                    <img src="https://images.pexels.com/photos/260689/pexels-photo-260689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Hero;