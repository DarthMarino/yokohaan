import React from "react";
import Navigation from "./components/Navigation/Navigation.component";
import About from "./components/About/About.component";
import Footer from "./components/Footer/Footer.component";
import Socials from "./components/Socials/Socials.component";
import Using from "./components/Using/Using.component";
import ImageCarousel from "./components/Carousel/Carousel.component";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => (
  <div className="App css-selector">
    <Navigation />
    <About />
    <Using />
    <ImageCarousel />
    <Socials />
    <Footer />
  </div>
);

export default App;
