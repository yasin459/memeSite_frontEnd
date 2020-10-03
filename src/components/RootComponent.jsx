import React, { useState } from "react";
import {
  MuiThemeProvider,
  createMuiTheme,
  makeStyles,
} from "@material-ui/core/styles";
import BackToTop from "./MainBody/SecHeader";
import MainHeader from "./TopHeader/Header";
import RTL from "../RTL";
import Footer from "./Footer/Footer";
import Box from "@material-ui/core/Box";

const theme = createMuiTheme({
  direction: "rtl",
  primary: {
    light: "#62727b",
    main: "#37474f",
    dark: "#102027",
    contrastText: "#fff",
  },
  secondary: {
    lighti: "#fff3e0",
    light: "#ffddc1",
    main: "#ffab91",
    dark: "#c97b63",
    contrastText: "#000",
  },
});
const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: "blue",
    backgroundColor: "#fbe9e7",
  },
}));

const RootComponent = () => {
  const classes = useStyles();
  var [loggedIn, setLoggedIn] = useState(false);
  const changeLoggedIn = (type) => {
    if (type === "signin") {
      setLoggedIn(!loggedIn);
    } else if (type === "signup") {
      console.log("acount created");
    }
  };
  return (
    <RTL>
      <MuiThemeProvider theme={theme}>
        <Box className={classes.root}>
          <MainHeader changeLoggedIn={changeLoggedIn} loggedIn={loggedIn} />
          <BackToTop changeLoggedIn={changeLoggedIn} loggedIn={loggedIn} />
          <Footer />
        </Box>
      </MuiThemeProvider>
    </RTL>
  );
};

export default RootComponent;
