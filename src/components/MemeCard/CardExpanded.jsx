import { makeStyles, Grid, Box, Container } from "@material-ui/core";
import Axios from "axios";
import React, { Component, useEffect, useState } from "react";
import Meme from "./Card";
import CommentPaper from "./Comment";
import CommentUploader from "./uploadComment";
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
export default function CardExpanded({ chosedMeme }, ...props) {
  const styles = useStyles();
  const x = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [comments, setComments] = useState([]);
  const getComments = () => {
    console.log("lunched1111");
    Axios.get(`http://localhost/api/meme/comment/${chosedMeme.id}`).then(
      (res) => {
        console.log("lunched222", res.data);
        // console.log("comments : ", comments);
        // const cossswsseeeeenanant = res.data;
        setComments(res.data);
      }
    );
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
            likes={chosedMeme.like}
            body={chosedMeme.body}
            title={chosedMeme.title}
            author={chosedMeme.username}
            img={chosedMeme.picture}
            avatar={chosedMeme.avatar}
            id={chosedMeme.id}
            increaseLikes={chosedMeme.increaseLikes}
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
