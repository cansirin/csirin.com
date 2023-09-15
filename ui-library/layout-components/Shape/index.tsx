// @ts-ignore
import { Circle } from "react-awesome-shapes";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FC } from "react";

interface ShapeContainerProps {
  readonly top?: string;
  readonly left?: string;
  readonly right?: string;
  readonly bottom?: string;
  readonly animated?: boolean;
}

const ShapeContainer = styled.div<ShapeContainerProps>`
  position: absolute;
  animation: ${(p) => (p.animated ? "6s slidein " : "")};
  top: ${(p) => p.top};
  left: ${(p) => p.left};
  right: ${(p) => p.right};
  bottom: ${(p) => p.bottom};

  @keyframes slidein {
    from {
      margin-left: 100%;
      width: 300%;
    }

    75% {
      font-size: 300%;
      margin-left: 25%;
      width: 150%;
    }

    to {
      margin-left: 0%;
      width: 100%;
    }
  }
`;

type ShapeProps = {
  sizes: string[];
  color: string;
  animated: boolean;
  position: {
    left?: string;
    right?: string;
    top?: string;
    bottom?: string;
  };
};

export const Shape: FC<ShapeProps> = ({
  children,
  position,
  sizes,
  color,
  animated,
}) => {
  return (
    <ShapeContainer
      left={position.left}
      right={position.right}
      top={position.top}
      bottom={position.bottom}
      animated={animated}
    >
      <Circle color={color} size={sizes} zIndex={2} />
    </ShapeContainer>
  );
};
