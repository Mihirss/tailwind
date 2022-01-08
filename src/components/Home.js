import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Loader from "./Loader";

const buttonVarient = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255) ",
    transition: {
      yoyo: Infinity,
    },
  },
};

const containerVarient = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
      duration: 1.5,
    },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};
const Home = () => {
  return (
    <motion.div
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // transition={{ delay: 1, duration: 1.5 }}
      variants={containerVarient}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="home container"
    >
      <motion.h2 animate={{ fontSize: 50, color: "#ff2994" }}>
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button
          //   animate={{ scale: 1.5 }}
          // whileHover={{
          //   scale: 1.5,
          //   textShadow: "0px 0px 8px rgb(255,255,255)",
          //   boxShadow: "0px 0px 8px rgb(255,255,255) ",
          // }}
          variants={buttonVarient}
          whileHover="hover"
        >
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader />
    </motion.div>
  );
};

export default Home;
