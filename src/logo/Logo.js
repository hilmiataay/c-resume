import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ReactComponent as ReactLogo } from "./r-logo.svg";

function Logo({ AnimateLogo }) {
  const MotionComponent = motion(ReactLogo);
  const [visibility, setVisibility] = useState(false);

  const childVar = {
    initial: {
      x: "350%",
      y: "-50%",
      width: "20%",
    },
    animated: {
      x: 100,

      transition: {
        duration: 1.5,
      },
    },
    exit: {
      x: -450,

      ease: "easeInOut",
      transition: { duration: 0.7, delay: 0.54 },
    },
  };

  return (
    <AnimatePresence>
      {visibility ? null : (
        <MotionComponent
          exit="exit"
          key="asas"
          onClick={() => setVisibility(true)}
          onAnimationComplete={() => {
            setVisibility(true);
          }}
          variants={childVar}
          animate={AnimateLogo ? "animated" : ""}
          initial="initial"
        ></MotionComponent>
      )}
    </AnimatePresence>
  );
}

export default Logo;