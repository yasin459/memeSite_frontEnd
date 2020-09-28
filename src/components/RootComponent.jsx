import React, { useState } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import BackToTop from "./MainBody/SecHeader";
import MainHeader from "./TopHeader/Header";
import RTL from "../RTL";
import Footer from "./Footer/Footer";
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

const RootComponent = () => {
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
        <div>
          <MainHeader changeLoggedIn={changeLoggedIn} loggedIn={loggedIn} />
          <BackToTop changeLoggedIn={changeLoggedIn} loggedIn={loggedIn} />
          <Footer />
        </div>
      </MuiThemeProvider>
    </RTL>
  );
};

export default RootComponent;
