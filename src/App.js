import LoaderAnimation from "./components/loaderAnimation";
import React, { useEffect, useRef } from "react";
import Home from "./components/home";
import "./assets/scss/app.scss";
import gsap from "gsap";

const App = () => {
  const loaderRef = useRef(null);
  useEffect(() => {
    gsap.to(loaderRef.current, {
      duration: 1.5,
      opacity: 0,
      //display: "none",      
      ease: "power3.out",
      delay: 3,
    });
    gsap.to(loaderRef.current, {
      duration: .5,
      display: "none",
      ease: "power3.out",
      delay: 4,
    });
  }, []);

  return (
    <div className="App">
      <div className="loader" ref={loaderRef}>
        <LoaderAnimation />
      </div>
      <Home />
    </div>
  );
};

export default App;

                                 