import {
  Button,
  makeStyles,
  Paper,
  TextField,
  Typography,
  InputBase,
} from "@material-ui/core";
import React, { Component, useState } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Form } from "semantic-ui-react";
import Axios from "axios";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(4),
    // margin: theme.spacing(1),
    backgroundColor: theme.primary.main,
    color: "white",
    "& > *": {
      margin: "1%",
    },
  },
  typography: {},
  button: {
    width: "10%",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },

    color: "white",
    backgroundColor: theme.secondary.dark,
  },
  body: {
    width: "90%",
    padding: theme.spacing(2.5),

    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
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
  form: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
    "& > *": {
      margin: theme.spacing(0.3),
    },
  },
}));
export default function CommentUploader(props) {
  const [commentBody, setCommentBody] = useState("");
  const classes = useStyles();

  const onChangeBody = (e) => {
    setCommentBody(e.target.value);
  };
  return (
    <Paper className={classes.paper}>
      <Typography className={classes.typography} variant="h4">
        دیدگاهت رو بگو :)
      </Typography>
      <Form
        onSubmit={() => props.sendComments(commentBody, props.parent)}
        className={classes.form}
      >
        <InputBase
          className={classes.body}
          value={commentBody}
          onChange={onChangeBody}
          multiline
          rows="2"
          rowsMax="4"
          placeholder="نظر خود را اینجا وارد کنید"
          InputProps={{ classes: { input: classes.bodyInput } }}
        />

        <Button type="submit" variant="contained" className={classes.button}>
          ثبت دیدگاه
        </Button>
      </Form>
    </Paper>
  );
}
