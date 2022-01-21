import { motion } from "framer-motion";
import { FC } from "react";

type AnimationProps = {
  x?: number;
  y?: number;
};

export const FadeInAnimation: FC<AnimationProps> = ({ children, x, y }) => {
  const variant = {
    animation: {
      initial: {
        opacity: 0,
        x,
        y,
      },
      animate: {
        opacity: 1,
        x: 0,
        y: 0,
      },
      exit: {
        opacity: 0,
      },
    },
  };

  return <motion.div variants={variant.animation}>{children}</motion.div>;
};
