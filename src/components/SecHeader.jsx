import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import { fade } from "@material-ui/core/styles";
import MemeMenu from "./memeMenu";
import InputBase from "@material-ui/core/InputBase";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MemeHolder from "./memeHolder";
import { Grid } from "@material-ui/core";

import Meme from "./Card";

const useStyles = makeStyles((theme) => ({
  search: {
    position: "absolute",
    left: "0",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    top: "0",
    left: "3px",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const backToTopClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div
        onClick={backToTopClick}
        role="presentation"
        className={classes.root}
      >
        <Fab color="secondary" size="large" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </div>
    </Zoom>
  );
}
function BarMenu(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar id="back-to-top-anchor">
          <MemeMenu />
          <Button>
            <Link to="/subscriptions">دنبال کردنای من</Link>
          </Button>
          <Button>
            <Link to="/favorites">مورد علاقه ها</Link>
          </Button>
          <Button>
            <Link to="/myUploads">آپلود های من</Link>
          </Button>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="جستجو میم"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              // onChange={() => printMeme(props.memes)}
            />
          </div>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default class BackToTop extends React.Component {
  state = { name: "first" };
  render() {
    return (
      <Router>
        <BarMenu />
        <MemeHolder handleClick={this.printMeme} />
        {/* {this.state.name} */}
        <ScrollTop {...this.props} />
      </Router>
    );
  }
  printMeme = () => {
    // console.log("start");
    this.setState({ name: "jhggy" });
    console.log("log: ", this.state);
  };
}
