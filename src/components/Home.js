import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "./Home.css";
import Typewritter from "./TypewritterEffect/Typewritter";
import Image from "../img/mountains.svg";
import { theme } from "../App";

const Home = () => {
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
          // position: "absolute",
        }}
      >
        <Grid
          item={false}
          sx={{
            marginBottom: "2em",
            marginTop: "3em",
            paddingLeft: "32px",
          }}
        >
          <img src="../lukas100.png" alt="author" />
        </Grid>
        <Grid item={false} sx={{ marginBottom: "2em", paddingLeft: "32px" }}>
          <Typography variant="h4" sx={{ color: "font.white" }}>
            Lukas Zelinka
          </Typography>
        </Grid>
        <Grid item={false} sx={{ marginBottom: "4em", paddingLeft: "32px" }}>
          <Typewritter />
        </Grid>
        <Grid item={false} sx={{ paddingLeft: "32px" }}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{
              backgroundColor: "font.white",
              paddingTop: "0.4em",
              paddingBottom: "0.2em",
              paddingLeft: "0.8em",
              paddingRight: "0.8em",
              borderRadius: 2,
              boxShadow: 3,
            }}
          >
            <Grid item={false} sx={{ marginRight: "2em" }}>
              <GitHubIcon
                sx={[
                  {
                    fontSize: "2em",
                    color: "#171515",
                    cursor: "pointer",
                    transition: theme.transitions.create(
                      ["color", "transform"],
                      {
                        duration: 1000,
                        easing: theme.transitions.easing.sharp,
                      }
                    ),
                  },

                  {
                    "&:hover": {
                      color: "#000000",
                    },
                  },
                ]}
              />
            </Grid>
            <Grid item={false} sx={{ marginRight: "2em" }}>
              <FacebookIcon
                sx={[
                  {
                    fontSize: "2em",
                    color: "#39569c",
                    cursor: "pointer",
                    transition: theme.transitions.create(
                      ["color", "transform"],
                      {
                        duration: 1000,
                        easing: theme.transitions.easing.sharp,
                      }
                    ),
                  },

                  {
                    "&:hover": {
                      color: "#2f477a",
                    },
                  },
                ]}
              />
            </Grid>
            <Grid item={false}>
              <WhatsAppIcon
                sx={[
                  {
                    fontSize: "2em",
                    color: "#25D366",
                    cursor: "pointer",
                    transition: theme.transitions.create(
                      ["color", "transform"],
                      {
                        duration: 1000,
                        easing: theme.transitions.easing.sharp,
                      }
                    ),
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
