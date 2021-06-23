import React from "react"
import { BrowserRouter, Route, Switch} from "react-router-dom"
import Contact from '../src/Pages/Contact/Contact'

function App() {
  return ( 
  <BrowserRouter>
    <Switch>
      <Route exact path="/contact" component={Contact}></Route>
    </Switch>
  </BrowserRouter>  
  );
}

export default App;
