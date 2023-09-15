import { Icon } from "@iconify/react";
import styled from "styled-components";
import { ThemeChanger } from "../ThemeChanger";
import { useRouter } from "next/router";
import { NavbarLink } from "./Link";

export const Navbar = () => {
  const navigation = [
    { name: "Home", url: "/" },
    { name: "Projects", url: "/projects" },
    { name: "Posts", url: "/posts" },
    { name: "Photos", url: "/photos" },
    { name: "Tools", url: "/tools" },
    { name: "Resume", url: "/resume.pdf", target: "_blank" },
  ];

  const router = useRouter();

  return (
    <Sticky>
      <NavbarContainer>
        {navigation.map((link, index) => {
          return (
            <NavbarLink
              padded
              key={index}
              link={link.url}
              fontSize="1.5rem"
              target={link.target}
              isActive={router.asPath === link.url}
            >
              {link.name}
            </NavbarLink>
          );
        })}
        <Info>
          <ThemeChanger size={40} />
          <a href="https://www.linkedin.com/in/can-sirin-web/">
            <Icon height={40} icon="akar-icons:linkedin-box-fill" />
          </a>
          <a href="https://github.com/cansirin">
            <Icon height={40} icon="akar-icons:github-outline-fill" />
          </a>
        </Info>
      </NavbarContainer>
    </Sticky>
  );
};

const Sticky = styled.div`
  z-index: 9999;
  top: 0;
  position: sticky;
  position: -webkit-sticky;
  width: 100%;
`;

const Info = styled.div`
  font-size: xx-large;
  display: flex;
  gap: 10px;
`;

const NavbarContainer = styled.nav`
  display: flex;
  column-gap: 2em;
  justify-content: center;
  padding: 2rem;
  height: 100px;
  align-items: center;
  //border-bottom: 1px solid;
  // border-bottom-color: ${({ theme }) => theme.colors.subtleBorder};
  background-color: ${({ theme }) => theme.colors.background};

  @media (max-width: 1023px) {
    display: none;
  }
`;
