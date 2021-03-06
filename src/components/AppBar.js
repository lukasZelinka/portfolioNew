import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Box, Link, Grid, Fade } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { connect } from "react-redux";
import { transparentNavbar, whiteNavbar } from "../actions/index";
import { theme } from "../App";

function ButtonAppBar({ activeNav, whiteNavbar, transparentNavbar }) {
  const navbarColor = () => {
    if (window.scrollY > 30) {
      whiteNavbar();
    } else {
      transparentNavbar();
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", navbarColor);

    return () => {
      window.removeEventListener("scroll", navbarColor);
    };
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={[
          {
            zIndex: 1,
            backgroundColor: "transparent",
            boxShadow: "none",
            transition: theme.transitions.create(
              ["background-color", "transform"],
              {
                duration: 1000,
                easing: theme.transitions.easing.sharp,
              }
            ),
          },
          activeNav && {
            backgroundColor: "hsla(0,0%,100%,.5)",
          },
        ]}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Link href="/">
            <Button
              color="inherit"
              sx={[
                {
                  fontSize: "1.5em",
                  fontWeight: "900",
                  padding: "0.8em",
                  color: "font.white",
                  transition: theme.transitions.create(["color", "transform"], {
                    duration: 1000,
                    easing: theme.transitions.easing.sharp,
                  }),
                },

                {
                  "&:hover": {
                    color: "primary.main",
                    backgroundColor: "transparent",
                  },
                },

                activeNav && {
                  color: "#191919",
                },
              ]}
            >
              LU
              <Box className="colorTangerine">KAS</Box>
            </Button>
          </Link>
          <Box>
            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              spacing={3}
              sx={{
                fontSize: "0.875em",
                letterSpacing: 0.9,
                color: "quaternary.main",
                fontWeight: "500",
              }}
            >
              <Grid
                item
                sx={{
                  display: { xs: "none", sm: "inline-block" },
                }}
              >
                <Link
                  href="/"
                  sx={[
                    {
                      color: "font.white",
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
                        color: "primary.main",
                      },
                    },

                    activeNav && {
                      color: "font.dark",
                    },
                  ]}
                >
                  HOME
                </Link>
              </Grid>
              <Grid item sx={{ display: { xs: "none", sm: "inline-block" } }}>
                <Link
                  href="/"
                  sx={[
                    {
                      color: "font.white",
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
                        color: "primary.main",
                      },
                    },

                    activeNav && {
                      color: "font.dark",
                    },
                  ]}
                >
                  ABOUT
                </Link>
              </Grid>
              <Grid item sx={{ display: { xs: "none", sm: "inline-block" } }}>
                <Link
                  href="/"
                  sx={[
                    {
                      color: "font.white",
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
                        color: "primary.main",
                      },
                    },

                    activeNav && {
                      color: "font.dark",
                    },
                  ]}
                >
                  SKILLS
                </Link>
              </Grid>
              <Grid item sx={{ display: { xs: "none", sm: "inline-block" } }}>
                <Link
                  href="/"
                  sx={[
                    {
                      color: "font.white",
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
                        color: "primary.main",
                      },
                    },

                    activeNav && {
                      color: "font.dark",
                    },
                  ]}
                >
                  PROJECTS
                </Link>
              </Grid>
              <Grid
                item
                sx={{ display: { xs: "none", sm: "inline-block" }, mr: 2 }}
              >
                <Link
                  href="/"
                  sx={[
                    {
                      color: "font.white",
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
                        color: "primary.main",
                      },
                    },

                    activeNav && {
                      color: "font.dark",
                    },
                  ]}
                >
                  CONTACT
                </Link>
              </Grid>
              <Grid item sx={{ display: { xs: "inline-block", sm: "none" } }}>
                {" "}
                <IconButton
                  size="large"
                  edge="start"
                  color="tertiary"
                  aria-label="menu"
                  sx={[
                    {
                      mr: 2,
                      color: "font.white",
                      transition: theme.transitions.create(
                        ["color", "transform"],
                        {
                          duration: 1000,
                          easing: theme.transitions.easing.sharp,
                        }
                      ),
                    },
                    activeNav && {
                      color: "primary.main",
                    },
                  ]}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const mapStateToProps = (state) => ({
  activeNav: state.activeNav,
});

const mapDispatchToProps = (dispatch) => {
  return {
    whiteNavbar: () => dispatch(whiteNavbar()),
    transparentNavbar: () => dispatch(transparentNavbar()),
  };
};

// export default ButtonAppBar;
// export default connect(mapStateToProps)(ButtonAppBar);
export default connect(mapStateToProps, mapDispatchToProps)(ButtonAppBar);
