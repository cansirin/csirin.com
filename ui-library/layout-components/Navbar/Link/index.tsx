import { FC } from "react";
import Link from "next/link";
import styled from "styled-components";

type NavbarLinkProps = {
  link: string;
  fontSize?: string;
  color?: string;
  target?: string;
  isActive?: boolean;
  padded?: boolean;
};

export const NavbarLink: FC<NavbarLinkProps> = ({
  link,
  fontSize,
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
  readonly fontSize?: string;
  readonly color?: string;
  readonly isActive?: boolean;
  readonly padded?: boolean;
}

const StyledLink = styled.a<StyledLinkProps>`
  font-size: ${(p) => `${p.fontSize}`};
  color: ${(p) =>
    p.isActive ? p.theme.colors.primary : p.theme.colors.secondary};
  background-color: ${(p) => (p.isActive ? p.theme.colors.hoveredBg : null)};
  cursor: pointer;
  letter-spacing: 0.03em;
  border-radius: 8px;
  padding: ${(props) => (props.padded ? "0.5em" : 0)};
  transition: 0.2s;

  &:hover {
    border-radius: 8px;
    background-color: ${({ theme }) => `${theme.colors.hoveredBg}`};
  }
`;
