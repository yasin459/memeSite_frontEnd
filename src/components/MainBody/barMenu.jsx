import { useState, PureComponent, Component } from "react";
import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { fade } from "@material-ui/core/styles";
import MemeMenu from "./memeMenu";
import InputBase from "@material-ui/core/InputBase";
import {
  BrowserRouter as Router,
  useHistory,
  Redirect,
} from "react-router-dom";
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

export default function BarMenu(props) {
  const classes = useStyles();
  const [searchText, setSearchText] = useState("chert");

  const MenuButton = (props) => {
    let history = useHistory();
    return (
      <i
        onClick={() => {
          history.push({
            pathname: `${props.type}`,
            state: {
              searchText: searchText,
            },
          });
        }}
      >
        {props.text}
      </i>
    );
  };
  const MenuInputBase = () => {
    return (
      <InputBase
        placeholder="جستجو میم"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        style={{ marginRight: "10px" }}
        inputProps={{ "aria-label": "search" }}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    );
  };
  return (
    <AppBar position="relative">
      <Toolbar className={classes.toolbar} id="back-to-top-anchor">
        <MemeMenu />
        <MenuButton type="favorite" text="مطلوب" />
        <MenuButton type="myMeme" text="میم های من" />

        <MenuButton type="subscribe" text="دنبال کردنا" />

        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <MenuInputBase />
          <MenuButton type="search" text="جستجو" />
        </div>
      </Toolbar>
    </AppBar>
  );
}
