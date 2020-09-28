import { useState, PureComponent, Component } from "react";
import * as React from "react";
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
import CommentUploader from "../MemeCard/uploadComment";
import { FormControlLabel, Checkbox, Grid } from "@material-ui/core";

import Meme from "../MemeCard/Card";

import CardExpanded from "../MemeCard/CardExpanded";
import axios from "axios";
const useStyles = makeStyles((theme) => ({
  search: {
    position: "absolute",
    // position: "relative",

    left: "5%",
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
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
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
  toolbar: {
    backgroundColor: theme.secondary.main,
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
  const handleCheckBox = (e) => {
    if (e.target.checked) {
      console.log("checkbox");
    }
  };
  return (
    <React.Fragment>
      {/* <CssBaseline /> */}
      <AppBar position="relative">
        <Toolbar className={classes.toolbar} id="back-to-top-anchor">
          <MemeMenu showMeme={props.showMeme} />
          <Button onClick={() => props.showMeme("subscribe")}>
            دنبال کردن های من
          </Button>
          <Button onClick={() => props.showMeme("myMeme")}>میم های من</Button>
          <Button onClick={() => props.showMeme("favorite")}>
            مورد علاقه ها
          </Button>

          <div className={classes.search}>
            <FormControlLabel
              control={
                <Checkbox onChange={(e) => handleCheckBox(e)} name="checkedA" />
              }
              // style={{ backgroundColor: "red" }}
              label="جستجو در همه"
            />
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="جستجو میم"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              style={{ marginRight: "10px" }}
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => props.search(e)}
            />
          </div>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default class BackToTop extends Component {
  constructor() {
    super();
    this.getMemes("last");
    this.state = {
      memeShower: true,
      memes: [],
    };
  }

  render() {
    return (
      <React.Fragment>
        <BarMenu search={this.search} showMeme={this.ShowMeme} />

        {!this.state.memeShower && (
          <CardExpanded chosedMeme={this.state.chosedMeme} />
        )}

        {this.state.memeShower && (
          <div>
            <Grid container style={{ justifyContent: "center" }}>
              {this.state.memes
                .filter((filtered) => filtered.searchKey === true)
                .map((meme) => (
                  <Grid item xs={12} sm={6} lg={4}>
                    <Meme
                      onClick={() => this.setChosedMeme(meme)}
                      likes={meme.likes}
                      body={meme.body}
                      title={meme.title}
                      author={meme.author}
                      img={meme.img}
                      avatar={meme.avatar}
                      id={meme.id}
                      increaseLikes={this.increaseLikes}
                    />
                  </Grid>
                ))}
            </Grid>
          </div>
        )}
        <ScrollTop {...this.props} />
      </React.Fragment>
    );
  }
  setChosedMeme = (meme) => {
    this.setState({ chosedMeme: meme });
    this.ChangeView(false);
  };
  ChangeView = (props) => {
    this.setState({
      memeShower: props,
    });
  };
  ShowMeme = (type) => {
    this.ChangeView(true);
    this.getMemes(type);
  };

  getMemes = (type) => {
    console.log(type);
    axios.get(`http://localhost:3000/comments`).then((res) => {
      this.setState({ memes: res.data });
    });
  };
  search = (event) => {
    var temp = this.state.memes;
    var meme;
    for (meme of temp) {
      console.log(meme);
      if (meme.title.includes(event.target.value)) {
        meme.searchKey = true;
      } else {
        meme.searchKey = false;
      }
    }
    this.setState({ memes: temp });
  };
  increaseLikes = (id) => {
    var result = this.state.memes;
    for (const meme of result) {
      if (meme.id === id) {
        meme.likes++;
        break;
      }
    }
    this.setState({ memes: result });
  };
}
