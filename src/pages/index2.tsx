import * as React from "react";
import { useState } from "react";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../components/ThemeProvider/GlobalStyle";

import {
  lightTheme,
  darkTheme,
} from "../components/ThemeProvider/ThemeProvider";

interface Props {
  isDarkMode: boolean;
  changeColor: () => {};
}

const IndexPage: React.FC<Props> = ({ isDarkMode, changeColor }) => {
  const [theme, setTheme] = useState("light");

  /** Theme Color Toggler */
  const themeToggler = (): void => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "dark" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <div className={`container`}>s
          <h1>Hello, ThemeProvider</h1>
          <button onClick={themeToggler}>Switch Theme</button>
        </div>
      </>
    </ThemeProvider>
  );
};

export default IndexPage;
