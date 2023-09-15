import styled from "styled-components";
import type { FC } from "react";
import { useState } from "react";
import { Fade } from "../Fade";

type ToggleProps = {
  text: string;
  icon: any;
  startOpen?: boolean;
};

export const Toggle: FC<ToggleProps> = ({
  children,
  text,
  icon,
  startOpen,
}) => {
  const [show, setShow] = useState(startOpen || false);
  const [rotate, setRotate] = useState(startOpen || false);

  const handleClick = () => {
    setRotate(!rotate);
    setShow(!show);
  };

  return (
    <>
      <IconWrapper onClick={() => handleClick()}>
        <IconContainer rotate={rotate}>{icon}</IconContainer>
        <IconText>{text}</IconText>
      </IconWrapper>
      {show && (
        <div>
          <Fade show={show}>{children}</Fade>
        </div>
      )}
    </>
  );
};

interface IconProps {
  readonly rotate: boolean;
}

const IconWrapper = styled.div`
  display: flex;
  cursor: pointer;
`;

const IconContainer = styled.button<IconProps>`
  border: none;
  background-color: rgba(0, 0, 0, 0);
  color: ${({ theme }) => theme.colors.primary};
  transform: ${(props) => (props.rotate ? `rotate(90deg)` : "")};
  transition: all 0.3s ease-out;
`;

const IconText = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  padding: 0.4rem;
  &:hover {
    border-radius: 8px;
    background-color: ${({ theme }) => `${theme.colors.hoveredBg}`};
  }
  font-size: 24px;
`;
