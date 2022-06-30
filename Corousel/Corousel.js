import React, { Children, useState } from "react";
import classes from "./corousel.module.css";
const widthSpan = 100;

function Carousel(props) {
  const [sliderPosition, setSliderPosition] = useState(0);
  // console.log('state',sliderPosition);
  const { children } = props;
  const prevSlideHandler = () => {
    let newPosition = sliderPosition;
    if (newPosition > 0) {
      newPosition = newPosition - 1;
    }
    translateFullSlides(newPosition);
    setSliderPosition(newPosition);
  };

  const nextSlideHandler = () => {
    let newPosition = sliderPosition;
    if (newPosition < children.length - 1) {
      newPosition = newPosition + 1;
    }

    translateFullSlides(newPosition);
    setSliderPosition(newPosition);
  };

  const translateFullSlides = (newPosition) => {
    let toTranslate = -widthSpan * newPosition;
    for (var i = 0; i < children.length; i++) {
      let elem = document.getElementById(`carouselitem` + i);
      elem.style.transform = `translateX( ` + toTranslate + `%)`;
    }
  };
  const DislayItems = Children.map(children, (child, index) => (
    <div className={classes.CorouselItems} id={`carouselitem` + index}>
      {child}
    </div>
  ));
  return (
    <div>
      <>
        <div className={classes.Container} />

        <div onClick={prevSlideHandler} className={classes.LeftArrow}>
          ❰
        </div>
        <div className={classes.DisplayFrame}>{DislayItems} </div>
        <div className={classes.RightArrow} onClick={nextSlideHandler}>
          ❱
        </div>
      </>
    </div>
  );
}

export default Carousel;
