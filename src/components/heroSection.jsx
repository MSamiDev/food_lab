import React, { useRef, useEffect } from "react";
import "../assets/scss/heroSection.scss";
import HeroSectionV1 from "../assets/images/pexels-pixabay-461198.jpg";


const HeroSection = () => {
  return (
    <div className="heroSection">
      <div className="heroSection_name">
        <div className="heroSection_name-food">
          <span>FOOD</span>
        </div>
        <div className="heroSection_name-lab">
          <span>LAB</span>
        </div>
      </div>
    </div>

  );
};

export default HeroSection;
