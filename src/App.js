import React, { useState, useEffect } from "react";
import RingLoader from "react-spinners/RingLoader";
import { connect } from "react-redux";
import { startPreloader, finishPreloader } from "./actions/index";
import AppBar from "./components/AppBar";

function App({ startPreloader, finishPreloader, preloading }) {
  //
  window.addEventListener("load", function () {
    finishPreloader();
  });

  return (
    <>
      {preloading ? (
        <div className="loaderWrapper">
          <RingLoader color={"#9DAAF2"} loading={preloading} size={150} />
        </div>
      ) : (
        <>
          <AppBar />
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
