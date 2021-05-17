import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./Portfolio.css";

import image1 from "./../../assets/image1.jpeg";
import image2 from "./../../assets/image2.jpeg";
import image3 from "./../../assets/image3.jpeg";
import image4 from "./../../assets/image4.jpg";
import image5 from "./../../assets/image5.png";

const Portfolio = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });
  return (
    <>
      <h1>Some of my art</h1>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1">
            <img src={image1} className="img-fluid shadow-4 image" alt="..." />
          </div>
          <div className="keen-slider__slide number-slide2">
            <img src={image2} className="img-fluid shadow-4 image" alt="..." />
          </div>
          <div className="keen-slider__slide number-slide3">
            <img src={image3} className="img-fluid shadow-4 image" alt="..." />
          </div>
          <div className="keen-slider__slide number-slide4">
            <img src={image4} className="img-fluid shadow-4 image" alt="..." />
          </div>
          <div className="keen-slider__slide number-slide5">
            <img src={image5} className="img-fluid shadow-4 image" alt="..." />
          </div>
        </div>
        {slider && (
          <>
            <ArrowLeft
              onClick={(e) => e.stopPropagation() || slider.prev()}
              disabled={currentSlide === 0}
            />
            <ArrowRight
              onClick={(e) => e.stopPropagation() || slider.next()}
              disabled={currentSlide === slider.details().size - 1}
            />
          </>
        )}
      </div>
    </>
  );
};

const ArrowLeft = (props) => {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={"arrow arrow--left" + disabeld}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
    </svg>
  );
};

const ArrowRight = (props) => {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={"arrow arrow--right" + disabeld}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
    </svg>
  );
};

export default Portfolio;
