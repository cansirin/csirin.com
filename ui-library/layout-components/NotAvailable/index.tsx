import Link from "next/link";
import { FC } from "react";
import styled from "styled-components";
import { FadeInAnimation } from "..";

type NotAvailableProps = {
  text: string;
};

export const NotAvailable: FC<NotAvailableProps> = ({ text }) => {
  return (
    <FadeInAnimation x={-100}>
      <NotAvailableContainer>{text}</NotAvailableContainer>
    </FadeInAnimation>
  );
};

const NotAvailableContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  border: 2px solid ${({ theme }) => theme.border};
  padding: 12px 16px;
  margin-bottom: 10px;
  margin-left: 10px;
  font-size: 24px;
`;
