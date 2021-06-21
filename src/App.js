import React from "react";
import { BrowserRouter } from "react-router-dom";
import Home from './pages/Home/home'
import Faq from './pages/faq/faq'
import Home_2 from "./pages/home_2/home_2";

function App() {
  return (
    <BrowserRouter>
      <Faq> </Faq>
    </BrowserRouter>
  );
}

export default App;
