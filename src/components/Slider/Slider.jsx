import React, { useState, useRef, useEffect } from "react";
import "./Slider.scss";
import slider from "../../Slider/Slider";

const Slider = () => {
  const arrImages = slider; 
  const [index, setIndex] = useState(0);
  const sliderRef = useRef(null);
  const [imgWidth, setImgWidth] = useState(0);
  console.log(index);
  

  useEffect(() => {
    if (sliderRef.current) {
      setImgWidth(sliderRef.current.offsetWidth);
    }
    if(index === arrImages.length - 3){
      setIndex(0);
    }

   
  }, [arrImages.length, index]);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex >= arrImages.length - 3 ? 0 : prevIndex + 1));
    }, 2000);

    return () => clearInterval(interval); // Очищаем интервал при размонтировании
  }, [arrImages.length]); // Следим за изменением длины массива


  const goLeft = () => {
    setIndex((prevIndex) => (prevIndex < arrImages.length - 1 ? prevIndex + 1 : prevIndex));
  };

  const goRight = () => {
    setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  return (
    <div className="Slider">
      <div onClick={goRight} className="but_left">{"<"}</div>
      <div className="slider_wrapper">
        <div className="slider_rot" style={{ marginLeft: `-${index * imgWidth}px` }}>
          {arrImages.map((item, i) => (
            <img key={i}
             src={
              // img
              item.photo

             }

              alt="" ref={i === 0 ? sliderRef : null} />
          ))}
        </div>
      </div>
      <div onClick={goLeft} className="but_right">{">"}</div>
    </div>
  );
};

export default Slider;
