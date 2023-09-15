import styled from "styled-components";

export const Typewriter = styled.p`
  border-right: solid 5px;
  white-space: nowrap;
  overflow: hidden;
  font-size: 64px;
  font-weight: 500;
  max-width: 800px;
  margin: 0 auto 20px;
  color: ${({ theme }) => theme.colors.hiContrastText};
  text-align: left;

  animation: animated-text 1.5s steps(30, end) 1s 1 normal both,
    animated-cursor 1200ms linear infinite;

  @media (max-width: 960px) {
    animation: none;
    border: none;
    text-align: center;
    font-size: 48px;
    white-space: pre-line;
  }

  @keyframes animated-text {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
  /* cursor animations */
  @keyframes animated-cursor {
    from {
      border-right-color: ${({ theme }) => theme.colors.primary};
    }
    to {
      border-right-color: transparent;
    }
  }
`;
