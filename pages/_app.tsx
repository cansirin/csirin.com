import type { AppProps } from "next/app";
import { Layout, Navbar, Sidebar } from "../ui-library/layout-components";
import { AnimatePresence } from "framer-motion";
import { createGlobalStyle } from "styled-components";
import { ThemeContextManager } from "../ui-library/layout-components/ThemeContext";
import * as gtag from "../lib/gtag";
import { useEffect } from "react";

const GlobalStyle = createGlobalStyle`
  html,
  [data-reactroot],
  body {
    padding: 0;
    margin: 0;
    font-family: Inter, -apple-system, Segoe UI, BlinkMacSystemFont, Ubuntu, Cantarell, Fira Sans, Droid Sans, Roboto, sans-serif;
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.background};
    height: 100%;
    width: 100%;
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
    ::-webkit-scrollbar {
      display: none;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;
const isProduction = process.env.NODE_ENV === "production";

function App({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      /* invoke analytics function only for production */
      if (isProduction) gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <ThemeContextManager>
      <GlobalStyle />
      <Layout>
        <Navbar />
        <Sidebar />
        <AnimatePresence exitBeforeEnter initial={false}>
          <Component key={router.route} {...pageProps} />
        </AnimatePresence>
      </Layout>
    </ThemeContextManager>
  );
}

export default App;
