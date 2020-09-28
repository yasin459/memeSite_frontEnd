import React, { Component, useState } from "react";
import axios from "axios";
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  Typography,
  IconButton,
  TextField,
  Container,
  SearchBar,
  makeStyles,
} from "@material-ui/core";
import Login from "../login/loginModal";
import UploaderModal from "./Uploader";
import Uploader from "./Uploader";
const useStyles = makeStyles((theme) => ({
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
  leftGroup: {
    position: "absolute",
    display: "flex",
    left: "0",
  },
  toolbar: {
    backgroundColor: theme.primary.main,
  },
}));
export default function MainHeader(props) {
  const classes = useStyles();
  const [loginIconSwitch, setLoginIconSwitch] = useState(false);
  const changeLoginIconSwitch = () => setLoginIconSwitch(!loginIconSwitch);

  return (
    <AppBar position="sticky">
      <Toolbar className={classes.toolbar}>
        <Typography>meme site</Typography>

        <div className={classes.leftGroup}>
          {!props.loggedIn && (
            <Button onClick={changeLoginIconSwitch}>ورود/ثبت نام </Button>
          )}
          {!props.loggedIn && loginIconSwitch && (
            <Login
              changeLoggedIn={props.changeLoggedIn}
              closeParentSwitch={changeLoginIconSwitch}
            />
          )}
          <UploaderModal
            changeLoggedIn={props.changeLoggedIn}
            loggedIn={props.loggedIn}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
}
