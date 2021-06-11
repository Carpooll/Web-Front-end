import React from "react"
import { BrowserRouter, Route, Switch} from "react-router-dom"
import Layout from "./pages/Layout/Layout"

function App() {
  return ( 
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={}></Route>
      </Switch>
    </Layout>
  </BrowserRouter>  
  );
}

export default App;
