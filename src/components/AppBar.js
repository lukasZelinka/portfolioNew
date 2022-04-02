import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Box, Link, Grid, Fade } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";
// import { connect } from "react-redux";
// import {} from "../actions/index";

let theme = createTheme({
  palette: {
    primary: {
      // oranzova
      main: "#ff6a3d",
    },
    secondary: {
      // zlta
      main: "#f9db6d",
    },
    tertiary: {
      // fialova
      main: "#9daaf2",
    },
    quaternary: {
      // modra na pismo
      main: "#29375b",
    },
  },
  // typography: {
  //   fontFamily: "Comic Sans MS",
  // },
  components: {
    MuiLink: {
      defaultProps: {
        underline: "none",
        color: "quaternary.main",
      },
    },
  },
});

function ButtonAppBar() {
  const [activeNav, setActiveNav] = React.useState(false);

  const activeNavbar = () => {
    if (window.scrollY > 100) {
      setActiveNav(true);
    } else {
      setActiveNav(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", activeNavbar);

    return () => {
      window.removeEventListener("scroll", activeNavbar);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="fixed"
          sx={[
            {
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
            <Link href="/" sx={{ color: "tertiary.main" }}>
              <Button
                color="inherit"
                sx={[
                  {
                    "&:hover": {
                      color: "primary.main",
                      backgroundColor: "transparent",
                    },
                  },
                  {
                    fontSize: "1.5em",
                    fontWeight: "900",
                    padding: "0.8em",
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
                  letterSpacing: 1,
                  color: "quaternary.main",
                  fontWeight: "500",
                }}
              >
                <Grid item sx={{ display: { xs: "none", sm: "inline-block" } }}>
                  HOME
                </Grid>
                <Grid item sx={{ display: { xs: "none", sm: "inline-block" } }}>
                  ABOUT
                </Grid>
                <Grid item sx={{ display: { xs: "none", sm: "inline-block" } }}>
                  SKILLS
                </Grid>
                <Grid item sx={{ display: { xs: "none", sm: "inline-block" } }}>
                  PROJECTS
                </Grid>
                <Grid
                  item
                  sx={{ display: { xs: "none", sm: "inline-block" }, mr: 2 }}
                >
                  CONTACT
                </Grid>
                <Grid item sx={{ display: { xs: "inline-block", sm: "none" } }}>
                  {" "}
                  <IconButton
                    size="large"
                    edge="start"
                    color="tertiary"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                  >
                    <MenuIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}

// const mapStateToProps = (state) => ({
//   inputValue: state.moviesReducer.inputValue,
// });

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setInputValue: (newValue) => dispatch(setInputValue(newValue)),

//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ButtonAppBar);
export default ButtonAppBar;
