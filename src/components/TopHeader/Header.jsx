import React, { Component } from "react";
import CloudUploadOutlinedIcon from "@material-ui/icons/CloudUploadOutlined";
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
    left: "10px",
    marginLeft: "100px",
  },
}));
export default function MainHeader(props) {
  const classes = useStyles();
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography>meme site</Typography>

        <div className={classes.leftGroup}>
          <Button>ورورد/ثبت نام</Button>
          <CloudUploadOutlinedIcon />
        </div>
      </Toolbar>
    </AppBar>
  );
}
