import styled from "styled-components";
import { Icon } from "@iconify/react";
import { FC } from "react";
import { useThemeContext } from "../ThemeContext";

type ThemeChangerProps = {
  size?: number;
};

export const ThemeChanger: FC<ThemeChangerProps> = ({ size = 45 }) => {
  const { theme, switchTheme } = useThemeContext();

  return (
    <ChangeButton onClick={() => switchTheme()}>
      {theme === "light" ? (
        <Icon height={size} icon="gg:sun" />
      ) : (
        <Icon height={size} icon="gg:moon" />
      )}
    </ChangeButton>
  );
};

const ChangeButton = styled.button`
  border: none;
  padding: 0;
  background-color: rgba(0, 0, 0, 0);
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`;
