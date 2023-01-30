import { motion } from "framer-motion";

const AnimatedComponent = ({ duration, children }: any) => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeOut", duration }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedComponent;
