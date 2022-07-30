import React from "react";
import "../assets/scss/Loader-Animation.scss";

const LoaderAnimation = () => {
  return (
    <div className="loader-animation">
      <div className="loader-animation_logo">
        <div className="loader-animation_left-line"></div>
        <div className="loader-animation_name-food">
          <span>FOOD</span>
        </div>
        <div className="loader-animation_name-lab">
          <span>LAB</span>
        </div>
        <div className="loader-animation_right-line"></div>
      </div>
      {/* <div className="loader-animation_percentage">
        <div className="loader-animation_percentage-number">{}0%</div>
      </div> */}
    </div>
  );
};

export default LoaderAnimation;
