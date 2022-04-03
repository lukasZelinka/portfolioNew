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
          <Grid item>
            <img src="../lukas100.png" alt="author" />
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
      <img src="../skuska1.jpg" alt="" />
      <img src="../skuska2.jpg" alt="" />
      <img src="../skuska3.jpg" alt="" />
      <img src="../skuska4.jpg" alt="" />
    </>
  );
};

export default Home;
