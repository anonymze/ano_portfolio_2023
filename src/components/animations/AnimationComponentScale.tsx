import { motion } from "framer-motion";

const AnimatedComponentScale = ({
  zoom,
  children,
}: {
  zoom: boolean;
  children: any;
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
