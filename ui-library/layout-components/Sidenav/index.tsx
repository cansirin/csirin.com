import styled from "styled-components";
import { NavbarLink } from "../Navbar/Link";
import { useRouter } from "next/router";
import { Toggle } from "../../page-components/Toggle";
import { Icon } from "@iconify/react";

export const Sidenav = () => {
  const router = useRouter();

  return <SidenavContainer></SidenavContainer>;
};

const SidenavContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
