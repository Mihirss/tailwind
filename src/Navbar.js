import React from "react";
import logo from "./logo.svg";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  return (
    <>
      <div className="bg-pink-dark h-8 border-b-2  2xl:w-full">
        <nav className="flex flex-row justify-between mx-auto my-auto">
          {/* <AnimatePresence
            initial={false}
            exitBeforeEnter={true}
            onExitComplete={() => null}
          > */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-row justify-evenly my-auto "
          >
            <img src={logo} className="h-5 left-0 my-auto" />
            <label className="text-blue-dark">React+Tailwind</label>
          </motion.div>
          {/* </AnimatePresence> */}
          <ul
            className="flex flex-row justify-around my-auto text-gray-lightest sm:hidden md:hidden xl:flex 2xl:visible
          "
          >
            <li className="mx-4">Home</li>
            <li className="mx-4">About</li>
            <li className="mx-4">Contact</li>
            <li className="mx-4">Services</li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
