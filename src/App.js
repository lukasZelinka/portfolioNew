import React, { useState, useEffect } from "react";
import RingLoader from "react-spinners/RingLoader";
import { connect } from "react-redux";
import { finishPreloader } from "./actions/index";
import {
  createTheme,
  ThemeProvider,
  // responsiveFontSizes,
} from "@mui/material/styles";
import AppBar from "./components/AppBar";
import Home from "./components/Home";
// MUI
export let theme = createTheme({
  palette: {
    primary: {
      // oranzova
      main: "#ff6a3d",
    },
    secondary: {
      // zlta
      main: "#f9db6d",
    },
    tertiary: {
      // fialova
      main: "#9daaf2",
    },
    quaternary: {
      // modra na pismo
      main: "#29375b",
    },
    font: {
      // modra na pismo
      dark: "#29375b",
      black: "#191919",
      white: "#F8F8F8",
    },
  },
  // typography: {
  //   fontFamily: "Comic Sans MS",
  // },
  components: {
    MuiLink: {
      defaultProps: {
        underline: "none",
        color: "quaternary.main",
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          fontSize: "1em",
          padding: 0,
        },
      },
    },
  },
});
// theme = responsiveFontSizes(theme);
// Component
function App({ finishPreloader, preloading }) {
  useEffect(() => {
    setTimeout(() => finishPreloader(), 500);
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        {preloading && (
          <div className="loaderWrapper">
            <RingLoader color={"#9DAAF2"} size={150} />
          </div>
        )}
        <AppBar />
        <Home />
      </ThemeProvider>
    </>
  );
}

const mapStateToProps = (state) => ({
  preloading: state.preloading,
});

const mapDispatchToProps = (dispatch) => {
  return {
    finishPreloader: () => dispatch(finishPreloader()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
