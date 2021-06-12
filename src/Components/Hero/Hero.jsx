import React from "react"
import './Hero.css'

const Hero = props =>{
    return(
        <React.Fragment>
            <div className="Hero">

                <div className="Hero__image" style={{height:props.h}}>
                    <img src="https://as.com/deporteyvida/imagenes/2018/02/28/portada/1519830649_122505_1519830777_noticia_normal.jpg" alt="" />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Hero;