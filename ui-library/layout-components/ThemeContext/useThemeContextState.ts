import { useEffect, useState } from "react";

export const useThemeContextState = () => {
  const [theme, themeSetter] = useState("light");
  const [isMounted, setMounted] = useState(false);

  const setTheme = (mode: string) => {
    window.localStorage.setItem("theme", mode);
    themeSetter(mode);
  };

  const switchTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    if (localTheme) setTheme(localTheme);
    else setTheme("light");

    setMounted(true);
  }, []);

  return { theme, switchTheme, isMounted };
};
