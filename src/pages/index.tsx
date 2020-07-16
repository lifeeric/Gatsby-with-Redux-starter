import * as React from "react";
import { useState } from "react";

import { connect } from "react-redux";
import "../global.sass";
import { DarkToggler } from "react-darkmode-toggler";

interface Props {
  isDarkMode: boolean;
  changeColor: () => {};
}

const IndexPage: React.FC<Props> = ({ isDarkMode, changeColor }) => {
  // True: Dark mode is on, False: light Mode is on
  // const [isDark, setIsChecked] = useState<boolean>(isDarkMode);

  // toggling button handler
  const darkModeTogger = () => {
    changeColor();
  };
  return (
    <div className={`container ${isDarkMode ? `darkTheme` : `lightTheme`}`}>
      <h1>Hello, Gatsby With Redux</h1>
      <DarkToggler size="small" isDark={isDarkMode} onClick={darkModeTogger} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isDarkMode: state.app.isDarkMode,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeColor: () => dispatch({ type: "TOGGLE_DARKMODE" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
