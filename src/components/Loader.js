import React from "react";
import { motion, useCycle } from "framer-motion";

const loaderVariant = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
  animationTwo: {
    x: 0,
    y: [0, -30],
    transition: {
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
  animationThree: {
    y: 0,
    x: [-20, 20],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  },
};
const Loader = () => {
  const [animationCycle, toggleAnimationCycle] = useCycle(
    "animationOne",
    "animationTwo",
    "animationThree",
  );
  return (
    <>
      <motion.div
        className="loader"
        variants={loaderVariant}
        animate={animationCycle}
      ></motion.div>
      <button onClick={() => toggleAnimationCycle()}>cycle Loader</button>
    </>
  );
};

export default Loader;
