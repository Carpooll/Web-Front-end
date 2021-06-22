import React from "react"
import './layout.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

function Layout(props){
    return(
        <React.Fragment>
            <Navbar></Navbar>
            <div className="Layout">
                {props.children}
            </div>
            <Footer></Footer>
        </React.Fragment>
    );
}

export default Layout;