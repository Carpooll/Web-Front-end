import React from "react"
import { BrowserRouter, Route, Switch, HashRouter} from "react-router-dom"
import Layout from "./Pages/Layout/Layout";
import Main from "./Pages/Main/Main"
import Home from './Pages/Home/Home'
import Faq from './Pages/Faq/Faq'
import OfferSection from "./Pages/Whatweoffer/Whatweoffer";
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact'
import Security from "./Pages/Security/Security"
import LegalNotices from "./Pages/LegalNotices/LegalNotices";
import TermsConditions from "./Pages/TermsConditions/TermsConditions";
import PageNotFound from "./Pages/404/404";
import './App.css';

function App() {
  return ( 
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="./" component={Main}></Route>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/faq" component={Faq}></Route>
        <Route exact path="/whatweoffer" component={OfferSection}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/security" component={Security}></Route>
        <Route exact path="/legal-notices" component={LegalNotices}></Route>
        <Route exact path="/terms-conditions" component={TermsConditions}></Route>
        <Route path="*" component={PageNotFound} ></Route>
      </Switch>
    </Layout>
  </BrowserRouter>  


  );
}

export default App;
