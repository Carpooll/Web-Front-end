import React from "react"
import './Layout.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

function Layout(props){
    return(
        <React.Fragment>
            <head>
               <title>Carpool</title> 
               <link rel="icon" type="image/gif" href="https://web.archive.org/web/20090829012825/http://www.geocities.com/nepaironcowgirl/animtire.gif"/>
            </head>
            <Navbar></Navbar>
            <div className="Layout" data-spy="scroll" data-target="#navbar" data-offset="0">
                {props.children}
            </div>
            <Footer></Footer>
        </React.Fragment>
    );
}

export default Layout;