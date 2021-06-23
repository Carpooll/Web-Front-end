import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import About from './Pages/About/About';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/about" component={About}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
