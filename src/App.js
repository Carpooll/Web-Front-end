import React from "react"
import { BrowserRouter, Route, Switch} from "react-router-dom"
import Main from '../src/Pages/Main/Main'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return ( 
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main}></Route>
    </Switch>
  </BrowserRouter>  
  );
}

export default App;
