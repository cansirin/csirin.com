import type { FC } from "react";
import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Fade } from "../Fade";

type ToggleProps = {
  text: string;
};

export const Toggle: FC<ToggleProps> = ({ children, text }) => {
  const [show, setShow] = useState(false);
  const [rotate, setRotate] = useState(false);
  console.log(show, rotate);

  const handleClick = () => {
    setRotate(!rotate);
    setShow(!show);
  };

  return (
    <div style={{ marginBottom: "10px" }}>
      <IconWrapper onClick={() => handleClick()}>
        <Icon rotate={rotate}>⫸</Icon>
        <IconText>{text}</IconText>
      </IconWrapper>
      {show && (
        <div>
          <Fade show={show}>{children}</Fade>
        </div>
      )}
    </div>
  );
};

Toggle.displayName = "Toggle";

interface IconProps {
  readonly rotate: boolean;
}

const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 24px;
  cursor: pointer;
  margin-bottom: 20px;
`;

const Icon = styled.button<IconProps>`
  border: none;
  background-color: rgba(0, 0, 0, 0);
  color: ${({ theme }) => theme.primary};
  transform: ${(props) => (props.rotate ? `rotate(90deg)` : "")};
  transition: all 0.3s ease-out;
`;

const IconText = styled.text`
  color: ${({ theme }) => theme.secondary};
  &:hover {
    text-decoration: underline;
  }
`;
