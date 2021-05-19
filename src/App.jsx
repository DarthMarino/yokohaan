import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation/Navigation.component";
import About from "./components/About/About.component";
import Portfolio from "./components/Portfolio/Portfolio.component";
import Footer from "./components/Footer/Footer.component";
import Socials from "./components/Socials/Socials.component";
import Using from "./components/Using/Using.component";

const App = () => (
  <div className="App css-selector">
    <Navigation />
    <About />
    <Using />
    <Portfolio />
    <Socials />
    <Footer />
  </div>
);

export default App;
