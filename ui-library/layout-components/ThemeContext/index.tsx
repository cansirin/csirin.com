import { createContext, FC, useContext } from "react";
import { useThemeContextState } from "./useThemeContextState";
import { DefaultTheme, ThemeProvider } from "styled-components";

type ThemeContextProps = {
  theme: string;
  switchTheme: () => void;
  isMounted: boolean;
};

const ThemeContext = createContext<ThemeContextProps>({
  theme: "dark",
  switchTheme: () => {},
  isMounted: false,
});

export const ThemeContextManager: FC = ({ children }) => {
  const context = useThemeContextState();

  if (!context.isMounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={context}>
      <ThemeProvider theme={context.theme === "light" ? lightTheme : darkTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);

const lightTheme: DefaultTheme = {
  primary: "#ea5670",
  secondary: "#2F3A8F",
  border: "#2F3A8F",
  background: "#FEECE9",
  text: "#000000",
};

const darkTheme: DefaultTheme = {
  primary: "#ea5670",
  secondary: "#FEECE9",
  border: "#eaeaea7f",
  background: "#3b3b53",
  text: "#FEECE9",
};
