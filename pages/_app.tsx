import type { AppProps } from "next/app";
import { Layout, Navbar } from "../ui-library/layout-components";
import { AnimatePresence } from "framer-motion";
import NextNProgress from "nextjs-progressbar";
import { createGlobalStyle } from "styled-components";
import { ThemeContextManager } from "../ui-library/layout-components/ThemeContext";

const GlobalStyle = createGlobalStyle`
  html,
  [data-reactroot],
  body {
    padding: 0;
    margin: 0;
    font-family: Inter, -apple-system, Segoe UI, BlinkMacSystemFont, Ubuntu, Cantarell, Fira Sans, Droid Sans, Roboto, sans-serif;
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.background};
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

function App({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeContextManager>
      <GlobalStyle />
      <Layout>
        <NextNProgress color="#ea5670" height={3} />
        <Navbar />
        <AnimatePresence exitBeforeEnter initial={false}>
          <Component key={router.route} {...pageProps} />
        </AnimatePresence>
      </Layout>
    </ThemeContextManager>
  );
}

export default App;
