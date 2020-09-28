import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { Box, Button, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 3,
  },
  paper: {
    backgroundColor: theme.primary.main,

    // padding: theme.spacing(2),
    marginTop: "10px",
    marginBottom: "10px",
    // maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  body: {
    borderRadius: "5px",
    "& > *": {
      margin: "3px",
    },
    // backgroundColor: theme.primary.light,
    // backgroundColor: "#c63f17",
  },
  voteBox: {
    display: "flex",
    flexDirection: "column",

    alignItems: "center",
    justifyContent: "center",

    padding: "5px",
  },
}));

export default function CommentPaper(props) {
  const classes = useStyles();
  var x = parseInt(props.padding, 10);
  x = x + 100;
  x += "px";

  return (
    <div className={classes.root} style={{ marginLeft: x }}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="authorPic" src={props.img} />
            </ButtonBase>
          </Grid>
          <Grid className={classes.body} item xs={12} sm container>
            <Grid item xs container direction="column" spacing={3}>
              <Grid item xs>
                <Typography
                  onClick={() => printShet("salam")}
                  variant="caption"
                  color="textSecondary"
                  style={{ cursor: "pointer", color: "white" }}
                >
                  {props.author}
                </Typography>
              </Grid>
              <Grid item xs>
                <Typography
                  variant="body1"
                  gutterBottom
                  style={{ color: "white" }}
                >
                  {props.body}
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="subtitle1"
                  style={{ cursor: "pointer", color: "white" }}
                >
                  reply
                </Typography>
              </Grid>
            </Grid>

            <Box className={classes.voteBox}>
              <Box className={classes.voteBox}>
                <Typography justify="center">
                  <ArrowDropUpIcon style={{ color: "white" }} />
                </Typography>
                <Typography justify="center" style={{ color: "white" }}>
                  {props.likes} 12
                </Typography>
                <Typography justify="center">
                  <ArrowDropDownIcon style={{ color: "white" }} />
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
const printShet = (props) => {
  console.log(props);
};
