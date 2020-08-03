import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation/Navigation.component";
import About from "./components/About/About.component";
import Portfolio from "./components/Portfolio/Portfolio.component";

const App = () => (
  <div class="css-selector" className="App">
    <Navigation />
    <About />
    <Portfolio />
  </div>
);

export default App;
