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
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={3}>
              <Grid item xs>
                <Typography gutterBottom variant="h5">
                  {props.title}
                </Typography>
                <Typography
                  onClick={() => printShet("salam")}
                  variant="body2"
                  color="textSecondary"
                  style={{ cursor: "pointer" }}
                >
                  {props.author}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {props.body}
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
                <Typography>{props.likes}</Typography>
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
