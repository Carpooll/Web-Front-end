import React from "react"
import { BrowserRouter, Route, Switch} from "react-router-dom"
import Layout from "./Pages/Layout/Layout";
import Main from "./Pages/Main/Main"
import Home from './Pages/Home/Home'
import Faq from './Pages/Faq/Faq'
import Home_2 from "./Pages/Home_2/Home_2";
import OfferSection from "./Pages/Whatweoffer/Whatweoffer";
import './App.css';

function App() {
  return ( 
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Main}></Route>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/home2" component={Home_2}></Route>
        <Route exact path="/faq" component={Faq}></Route>
        <Route exact path="/whatweoffer" component={OfferSection}></Route>
      </Switch>
    </Layout>
  </BrowserRouter>  


  );
}

export default App;
