import React, { useRef, useEffect } from "react";
// import "../assets/scss/components/Loader-Animation.scss";
import { gsap } from "gsap";
import { motion } from "framer-motion";

const LoaderAnimation = () => {
  const loader_animation_left_line = useRef();
  const loader_animation_right_line = useRef();
  const loader_animation = useRef();
  const loader_animation_name = useRef();
  const loader_animation_name_food = useRef();
  const loader_animation_name_lab = useRef();

  useEffect(() => {
    gsap
      .timeline()
      .to(loader_animation_name.current, {
        duration: 1,
        opacity: 1,
        y: 0,
        ease: "circ.out",
        delay: 0.5,
      })
      .to(loader_animation_left_line.current, {
        duration: 1,
        xPercent: 100,
        ease: "circ.out",
        delay: 0,
      })
      .to(loader_animation_right_line.current, {
        duration: 1,
        xPercent: -100,
        ease: "circ.out",
        delay: -1,
      })
      .to(loader_animation.current, {
        duration: 1,
        scale: 2.8,
        ease: "expo.out",
      });
      
  }, []);

  return (
    <div className="loader-animation" ref={loader_animation}>
      <div
        className="loader-animation_left-line"
        ref={loader_animation_left_line}
      ></div>

      <div className="loader-animation_name" ref={loader_animation_name}>
        <div
          className="loader-animation_name-food"
          ref={loader_animation_name_food}
        >
          <span>FOOD</span>
        </div>
        <div
          className="loader-animation_name-lab"
          ref={loader_animation_name_lab}
        >
          <span>LAB</span>
        </div>
      </div>

      <div
        className="loader-animation_right-line"
        ref={loader_animation_right_line}
      ></div>

      <div className="loader-animation_logo"></div>
      {/* <div className="loader-animation_percentage">
        <div className="loader-animation_percentage-number">{}0%</div>
      </div> */}
    </div>
  );
};

export default LoaderAnimation;
