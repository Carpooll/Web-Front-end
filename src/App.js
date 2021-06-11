import './App.css';
import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Security from "./Pages/Security/Security"

function App() {
  return (
      <BrowserRouter>
          <Switch>
            <Route exact path="/security" component={Security}></Route>
          </Switch>
      </BrowserRouter>
  );
}

export default App;
