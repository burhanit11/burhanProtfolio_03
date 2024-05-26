import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import ReactTyped from "react-typed";

const Home = () => {
  return (
    <div
      id="Home"
      className=" grid md:grid-cols-2  sm:grid-cols-1  gap-4 lg:text-start md:text-start md:pt-20  text-center hero"
    >
      <div className="md:pl-20 xl:mt-24 lg:mt-10 md:mt-5 lg:text-start md:start  ">
        <h3 className="lg:text-7xl md:text-3xl font-bold text-7xl ">Hello,</h3>
        <h1 className="lg:text-7xl md:text-4xl  font-bold text-7xl pt-5 ">
          {/* I Am BURHAN. */}
          <ReactTyped
            strings={["I Am BURHAN."]}
            typeSpeed={200}
            loop
            backSpeed={20}
            cursorChar="|"
            showCursor={true}
          />
        </h1>
        <motion.h5
          className="lg:text-3xl md:text-1xl font-bold pt-4"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 3 }}
        >
          UI/UX Designer
        </motion.h5>
        <motion.p
          className=" lg:font-normal  pt-2"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 3 }}
        >
          Must explain to how all this mistaken idea denouncing pleasure pain
          the system and expound the actua.
        </motion.p>
        <div className="div0">
          <button className="login mt-5 md:center">
            Hire Me <ArrowDownwardIcon />
          </button>
        </div>
      </div>
      <div className="right my-10">
        <span className="div1  md:pt-7">
          <motion.span
            className="span1"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 3 }}
          >
            <img src="./assets/photoshop.svg" alt="" />
          </motion.span>
          <motion.span
            className="span1"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 3 }}
          >
            <img src="./assets/illustrator.svg" alt="" />
          </motion.span>
        </span>
        <span className="div2">
          <span className="span">
            <h2>
              <CountUp start={1000} end={1500} duration={2.5} separator="," />+
            </h2>
            <p>Complete Project</p>
          </span>
          <motion.span
            className="span1"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 3 }}
          >
            <img src="./assets/diamond.svg" alt="" />
          </motion.span>
        </span>
      </div>
    </div>
  );
};

export default Home;
