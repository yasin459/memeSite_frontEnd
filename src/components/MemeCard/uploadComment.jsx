import {
  Button,
  makeStyles,
  Paper,
  TextField,
  Typography,
  InputBase,
} from "@material-ui/core";
import React, { Component } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(4),
    margin: theme.spacing(4),
    backgroundColor: theme.primary.main,
    color: "white",
    "& > *": {
      margin: "1%",
    },
  },
  typography: {},
  button: {
    color: "white",
    backgroundColor: theme.secondary.dark,
  },
  body: {
    width: "98%",
    padding: "2%",
    borderRadius: theme.spacing(0.5),
    backgroundColor: theme.secondary.light,
    // minHeight: theme.spacing(9),
  },
  bodyInput: {
    "&::placeholder": {
      //   textOverflow: "ellipsis !important",
      color: "yellow",
    },
  },
}));
export default function CommentUploader(props) {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Typography className={classes.typography} variant="h4">
        دیدگاهت رو بگو :)
      </Typography>

      <InputBase
        className={classes.body}
        multiline
        rowsMax="4"
        placeholder="نظر خود را اینجا وارد کنید"
        InputProps={{ classes: { input: classes.bodyInput } }}
      />

      <Button variant="contained" className={classes.button}>
        ثبت دیدگاه
      </Button>
    </Paper>
  );
}
