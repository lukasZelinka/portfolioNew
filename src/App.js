import React, { useState, useEffect } from "react";
import RingLoader from "react-spinners/RingLoader";
import { connect } from "react-redux";
import { startPreloader, finishPreloader } from "./actions/index";
import AppBar from "./components/AppBar";
import Home from "./components/Home";

function App({ startPreloader, finishPreloader, preloading }) {
  useEffect(() => {
    startPreloader();
    setTimeout(() => {
      finishPreloader();
    }, 2400);
  }, []);

  return (
    <>
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
