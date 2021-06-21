import React from "react"
import './layout.css'
import Navbar from '../../Components/Navbar/Navbar'

function Layout(props){
    return(
        <React.Fragment>
            <Navbar></Navbar>
            <div className="Layout">
                {props.children}
            </div>
        </React.Fragment>
    );
}

export default Layout;