import Head from "next/head";
import { FC } from "react";
import styled from "styled-components";
import { ThemeChanger } from "../ThemeChanger";
import { GA_TRACKING_ID } from "../../../lib/gtag";
import Script from "next/script";

const isProduction = process.env.NODE_ENV === "production";

export const Layout: FC = ({ children }) => {
  return (
    <>
      <Head>
        {/* enable analytics script only for production */}
        {isProduction && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
            <Script
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
              }}
            />
          </>
        )}
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>csirin's space</title>
      </Head>
      <Main>
        {/*<Banner>*/}
        {/*  <p style={{ fontSize: 16 }}>*/}
        {/*    Looking for a job as a software engineer! Reach out to me at my{" "}*/}
        {/*    <a*/}
        {/*      href="mailto:cansirin12@gmail.com"*/}
        {/*      style={{ textDecoration: "underline" }}*/}
        {/*    >*/}
        {/*      email!*/}
        {/*    </a>{" "}*/}
        {/*    - cansirin12@gmail.com*/}
        {/*  </p>*/}
        {/*</Banner>*/}
        {children}
      </Main>
    </>
  );
};

const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Banner = styled.div`
  color: #111;
  width: 100%;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.amber9};
`;
