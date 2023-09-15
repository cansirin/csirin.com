import type { FC } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styled from "styled-components";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import styles from "./markdown.module.css";

type MarkdownProps = {
  children: string;
};

export const Markdown: FC<MarkdownProps> = ({ children }) => {
  return (
    <BlogContainer className={styles.markdown}>
      <ReactMarkdown
        components={{
          code({ node, inline, className, children, ref, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, "")}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
          p: BlogP,
          li: BlogLi,
          blockquote: BlogBlockQuote,
          a: BlogA,
        }}
        plugins={[remarkGfm]}
      >
        {children}
      </ReactMarkdown>
    </BlogContainer>
  );
};

const BlogH2: FC = ({ children }) => {
  return <StyledH2>{children}</StyledH2>;
};
const BlogP: FC = ({ children }) => {
  return <StyledP>{children}</StyledP>;
};

const BlogLi: FC = ({ children }) => {
  return <StyledLi>{children}</StyledLi>;
};

const BlogBlockQuote: FC = (props) => {
  return <StyledBlockQuote {...props} />;
};

const BlogA: FC = (props) => {
  return <StyledA {...props} />;
};

const BlogContainer = styled.div`
  font-family: Tahoma, Verdana, Geneva, sans-serif;
`;

const StyledH2 = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 25px;
  text-align: center;
  font-weight: 400;
`;

const StyledP = styled.p`
  color: ${({ theme }) => theme.colors.hiContrastText};
`;

const StyledLi = styled.li`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.hiContrastText};
  padding: 0;
  margin: 0;
`;

const StyledBlockQuote = styled.blockquote`
  border-left: solid 5px;
  padding: 0 1em;
  margin-left: 0;
  font-style: italic;
  border-left-color: ${({ theme }) => theme.colors.border};
`;

const StyledA = styled.a`
  position: relative;
  overflow: hidden;
  text-decoration: underline ${({ theme }) => theme.colors.primary};
  text-underline-offset: 2px;
  background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.primary},
      ${({ theme }) => theme.colors.primary} 50%,
      ${({ theme }) => theme.colors.secondary} 50%
    )
    100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 100%;
  transition: background-position 275ms ease;
  &:hover {
    background-position: 0 100%;
  }
`;
