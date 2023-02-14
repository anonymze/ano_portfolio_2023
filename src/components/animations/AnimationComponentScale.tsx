import { motion } from "framer-motion";
import type { FunctionComponent } from "react";
import type { Props } from "../../types/props";

interface ComponentScale extends Props {
  zoom: boolean;
}

const AnimatedComponentScale: FunctionComponent<ComponentScale> = ({
  zoom,
  children,
}) => {
  return (
    <motion.div
      className=""
      initial={{ scale: 1 }}
      animate={{ scale: zoom ? 1.02 : 0.98 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedComponentScale;
