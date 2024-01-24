import { motion, useAnimation, useInView } from "framer-motion";
import React, { PropsWithChildren, useEffect, useRef } from "react";

const FadeInVisible = ({ children }: PropsWithChildren) => {
  const ref = useRef(null);
  const isInview = useInView(ref);
  const controls = useAnimation();
  useEffect(() => {
    if (isInview) {
      controls.start("visible");
    }
  }, [isInview]);
  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInVisible;
