import { motion } from "framer-motion";
import type { STATUS } from "./AnimatedComponentOnCLickClipboard";
import type { FunctionComponent } from "react";
import type { Props } from "../../types/props";

interface ComponentOnClick extends Props {
  status: STATUS;
}

const variants = {
  inactive: {
    display: "none",
    opacity: 0,
    y: 20
  },
  active: {
    display: "block",
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const AnimatedComponentOnClickMenu: FunctionComponent<ComponentOnClick> = ({
  children,
  status,
}) => {
  return (
    <>
      <motion.div
        id="menu"
        initial="inactive"
        variants={variants}
        animate={status}
        transition={{ ease: "anticipate", duration: 0.2 }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default AnimatedComponentOnClickMenu;
