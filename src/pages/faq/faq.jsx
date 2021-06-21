import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import "./faq.css"
class Faq extends React.Component{
    render(){
        return(
                <React.Fragment>
                        <div class="container" className="back">
                            <div className="row all_q">
                                <div className="col-7  QT">
                                    <h5>Prgunta 1</h5>
                                    <h6>Card subtitle</h6>
                                    <p>este al parecer debe de tener mas texto porque esta conectado con el incice que mas bien es una lista, hasta creo que mejor deberiamos de eliminal el indice y tratar de hacer mas vistosa la pagina con algun fondo o la verdad no se</p>
                                </div>
                            
                                <div class="col">
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
                                <div className="col-7  QT mt-3">
                                    <h5>Prgunta 1</h5>
                                    <h6>Card subtitle</h6>
                                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <div className="col-7  QT mt-3">
                                    <h5>Prgunta 2</h5>
                                    <h6>Card subtitle</h6>
                                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            
                                </div>
                                <div className="col-7  QT mt-3">
                                    <h5>Prgunta 3</h5>
                                    <h6>Card subtitle</h6>
                                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>               
                            </div>
                        </div>
                </React.Fragment>
        )
    }
}
export default Faq;