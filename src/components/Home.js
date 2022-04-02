import React from "react";
import { Box, Grid } from "@mui/material";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Box sx={{ widht: "100%", height: "70vh" }}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{
            // backgroundColor: "red",
            widht: "100%",
            height: "70vh",
            position: "absolute",
          }}
        >
          <Grid item sx={{ maxWidth: "100px" }}>
            <p>ahoj</p>
            {/* <img src="../lukas-small.png" alt="author" /> */}
          </Grid>
        </Grid>
        <div className="area">
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </Box>
    </>
  );
};

export default Home;
