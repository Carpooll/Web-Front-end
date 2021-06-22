import React from "react"
import Card from 'react-bootstrap/Card'
import "./Faq.css"
class Faq extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row m-top">
                        <div className="col">
                            <div className="QT">
                                <h5>Prgunta 1</h5>
                                <h6>Card subtitle</h6>
                                <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            <div className="QT">
                                <h5>Prgunta 2</h5>
                                <h6>Card subtitle</h6>
                                <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                            </div>
                            <div className="QT">
                                <h5>Prgunta 3</h5>
                                <h6>Card subtitle</h6>
                                <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>



                        <div className="col">
                            <div className="indice">
                                <div class="list-group">
                                    <a href="#" class="list-group-item list-group-item-action list-group-item-dark">Question 1</a>
                                </div>
                            </div>
                            <div className="indice">
                                <div class="list-group">
                                    <a href="#" class="list-group-item list-group-item-action list-group-item-dark">Question 1</a>
                                </div>
                            </div>
                            <div className="indice">
                                <div class="list-group">
                                    <a href="#" class="list-group-item list-group-item-action list-group-item-dark">Question 1</a>
                                </div>
                            </div>
                            <div className="indice">
                                <div class="list-group">
                                    <a href="#" class="list-group-item list-group-item-action list-group-item-dark">Question 1</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Faq;