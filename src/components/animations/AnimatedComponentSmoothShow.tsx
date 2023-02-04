import { motion } from "framer-motion";
import type { STATUS } from "./AnimatedComponentOnCLick";

const AnimatedComponentSmoothShow = ({
  text,
  trigger,
}: {
  text: string;
  trigger?: STATUS;
}) => {
  return (
    <motion.div
      className="absolute top-0 left-1/2 translate-x-[-50%] w-max px-4 py-1 rounded-lg text-sm text-black bg-white"
      initial={{ x: "-50%", y: 0, opacity: 0 }}
      animate={{ x: "-50%", y: 40, opacity: 1 }}
      exit={{ x: "-50%", y: 40, opacity: 0 }}
      transition={{ ease: "easeOut", duration: 0.3 }}
    >
      {text}
    </motion.div>
  );
};

export default AnimatedComponentSmoothShow;
