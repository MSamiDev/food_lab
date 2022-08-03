import React, {  useEffect } from "react";
// import "../assets/scss/components/heroSection.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const PhotoSlides = () => {
  

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {

  }, []);

  return (
    <div className="photo-slides">
      <div className="photo-slide-1">
        
      </div>
    </div>
  );
};

export default PhotoSlides;
