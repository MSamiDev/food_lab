import React, { useRef, useEffect } from "react";
import "../assets/scss/heroSection.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const HeroSection = () => {
  const HeroSection = useRef(null);
  const HeroSection_left_line = useRef(null);
  const HeroSection_name_food = useRef(null);
  const HeroSection_name_lab = useRef(null);
  const HeroSection_right_line = useRef(null);
  const heroSection_description = useRef(null);



  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {

    

    gsap.to(HeroSection.current, {
      scrollTrigger: {
        trigger: HeroSection.current,
        start: "20% 10%",
        end: "60% 10%",
        scrub: 0.5,
        //pin: true,
        // markers: true,
      },
      scale: 0.2,
      xPercent: -35,
      yPercent: -40,
    });

    gsap.to(HeroSection_left_line.current, {
      scrollTrigger: {
        trigger: HeroSection.current,
        start: "20% 10%",
        end: "60% 10%",
        scrub: 0.5,
        //pin: true,
        // markers: true,
      },
      xPercent: 100,
    });
    gsap.to(HeroSection_right_line.current, {
      scrollTrigger: {
        trigger: HeroSection.current,
        start: "20% 10%",
        end: "60% 10%",
        scrub: 0.5,
        //pin: true,
        // markers: true,
      },
      xPercent: -100,
    });

    gsap.to(HeroSection_name_food.current, {
      scrollTrigger: {
        trigger: HeroSection.current,
        start: "20% 10%",
        end: "60% 20%",
        scrub: 0.5,
        // markers: true,
      },
      duration: 1,
      color: "white",
    });
    gsap.to(HeroSection_name_lab.current, {
      scrollTrigger: {
        trigger: HeroSection.current,
        start: "20% 10%",
        end: "60% 10%",
        scrub: 0.5,
        // markers: true,
      },
      duration: 1,
      color: "white",
    });
    gsap.to(heroSection_description.current, {
      scrollTrigger: {
        trigger: HeroSection.current,
        toggleActions: "restart reverse reverse pause",
        start: "20% 10%",
        end: "60% 10%",
        scrub: 0.5,
        // markers: true,
      },
      duration: 1,
      opacity: 0,
    });
  }, []);

  return (
        <div className="heroSection" ref={HeroSection}>
          <div
            className="heroSection_left-line"
            ref={HeroSection_left_line}
          ></div>
          <div className="heroSection_name">
        <div className="heroSection_name-food" ref={HeroSection_name_food}>
              <span>FOOD</span>
        </div>
        <div className="heroSection_name-lab" ref={HeroSection_name_lab}>
              <span>LAB</span>
        </div>
          </div>
          <div
            className="heroSection_right-line"
            ref={HeroSection_right_line}
          ></div>
      <div className="heroSection_description" ref={heroSection_description}>
            <h1>Best Cafe in Sangli...!</h1>
          </div>
        </div>
  );
};

export default HeroSection;
