import Link from "next/link";
import { FC } from "react";
import styled from "styled-components";

type InsiderLinkProps = {
  link: string;
  fontSize?: number;
  color?: string;
  target?: string;
  isActive?: boolean;
};

export const InternalLink: FC<InsiderLinkProps> = ({
  link,
  fontSize = 28,
  children,
  color = "white",
  target,
  isActive,
}) => {
  return (
    <Link href={link}>
      <StyledLink
        color={color}
        fontSize={fontSize}
        target={target}
        isActive={isActive}
      >
        {children}
      </StyledLink>
    </Link>
  );
};

interface StyledLinkProps {
  readonly fontSize: number;
  readonly color: string;
  readonly isActive?: boolean;
}

const StyledLink = styled.a<StyledLinkProps>`
  text-decoration: underline
    rgb(234, 86, 112, ${(props) => (props.isActive ? 1 : 0)});
  font-size: ${(p) => `${p.fontSize}px`};
  color: ${(p) => p.theme.secondary};
  border-radius: 4px;
  letter-spacing: 0.025em;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
