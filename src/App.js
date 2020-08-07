import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation/Navigation.component";
import About from "./components/About/About.component";
import Portfolio from "./components/Portfolio/Portfolio.component";
import Footer from "./components/Footer/Footer.component";

const App = () => (
  <div class="css-selector" className="App">
    <Navigation />
    <About />
    <Portfolio />
    <Footer />
  </div>
);

export default App;
