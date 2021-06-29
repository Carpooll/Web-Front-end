import React from "react";
import Home from "../Home/Home"
import Whatweoffer from "../Whatweoffer/Whatweoffer"
import About from "../About/About"
import Contact from "../Contact/Contact"
import Footer from '../../Components/Footer/Footer'

class Main extends React.Component {
    render(){
        return (
            <React.Fragment>
                <Home></Home>
                <Whatweoffer></Whatweoffer>
                <About></About>
                <Contact></Contact>
            </React.Fragment>
        )
    }
}

export default Main