import Head from "next/head";
import { FC } from "react";
import styled from "styled-components";
import { ThemeChanger } from "../ThemeChanger";

export const Layout: FC = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>csirin's space</title>
      </Head>
      <Main>{children}</Main>
    </>
  );
};

const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
