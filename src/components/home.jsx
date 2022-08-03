import React, { useRef, useEffect } from "react";
// import "../assets/scss/components/home.scss";
import HeroSection from "./heroSection";
import PhotoSlides from "./photo-slides";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Home = () => {
  const home_container = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to(home_container.current, {
      scrollTrigger: {
        trigger: home_container.current,
        start: "15% 10%",
        end: "30% 10%",
        scrub: 0.5,
        // pin: true,
        // markers: true,
      },
      background: "black",
      duration: 3,
    });
  }, []);

  return (
    <div className="Home">
      <div className="home_container" ref={home_container}>
        <div className="heroSection_container">
          <HeroSection />
        </div>
        {/* //please chage the demo className */}
        <div className="photo-slides_container">
            <PhotoSlides />
        </div>
        <div className="demo">
          <h1>hello</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
