import React, { useRef, useEffect } from "react";
import "../assets/scss/heroSection.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Photo_Slides = () => {
  

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {

  }, []);

  return (
    <div className="photo-slides">
      
    </div>
  );
};

export default Photo_Slides;
