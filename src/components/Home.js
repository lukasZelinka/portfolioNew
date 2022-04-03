import React from "react";
import { Grid } from "@mui/material";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          backgroundColor: "red",
          widht: "100%",
          height: "70vh",
          position: "absolute",
        }}
      >
        <Grid item>
          <img src="../lukas100.png" alt="author" />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
