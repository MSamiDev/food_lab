import React, { useRef, useEffect, useState } from "react";
// import "../assets/scss/components/Loader-Animation.scss";
import { gsap } from "gsap";
import { AnimatePresence, motion } from "framer-motion";

const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};
const line_left = {
  hidden: { opacity: 0, x: "-100%" },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    x: "-100%",
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

const line_right = {
  hidden: { opacity: 0, x: "100%" },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    x: "100%",
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

const name = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.7,
    },
  },
};

const loaderAnimation = {
  hidden: { opacity: 1, scale: 1 },
  show: {
    scale: 2.8,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
      delay: 1,
    },
  },
  exit: {
    y: 200,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
};

const LoaderAnimation = ({ setLoading }) => {
  const loader_animation_left_line = useRef();
  const loader_animation_right_line = useRef();
  const loader_animation = useRef();
  const loader_animation_name = useRef();
  const loader_animation_name_food = useRef();
  const loader_animation_name_lab = useRef();

  useEffect(() => {
    // gsap
    //   .timeline()
    //   .to(loader_animation_name.current, {
    //     duration: 1,
    //     opacity: 1,
    //     y: 0,
    //     ease: "circ.out",
    //     delay: 0.5,
    //   })
    //   .to(loader_animation_left_line.current, {
    //     duration: 1,
    //     xPercent: 100,
    //     ease: "circ.out",
    //     delay: 0,
    //   })
    //   .to(loader_animation_right_line.current, {
    //     duration: 1,
    //     xPercent: -100,
    //     ease: "circ.out",
    //     delay: -1,
    //   })
    //   .to(loader_animation.current, {
    //     duration: 1,
    //     scale: 2.8,
    //     ease: "expo.out",
    //   });
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="loader-animation"
        ref={loader_animation}
        variants={loaderAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
        // onAnimationComplete={() => setLoading(false)}
      >
        <motion.div
          className="loader-animation_left-line"
          ref={loader_animation_left_line}
          variants={line_left}
          initial="hidden"
          animate="show"
          exit="exit"
          // onAnimationComplete={() => setLoading(false)}
        ></motion.div>

        <motion.div
          className="loader-animation_name"
          ref={loader_animation_name}
        >
          <motion.div
            className="loader-animation_name-food"
            ref={loader_animation_name_food}
            variants={name}
            initial="hidden"
            animate="show"
          >
            <span>FOOD</span>

            {/* <AnimatedLetters title={"FOOD"} /> */}
          </motion.div>
          <motion.div
            className="loader-animation_name-lab"
            ref={loader_animation_name_lab}
            variants={name}
            initial="hidden"
            animate="show"
          >
            <span>LAB</span>
          </motion.div>
        </motion.div>

        <motion.div
          className="loader-animation_right-line"
          ref={loader_animation_right_line}
          variants={line_right}
          initial="hidden"
          animate="show"
          exit="exit"
        ></motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoaderAnimation;
