import React from "react";
import { Grid, Typography } from "@mui/material";
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
        <Grid item>
          <Typography variant="h4" sx={{ m: 2, color: "font.white" }}>
            I'm Lukas Zelinka
          </Typography>
          ;
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
