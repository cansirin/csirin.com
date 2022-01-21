import Link from "next/link";
import { Icon } from "@iconify/react";
import styled from "styled-components";
import { ThemeChanger } from "../ThemeChanger";
import { useRouter } from "next/router";
import { InternalLink } from "../../page-components/InsiderLink";

export const Navbar = () => {
  const navigation = [
    { name: "Projects", url: "/projects" },
    { name: "Posts", url: "/posts" },
    { name: "Resume", url: "/resume.pdf", target: "_blank" },
  ];

  const router = useRouter();

  return (
    <NavbarContainer>
      <Link href="/">
        <a className="title">csirin's space</a>
      </Link>
      {navigation.map((link, index) => {
        return (
          <InternalLink
            key={index}
            link={link.url}
            isActive={router.asPath === link.url}
            target={link.target}
          >
            {link.name}
          </InternalLink>
        );
      })}
      <Info>
        <ThemeChanger size={45} />
        <a href="https://github.com/cansirin">
          <Icon height={45} icon="akar-icons:github-outline-fill" />
        </a>
        <a href="https://www.linkedin.com/in/can-sirin-web/">
          <Icon height={45} icon="ant-design:linkedin-outlined" />
        </a>
      </Info>
    </NavbarContainer>
  );
};

const Info = styled.div`
  font-size: xx-large;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  z-index: 9999;
  height: 100px;
  align-items: center;
  margin-bottom: 10px;
  top: 0;
  position: sticky;
  position: -webkit-sticky;
  border-bottom: 2px solid;
  border-bottom-color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.background};
  font-family: "American Typewriter", serif;

  .link {
    color: ${({ theme }) => theme.secondary};
    font-size: 26px;
  }

  .link:hover {
    text-decoration: ${({ theme }) => theme.secondary} underline;
  }

  .title {
    color: ${({ theme }) => theme.primary};
    font-size: 36px;
    font-weight: 700;

    align-self: center;

    &:hover {
      text-decoration: ${({ theme }) => theme.primary} underline;
    }
  }
`;
