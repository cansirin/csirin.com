import { FC } from "react";
import styles from "./Fade.module.css";

type FadeProps = {
  show: boolean;
};

export const Fade: FC<FadeProps> = ({ children, show }) => {
  return (
    <div className={show ? styles.fadeIn : styles.fadeOut}>{children}</div>
  );
};
