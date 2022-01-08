import React, { useEffect } from "react";
import { motion } from "framer-motion";

const Order = ({ pizza, setShowModal }) => {
  const containerVarient = {
    hidden: {
      opacity: 0,
      x: "100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: 0.2, type: "spring" },
    },
    exit: {
      x: "-100vw",
      transition: { ease: "easeInOut" },
    },
  };
  const childVarient = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 5000);
  }, [setShowModal]);
  return (
    <motion.div
      variants={containerVarient}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="container order"
    >
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childVarient} initial="hidden" animate="visible">
        You ordered a {pizza.base} pizza with:
      </motion.p>
      {pizza.toppings.map((topping) => (
        <motion.div
          variants={childVarient}
          initial="hidden"
          animate="visible"
          key={topping}
        >
          {topping}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Order;
