import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
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
  typography: {
    fontFamily: "Comic Sans MS",
  },
});

export default function ButtonAppBar() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{ backgroundColor: "hsla(0,0%,100%,.5)" }}
        >
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Button color="inherit">LUKAS</Button>
            <IconButton
              size="large"
              edge="start"
              color="primary"
              aria-label="menu"
              sx={{ mr: 2, fontWeight: "500" }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
