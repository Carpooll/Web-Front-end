import React from "react"
import { BrowserRouter, Route, Switch} from "react-router-dom"
import Layout from "./Pages/layout/layout";
import Main from "./Pages/Main/Main"
import Home from './Pages/Home/home'
import Faq from './Pages/faq/faq'
import Home_2 from "./Pages/home_2/home_2";

function App() {
  return ( 
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Main}></Route>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/home2" component={Home_2}></Route>
        <Route exact path="/faq" component={Faq}></Route>
      </Switch>
    </Layout>
  </BrowserRouter>  


  );
}

export default App;
