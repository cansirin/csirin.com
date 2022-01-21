import Link from "next/link";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { ThemeChanger } from "../ThemeChanger";

export const Sidebar = () => {
  const router = useRouter();
  const isHome = router.asPath === "/";

  return (
    <Nav hidden={isHome}>
      <Link href="/">
        <Title>csirin's space</Title>
      </Link>
      <Contacts>
        <ThemeChanger />
        <a href="https://github.com/cansirin">
          <Icon width={45} height={45} icon="akar-icons:github-outline-fill" />
        </a>
        <a href="https://www.linkedin.com/in/can-sirin-web/">
          <Icon width={45} height={45} icon="ant-design:linkedin-outlined" />
        </a>
        <a href="/resume.pdf" download="CanSirin_Resume.pdf">
          <Icon
            width={45}
            height={45}
            icon="fluent:document-bullet-list-20-regular"
          />
        </a>
      </Contacts>
      <SidebarLinks />
    </Nav>
  );
};

interface NavProps {
  readonly hidden?: boolean;
}

const Nav = styled.nav<NavProps>`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.hidden ? 0 : `${350}px`)};
  padding: 32px;
  height: 25vh; // experiment with this value, try changing to 110vh
  top: 0;
  position: sticky;
  position: -webkit-sticky;
  white-space: nowrap;
  visibility: ${(props) => (props.hidden ? "hidden" : "visible")};
  opacity: ${(props) => (props.hidden ? 0 : 1)};
  transition: opacity 1s, width 1s;
`;

const Title = styled.a`
  font-size: larger;
  align-self: center;
  margin-bottom: 10px;
`;

const SidebarLinkContainer = styled.div`
  margin: 8px 0;
  border-radius: 4px;
  padding: 12px 16px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => `${theme.primary}`};
  }
`;

const SidebarLink = styled.a`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.secondary};
  transition: text-decoration-color 300ms;
`;

const Contacts = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 10px;
`;

export const SidebarLinks = () => {
  const navigation = [
    { name: "Home", url: "/" },
    { name: "Projects", url: "/projects" },
    // { name: "Posts", url: "/posts" },
  ];

  return (
    <>
      {navigation.map((link, index) => {
        return (
          <Link href={link.url}>
            <SidebarLinkContainer key={index}>
              <SidebarLink>{link.name}</SidebarLink>
            </SidebarLinkContainer>
          </Link>
        );
      })}
    </>
  );
};
