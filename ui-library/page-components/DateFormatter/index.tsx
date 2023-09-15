import { parseISO, format } from "date-fns";
import styled from "styled-components";

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  const date = parseISO(dateString);
  return (
    <TimeContainer dateTime={dateString}>
      <Time>{format(date, "LLL	d, yyyy")}</Time>
    </TimeContainer>
  );
};

export default DateFormatter;

const TimeContainer = styled.time`
  color: ${({ theme }) => theme.colors.primary};
  margin: 4px;
  white-space: nowrap;
  font-size: 18px;
`;

const Time = styled.span``;
