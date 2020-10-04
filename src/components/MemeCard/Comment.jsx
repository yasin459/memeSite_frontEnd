import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { Box, Button, Container } from "@material-ui/core";
import CommentUploader from "./uploadComment";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 3,
  },
  paper: {
    backgroundColor: theme.primary.main,

    padding: theme.spacing(2),
    marginTop: "10px",
    marginBottom: "10px",
  },
  paperGrid: {
    justifyContent: "space-around",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  image: {
    width: "100%",
    height: "100%",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  body: {
    borderRadius: "5px",
    // paddingRight: theme.spacing(3),
    // paddingLeft: theme.spacing(3),
    "& > *": {
      margin: "3px",
    },
    justifyContent: "space-around",

    // backgroundColor: theme.primary.light,
    // backgroundColor: "#c63f17",
  },
  voteContainer: {
    display: "flex",
    flexDirection: "column",

    alignItems: "center",
    justifyContent: "center",
    // margin: "5px",
    // padding: "5px",
  },
  voteBox: {
    display: "flex",
    flexDirection: "column",

    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: "5px",
    padding: "5px",
    backgroundColor: theme.secondary.main,
  },
}));

export default function CommentPaper(props) {
  const classes = useStyles();
  const [openUpload, setOpenUpload] = useState(false);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container className={classes.paperGrid}>
          <Grid item xs={12} sm={1} className={classes.imgGrid}>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="authorPic" src={props.img} />
            </ButtonBase>
          </Grid>
          <Grid xs={12} sm={10} className={classes.body} item container>
            <Grid item xs={10} container flexDirection="column">
              <Grid item xs={12}>
                <Typography
                  onClick={() => printShet("salam")}
                  variant="caption"
                  color="textSecondary"
                  style={{ cursor: "pointer", color: "white" }}
                >
                  {props.author}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <div style={{ overflow: "hidden" }}>
                  <Typography
                    variant="body1"
                    gutterBottom
                    style={{ color: "white" }}
                  >
                    {props.body}
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  onClick={() => setOpenUpload(!openUpload)}
                  variant="subtitle1"
                  style={{ cursor: "pointer", color: "white" }}
                >
                  reply
                </Typography>
                {openUpload && (
                  <CommentUploader
                    parent={props.id}
                    sendComments={props.sendComments}
                  />
                )}
              </Grid>
            </Grid>

            <Grid item xs={1} className={classes.voteContainer}>
              <Box className={classes.voteBox}>
                <ArrowDropUpIcon style={{ color: "white" }} />
                <Typography
                  justify="center"
                  align="center"
                  style={{ color: "white" }}
                >
                  {props.like} 12
                </Typography>

                <ArrowDropDownIcon style={{ color: "white", bottom: "0px" }} />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
const printShet = (props) => {
  console.log(props);
};
