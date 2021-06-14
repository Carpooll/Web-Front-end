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
                                    <Card>
                                        <div class="card-body" >
                                            <h5 class="card-title">Prgunta 1</h5>
                                            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" class="card-link">Card link</a>
                                            <a href="#" class="card-link">Another link</a>
                                        </div>
                                    </Card>
                                </div>
                                <div class="col">
                                <div className="indice">
                                        <div>
                                            <div class="list-group" id="list-tab" role="tablist">
                                                <a class="list-group-item list-group-item-action" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">question 1</a>
                                                <a class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile">questio 2</a>
                                                <a class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="list-messages">questio 3</a>
                                                <a class="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings">questio 4</a>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="tab-content" id="nav-tabContent">
                                                <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list"></div>
                                                <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">...</div>
                                                <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">...</div>
                                                <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">...</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-7  QT mt-3">
                                    <Card>
                                        <div class="card-body" >
                                            <h5 class="card-title">Prgunta 1</h5>
                                            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" class="card-link">Card link</a>
                                            <a href="#" class="card-link">Another link</a>
                                        </div>
                                    </Card>
                                </div>
                                <div className="col-7  QT mt-3">
                                    <Card>
                                        <div class="card-body" >
                                            <h5 class="card-title">Prgunta 1</h5>
                                            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" class="card-link">Card link</a>
                                            <a href="#" class="card-link">Another link</a>
                                        </div>
                                    </Card>
                                </div>
                                <div className="col-7  QT mt-3">
                                    <Card>
                                        <div class="card-body" >
                                            <h5 class="card-title">Prgunta 1</h5>
                                            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" class="card-link">Card link</a>
                                            <a href="#" class="card-link">Another link</a>
                                        </div>
                                    </Card>
                                </div>

                                
                            </div>
                        </div>
                </React.Fragment>
        )
    }
}
export default Faq;