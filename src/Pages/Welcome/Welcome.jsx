import React from 'react'
import './Welcome.css'

class Welcome extends React.Component{
    render() {
        return(
            <React.Fragment>
                <div className="_body">
                    <h1 className="body__text">Welcome to Carpool !</h1>
                </div>

            </React.Fragment>
        )
    }
}

export default Welcome