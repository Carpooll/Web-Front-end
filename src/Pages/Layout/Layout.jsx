import React from "react"
import './Layout.css'
import Navbar from '../../Components/Navbar/Navbar-responsive'
import Footer from '../../Components/Footer/Footer'

function Layout(props){
    return(
        <React.Fragment>
            <Navbar></Navbar>
            <div className="Layout" data-spy="scroll" data-target="#navbar" data-offset="0">
                {props.children}
            </div>
            <Footer></Footer>
        </React.Fragment>
    );
}

export default Layout;