import React from "react"
import { BrowserRouter, Route, Switch} from "react-router-dom"
import Layout from "./Pages/layout/layout";
import Main from "./Pages/Main/Main"

function App() {
  return ( 
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Main}></Route>
      </Switch>
    </Layout>
  </BrowserRouter>  

  );
}

export default App;
