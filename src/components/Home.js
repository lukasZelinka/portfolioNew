import React from "react";
import { Grid, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "./Home.css";
import Typewritter from "./TypewritterEffect/Typewritter";

const Home = () => {
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          backgroundColor: "secondary.main",
          widht: "100%",
          // height: "70vh",
          height: { xs: "100vh", sm: "70vh" },
          position: "absolute",
        }}
      >
        <Grid item>
          <img src="../lukas100.png" alt="author" />
        </Grid>
        <Grid item sx={{ mt: 3 }}>
          <Typography variant="h4" sx={{ color: "font.white" }}>
            I'm Lukas Zelinka
          </Typography>
        </Grid>
        <Grid item sx={{ mt: 3 }}>
          <Typewritter />
        </Grid>
        <Grid item sx={{ mt: 2 }}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={3}
          >
            <Grid item>
              <GitHubIcon />
            </Grid>
            <Grid item>
              <FacebookIcon />
            </Grid>
            <Grid item>
              <WhatsAppIcon />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
