import React, { useState, useEffect } from "react";
import RingLoader from "react-spinners/RingLoader";
import { connect } from "react-redux";
import { startPreloader, finishPreloader } from "./actions/index";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";
import AppBar from "./components/AppBar";
import Home from "./components/Home";

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
  },
});

function App({ startPreloader, finishPreloader, preloading }) {
  //
  window.addEventListener("load", function () {
    finishPreloader();
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        {preloading ? (
          <div className="loaderWrapper">
            <RingLoader color={"#9DAAF2"} loading={preloading} size={150} />
          </div>
        ) : (
          <>
            <AppBar />
            <Home />
          </>
        )}
      </ThemeProvider>
    </>
  );
}

const mapStateToProps = (state) => ({
  preloading: state.preloading,
});

const mapDispatchToProps = (dispatch) => {
  return {
    startPreloader: () => dispatch(startPreloader()),
    finishPreloader: () => dispatch(finishPreloader()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
