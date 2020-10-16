import { makeStyles, Grid, Box, Container } from "@material-ui/core";
import Axios from "axios";
import React, { Component, useEffect, useState } from "react";
import Meme from "./Card";
import CommentPaper from "./Comment";
import CommentUploader from "./uploadComment";
import { useLocation } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  fixTry1: {
    width: "40%",
    backgroundColor: "red",
  },
  fixTry2: {
    width: "60%",
    overflow: "auto",
    backgroundColor: "yellow",
  },
  fixTry3: {
    display: "flex",

    minHeight: "min-content" /* needs vendor prefixes */,
  },
  box: {
    margin: "5%",
    padding: "1%",

    // backgroundColor: theme.primary.dark,
  },
}));
export default function CardExpanded(props) {
  const styles = useStyles();
  const [comments, setComments] = useState([]);
  const { state, pathname } = useLocation();
  const { meme } = state;

  const getComments = () => {
    Axios.get(`http://localhost/api/meme/comment/${meme.id}`).then((res) => {
      console.log("lunched222", res.data);
      // console.log("comments : ", comments);
      // const cossswsseeeeenanant = res.data;
      setComments(res.data);
    });
  };
  const sendComments = async (comment, parent) => {
    console.log(comment, "  :::  ", parent);
    const temp = {
      body: comment,
      likes: 0,
      author: "nobody",
      date: "12/6",
      children: [],
    };

    const res = await Axios.post("http://localhost:3000/cardComments", temp);
    // console.log(res.data);
    getComments();
  };
  useEffect(() => getComments(), []);
  // getComments();
  return (
    <React.Fragment>
      <Grid container style={{ justifyContent: "center" }}>
        <Grid item lg={7} sm={10} md={9} xs={12}>
          <Meme
            likes={meme.like}
            body={meme.body}
            title={meme.title}
            author={meme.username}
            img={meme.picture}
            avatar={meme.avatar}
            id={meme.id}
            increaseLikes={meme.increaseLikes}
          />
        </Grid>
      </Grid>

      <Box className={styles.box}>
        <CommentUploader parent={-1} sendComments={sendComments} />

        <ArrangeComments
          parent={-1}
          options={comments}
          sendComments={sendComments}
        />
      </Box>
    </React.Fragment>
  );
}
const ArrangeComments = (props) => {
  console.log("this is a test ", props.sendComments);
  const SetCommnetPaper = (option) => {
    if (props.parent === -1) {
      return (
        <React.Fragment>
          <CommentPaper
            parent={props.parent}
            sendComments={props.sendComments}
            id={option.id}
            body={option.body}
            like={option.like}
            author={option.author}
            date={option.date}
            avatar={option.avatar}
          />
          {option.replies && option.replies.length > 0 && (
            <ArrangeComments
              parent={option.id}
              options={option.replies}
              sendComments={props.sendComments}
            />
          )}
        </React.Fragment>
      );
    } else {
      return (
        <ul>
          <CommentPaper
            parent={props.parent}
            sendComments={props.sendComments}
            id={option.id}
            body={option.body}
            like={option.like}
            author={option.author}
            date={option.date}
            avatar={option.avatar}
          />
          {option.replies && option.replies.length > 0 && (
            <ArrangeComments
              parent={option.id}
              options={option.replies}
              sendComments={props.sendComments}
            />
          )}
        </ul>
      );
    }
  };
  return (
    <div>
      {props.options && props.options.map((option) => SetCommnetPaper(option))}
    </div>
  );
};
