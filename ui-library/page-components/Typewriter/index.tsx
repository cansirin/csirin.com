import styled from "styled-components";

export const Typewriter = styled.p`
  border-right: solid 5px;
  white-space: nowrap;
  overflow: hidden;
  font-size: 56px;
  margin: 200px auto 40px;
  color: ${({ theme }) => theme.secondary};

  animation: animated-text 1.5s steps(30, end) 1s 1 normal both,
    animated-cursor 1200ms linear infinite;
  @keyframes animated-text {
    from {
      width: 0;
    }
    to {
      width: 710px;
    }
  }
  /* cursor animations */
  @keyframes animated-cursor {
    from {
      border-right-color: ${({ theme }) => theme.primary};
    }
    to {
      border-right-color: transparent;
    }
  }
`;
