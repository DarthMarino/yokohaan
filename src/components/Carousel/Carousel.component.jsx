import React, { useState } from "react";
import { Carousel } from "3d-react-carousal";

import "./Carousel.css";

const Card = (source) => {
  return (
    <div className="card">
      <div className="card-body">
        <img height={"300vw"} width={"450vw"} src={source} alt="artwork" />
      </div>
    </div>
  );
};

let slides = [
  Card("/assets/image1.jpeg"),
  Card("/assets/image2.jpeg"),
  Card("/assets/image3.jpeg"),
  Card("/assets/image4.jpg"),
  Card("/assets/image5.jpg"),
  Card("/assets/image6.jpg"),
  Card("/assets/image7.jpg"),
];

const ImageCarousel = () => {
  const [autoplay, setAutoplay] = useState(true);

  return (
    <>
      <div className="carousel-container">
        <div className="first-title">
          <h1>Some of my art</h1>
        </div>
        <div
          onClick={() => {
            setAutoplay(false);
          }}
          className="carousel"
        >
          <Carousel slides={slides} autoplay={autoplay} interval={1000} />
        </div>
      </div>
    </>
  );
};

export default ImageCarousel;
