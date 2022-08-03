import LoaderAnimation from "./components/loaderAnimation";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
//import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/home";
import Nav from "./components/nav";
import "./assets/scss/main.scss";
import gsap from "gsap";

const App = () => {
  const loaderRef = useRef(null);
  useEffect(() => {
    gsap.to(loaderRef.current, {
      duration: 1,
      opacity: 0,
      //display: "none",
      ease: "power3.in",
      delay: 3,
    });
    gsap.to(loaderRef.current, {
      duration: 1,
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
              <Nav />
              <Home />
        </div>
  );
};

export default App;
