import React from "react"
import home from "../Home/Home"
import "./404.css"

const PageNotFound = () =>{
    return(
        <React.Fragment>
            <div className='oopss'>
                <div className='error-text'>
                    <img className="image-error" src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg" alt="404"/>
                    <span className="error-text">404</span>
                    <p class="p-a">Page not found</p>
                    
                    <a href={home} className="link-home">Click here to go home</a>
                </div>
            </div>
        </React.Fragment>
    );     

}

export default PageNotFound;