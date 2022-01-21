import { motion } from "framer-motion";
import { FC } from "react";

const variants = {
  container: {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
};

export const Animate: FC = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants.container}
    >
      {children}
    </motion.div>
  );
};
