import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation/Navigation.component";
import About from "./components/About/About.component";
import Portfolio from "./components/Portfolio/Portfolio.component";
import Footer from "./components/Footer/Footer.component";

const App = () => (
  <div className="App css-selector">
    <Navigation />
    <About />
    <Portfolio />
    <Footer />
  </div>
);

export default App;
