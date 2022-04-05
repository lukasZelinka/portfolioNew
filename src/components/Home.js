import React from "react";
import { Grid, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "./Home.css";
import Typewritter from "./TypewritterEffect/Typewritter";
import Image from "../img/mountains.svg"; // Import using relative path

const Home = () => {
  console.log(Image);
  return (
    <>
      <Grid
        spacing={4}
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          backgroundColor: "#29375B",
          backgroundImage: `url(${Image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          widht: "100%",
          // height: "70vh",
          height: { xs: "100vh", sm: "80vh" },
          position: "absolute",
        }}
      >
        <Grid item>
          <img src="../lukas100.png" alt="author" />
        </Grid>
        <Grid item>
          <Typography
            variant="h4"
            sx={{ color: "font.white", marginBottom: "10px" }}
          >
            Lukas Zelinka
          </Typography>
        </Grid>
        <Grid item>
          <Typewritter />
        </Grid>
        <Grid
          item
          sx={{
            backgroundColor: "font.white",
          }}
        >
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={5}
          >
            <Grid item>
              <GitHubIcon
                sx={[
                  {
                    fontSize: "2em",
                    color: "#171515",
                    cursor: "pointer",
                  },

                  {
                    "&:hover": {
                      color: "#171515",
                    },
                  },
                ]}
              />
            </Grid>
            <Grid item>
              <FacebookIcon
                sx={[
                  {
                    fontSize: "2em",
                    color: "#39569c",
                    cursor: "pointer",
                  },

                  {
                    "&:hover": {
                      color: "#39569c",
                    },
                  },
                ]}
              />
            </Grid>
            <Grid item>
              <WhatsAppIcon
                sx={[
                  {
                    fontSize: "2em",
                    color: "#25D366",
                    cursor: "pointer",
                  },

                  {
                    "&:hover": {
                      color: "#128C7E",
                    },
                  },
                ]}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
