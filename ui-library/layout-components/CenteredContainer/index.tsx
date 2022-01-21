import { motion } from "framer-motion";
import { FC } from "react";
import styled from "styled-components";

type CenteredContainerProps = {
  width?: string;
  height?: string;
};

export const CenteredContainer: FC<CenteredContainerProps> = ({
  children,
  height = "100%",
  width = "100%",
}) => {
  return (
    <CenterDiv height={height} width={width} exit={{ opacity: 0 }}>
      {children}
    </CenterDiv>
  );
};

interface CenterDivProps {
  readonly width: string;
  readonly height: string;
}

const CenterDiv = styled(motion.div)<CenterDivProps>`
  margin: 0 auto;
  width: ${(p) => p.width};
  height: ${(p) => p.height};
`;
