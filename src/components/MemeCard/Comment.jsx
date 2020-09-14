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
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
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
}));

export default function CommentPaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt="authorPic"
                src="/static/images/grid/complex.jpg"
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={3}>
              <Grid item xs>
                <Typography gutterBottom variant="h5">
                  title
                </Typography>
                <Typography
                  onClick={() => printShet("salam")}
                  variant="body2"
                  color="textSecondary"
                  style={{ cursor: "pointer" }}
                >
                  author id
                </Typography>
                <Typography variant="body1" gutterBottom>
                  body
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  // component="button"
                  variant="body2"
                  style={{ cursor: "pointer" }}
                >
                  reply
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              xs={1}
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Grid item>
                <Typography>
                  <ArrowDropUpIcon />
                </Typography>
              </Grid>
              <Grid item>
                <Typography>12</Typography>
              </Grid>

              <Grid item>
                <Typography gutterBottom>
                  <ArrowDropDownIcon />
                </Typography>
              </Grid>
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
