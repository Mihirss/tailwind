import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ showModal, setShowModal }) => {
  const backDrop = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  };

  const modal = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "200px",
      opacity: 1,
      Transition: {
        delay: 0.5,
      },
    },
  };
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          variants={backDrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="backDrop"
        >
          <motion.div
            variants={modal}
            initial="hidden"
            animate="visible"
            className="modal"
          >
            <p>Want to Make Another Order of Pizza ;) ?</p>
            <Link to="/">
              <button
              // onClick={() => {
              //   setShowModal(false);
              // }}
              >
                Yes, I want More Pizza's
              </button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
