import { parseISO, format } from "date-fns";
import styled from "styled-components";

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  const date = parseISO(dateString);
  return (
    <TimeContainer dateTime={dateString}>
      {format(date, "LLL	d, yyyy")}
    </TimeContainer>
  );
};

export default DateFormatter;

const TimeContainer = styled.time`
  color: ${({ theme }) => theme.primary};
  margin: 4px;
  white-space: nowrap;
  font-size: 18px;
`;
