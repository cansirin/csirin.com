import styled, { useTheme } from "styled-components";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import { ThemeChanger } from "../ThemeChanger";
import { NavbarLink } from "../Navbar/Link";
import useComponentVisible from "../../../hooks/useComponentVisible";

const navigation = [
  { name: "Home", url: "/" },
  { name: "Projects", url: "/projects" },
  { name: "Posts", url: "/posts" },
  { name: "Photos", url: "/photos" },
  { name: "Tools", url: "/tools" },
  { name: "Resume", url: "/resume.pdf", target: "_blank" },
];

export const Sidebar = () => {
  const router = useRouter();
  const theme = useTheme();
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  return (
    <SidebarContainer>
      <div ref={ref} onClick={() => setIsComponentVisible(!isComponentVisible)}>
        {/*// TODO: This logic shouldn't work like this*/}
        <Menu>
          {isComponentVisible ? (
            <Icon icon="radix-icons:cross-2" height={36} />
          ) : (
            <Icon icon="quill:hamburger" height={36} />
          )}
        </Menu>
        <Nav isHidden={!isComponentVisible}>
          {navigation.map((link, index) => {
            return (
              <NavbarLink
                padded
                key={index}
                link={link.url}
                fontSize="24px"
                target={link.target}
                isActive={router.asPath === link.url}
                color={theme.colors.hiContrastText}
              >
                {link.name}
              </NavbarLink>
            );
          })}
        </Nav>
      </div>
      <Icons>
        <ThemeChanger size={32} />
        <a href="https://www.linkedin.com/in/can-sirin-web/">
          <Icon height={32} icon="akar-icons:linkedin-box-fill" />
        </a>
        <a href="https://github.com/cansirin">
          <Icon height={32} icon="akar-icons:github-outline-fill" />
        </a>
      </Icons>
    </SidebarContainer>
  );
};

const Menu = styled.div`
  display: flex;
  align-items: center;
  margin: 16px;
`;

const MenuTitle = styled.span`
  font-size: 24px;
`;

interface NavProps {
  readonly isHidden?: boolean;
}

const Nav = styled.nav<NavProps>`
  display: flex;
  flex-direction: column;
  padding: 8px;
  width: 250px; // experiment with this value, try changing to 110vh
  top: 140px;
  left: 20px;
  gap: 10px;
  border-radius: 8px;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.sand3};
  border: 1px solid ${({ theme }) => theme.colors.amber7};
  visibility: ${(props) => (props.isHidden ? "hidden" : "visible")};
  opacity: ${(props) => (props.isHidden ? 0 : 1)};
  color: ${({ theme }) => theme.colors.lowContrastText};

  @media (max-width: 359px) {
    top: 160px;
  }
`;

const SidebarContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  z-index: 10000;
  width: 100%;
  max-width: 60em;

  @media (min-width: 1024px) {
    display: none;
  }
`;

const Icons = styled.div`
  display: flex;
  gap: 10px;
  padding-right: 10px;
  align-items: center;
`;
