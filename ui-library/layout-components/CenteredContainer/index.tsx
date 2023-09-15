import { motion } from "framer-motion";
import { FC } from "react";
import styled from "styled-components";

type CenteredContainerProps = {
  width?: string;
};

export const CenteredContainer: FC<CenteredContainerProps> = ({ children }) => {
  return <CenterDiv exit={{ opacity: 0 }}>{children}</CenterDiv>;
};

interface CenterDivProps {
  // readonly width: string;
}

const CenterDiv = styled(motion.div)<CenterDivProps>`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  max-width: 60em;

  @media (max-width: 1023px) {
    max-width: 50em;
    padding: 0 20px;
  }
`;
