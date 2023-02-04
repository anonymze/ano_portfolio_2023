import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import AnimatedComponentSmoothShow from "./AnimatedComponentSmoothShow";

export enum STATUS {
  active = "active",
  inactive = "inactive",
}

const AnimatedComponentOnClick = ({ children }: any) => {
  const [stateAnim, setStateAnim] = useState<STATUS>(STATUS.inactive);

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => {
          if (STATUS.active === stateAnim) {
            return;
          }
          
          setStateAnim(STATUS.active);
          setTimeout(() => {
            setStateAnim(STATUS.inactive);
          }, 1200);
        }}
      >
        {children}
      </motion.div>

      <AnimatePresence>
        {STATUS.active === stateAnim && (
          <AnimatedComponentSmoothShow text="Email copié !" />
        )}
      </AnimatePresence>
    </>
  );
};

export default AnimatedComponentOnClick;
