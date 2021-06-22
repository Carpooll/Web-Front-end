import { BrowserRouter, Route, Switch} from "react-router-dom"
import OfferSection from "./Pages/Whatweoffer/Whatweoffer";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/whatweoffer" component={OfferSection}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
