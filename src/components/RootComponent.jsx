import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import BackToTop from "./MainBody/SecHeader";
import MainHeader from "./TopHeader/Header";
import RTL from "../RTL";
import Footer from "./Footer/Footer";
const theme = createMuiTheme({
  direction: "rtl",
});

const RootComponent = () => (
  <RTL>
    <MuiThemeProvider theme={theme}>
      <div>
        <MainHeader />
        <BackToTop />
        <Footer />
      </div>
    </MuiThemeProvider>
  </RTL>
);

export default RootComponent;
