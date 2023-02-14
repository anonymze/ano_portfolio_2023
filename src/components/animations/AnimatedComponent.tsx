import { motion } from "framer-motion";
import type { FunctionComponent, ReactNode } from "react";
import type { Props } from "../../types/props";

interface Component extends Props {
  duration: number;
}

const AnimatedComponent: FunctionComponent<Component> = ({
  duration,
  children,
}) => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "anticipate", duration }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedComponent;
