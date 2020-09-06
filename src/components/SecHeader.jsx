import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import Meme from "./Card";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MemeMenu from "./memeMenu";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function BackToTop(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <MemeMenu />
          <Button> دنبال کردنای من</Button>
          <Button>مورد علاقه ها</Button>
          <Button>آپلود های من</Button>
        </Toolbar>
      </AppBar>

      <Grid
        container
        spacing={24}
        style={{
          padding: 15,
          // gridAutoFlow: "column",
        }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          lg={4}
          xl={3}
          // style={{ gridAutoFlow: "column" }}
        >
          <Meme />
        </Grid>
        <Grid item xs={12} sm={6} lg={4} xl={3}>
          <Meme />
        </Grid>
        <Grid item xs={12} sm={6} lg={4} xl={3}>
          <Meme />
        </Grid>
        <Grid item xs={12} sm={6} lg={4} xl={3}>
          <Meme />
        </Grid>
        <Grid item xs={12} sm={6} lg={4} xl={3}>
          <Meme />
        </Grid>
        <Grid item xs={12} sm={6} lg={4} xl={3}>
          <Meme />
        </Grid>
      </Grid>
      <ScrollTop {...props}>
        <Fab color="secondary" size="large" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}