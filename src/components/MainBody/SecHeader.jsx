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
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MemeHolder from "../memeHolder";
import { Box, Grid, Container } from "@material-ui/core";
import NestedList from "../MemeCard/Comment";
import Meme from "../MemeCard/Card";

import { useRef } from "react";
import CommentPaper from "../MemeCard/Comment";
import CardExpanded from "../MemeCard/CardExpanded";
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
          <MemeMenu showMeme={props.showMeme} />
          <Button onClick={() => props.showMeme("subscribe")}>
            دنبال کردن های من
          </Button>
          <Button onClick={() => props.showMeme("myMeme")}>میم های من</Button>
          <Button onClick={() => props.showMeme("favorites")}>
            مورد علاقه ها
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

    this.state = {
      memeShower: true,
      memes: [
        {
          id: "1",
          author: "yasin",
          avatar: "avatar",
          title: "title",
          body: "body",
          img: "../1.jpg",
          likes: "10",
        },
        {
          id: "1",
          author: "yasin",
          avatar: "avatar",
          title: "title",
          body: "body",
          img: "../1.jpg",
          likes: "10",
        },
        {
          id: "1",
          author: "yasin",
          avatar: "avatar",
          title: "title",
          body: "body",
          img: "../1.jpg",
          likes: "10",
        },
        {
          id: "1",
          author: "yasin",
          avatar: "avatar",
          title: "title",
          body: "body",
          img: "../1.jpg",
          likes: "10",
        },
        {
          id: "1",
          author: "yasin",
          avatar: "avatar",
          title: "title",
          body: "body",
          img: "../1.jpg",
          likes: "10",
        },
        {
          id: "1",
          author: "yasin",
          avatar: "avatar",
          title: "title",
          body: "body",
          img: "../1.jpg",
          likes: "10",
        },
        {
          id: "1",
          author: "yasin",
          avatar: "avatar",
          title: "title",
          body: "body",
          img: "../1.jpg",
          likes: "10",
        },
      ],
    };
  }

  render() {
    return (
      <Router>
        <BarMenu search={this.search} showMeme={this.ShowMeme} />

        {!this.state.memeShower && (
          <CardExpanded chosedMeme={this.state.chosedMeme} />
        )}
        {!this.state.memeShower && console.log("successful")}
        {this.state.memeShower && (
          <div>
            <Grid container style={{ justifyContent: "center" }}>
              {this.state.memes.map((meme) => (
                <Grid item xs={12} sm={6} lg={4}>
                  <Meme
                    onClick={() => this.setChosedMeme(meme)}
                    likes={meme.likes}
                    body={meme.body}
                    title={meme.title}
                    author={meme.author}
                    img={meme.img}
                    avatar={meme.avatar}
                  />
                </Grid>
              ))}
            </Grid>
          </div>
        )}
        <ScrollTop {...this.props} />
      </Router>
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
  ShowMeme = (props) => {
    this.ChangeView(true);
  };
  search = (event) => {
    console.log("salam");
  };
}
