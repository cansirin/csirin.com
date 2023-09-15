import { createContext, FC, useContext } from "react";
import { useThemeContextState } from "./useThemeContextState";
import { ThemeProvider } from "styled-components";
import { amber, amberDark, sand, sandDark } from "@radix-ui/colors";

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
const oldLightTheme = {
  colors: {
    ...amber,
    primary: "#ea5670",
    radix: amber.amber7,
    secondary: "#2F3A8F",
    border: "#2F3A8F",
    background: "#FEECE9",
    text: "#000000",
  },
};

const lightTheme = {
  colors: {
    ...amber,
    ...sand,
    primary: amber.amber11,
    secondary: amber.amber12,
    subtleBorder: amber.amber6,
    border: amber.amber7,
    hoveredBorder: amber.amber8,
    background: sand.sand2,
    hoveredBg: amber.amber4,
    lowContrastText: amber.amber11,
    hiContrastText: amber.amber12,
    brand: amber.amber9,
    dark: sand.sand1,
  },
};

const darkTheme = {
  colors: {
    ...amberDark,
    ...sandDark,
    primary: amberDark.amber11,
    secondary: amberDark.amber12,
    brand: amberDark.amber9,
    subtleBorder: amberDark.amber6,
    border: amberDark.amber7,
    hoveredBorder: amberDark.amber8,
    background: sandDark.sand2,
    hoveredBg: amberDark.amber4,
    lowContrastText: amberDark.amber11,
    hiContrastText: amberDark.amber12,
    dark: sandDark.sand1,
  },
};
const oldDarkTheme = {
  colors: {
    primary: "#ea5670",
    secondary: "#FEECE9",
    border: "#eaeaea7f",
    background: "#3b3b53",
    radix: amber.amber1,
    text: "#FEECE9",
  },
};
