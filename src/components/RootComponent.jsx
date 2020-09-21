import React, { useState } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import BackToTop from "./MainBody/SecHeader";
import MainHeader from "./TopHeader/Header";
import RTL from "../RTL";
import Footer from "./Footer/Footer";
const theme = createMuiTheme({
  direction: "rtl",
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
