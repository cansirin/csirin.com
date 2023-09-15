import Link from "next/link";
import { FC } from "react";
import styled from "styled-components";

type TagLinkProps = {
  link: string;
  fontSize?: number;
  color?: string;
  target?: string;
  isActive?: boolean;
  padded?: boolean;
};

export const TagLink: FC<TagLinkProps> = ({
  link,
  fontSize = 28,
  children,
  color = "white",
  target,
  isActive,
  padded,
}) => {
  return (
    <Link href={link} passHref>
      <StyledLink
        color={color}
        fontSize={fontSize}
        target={target}
        isActive={isActive}
        padded={padded}
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
  readonly padded?: boolean;
}

const StyledLink = styled.a<StyledLinkProps>`
  font-size: ${(props) => `${props.fontSize}px`};
  color: ${(props) =>
    props.isActive ? props.theme.colors.primary : props.theme.colors.secondary};
  cursor: pointer;
  letter-spacing: 0.03em;
  border-radius: 4px;
  padding: ${(props) => (props.padded ? "0.3em" : 0)};

  &:hover {
    text-decoration: underline ${({ theme }) => `${theme.colors.primary}`};
  }
`;
