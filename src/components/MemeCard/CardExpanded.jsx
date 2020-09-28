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
  // console.log("padadsad  ", jsons);
  const getComments = () => {
    // chosedmeme.id
    Axios.get("http://localhost:3000/cardComments").then((res) => {
      setComments(res.data);
    });
  };
  useEffect(() => getComments(), []);
  // getComments();
  return (
    <React.Fragment>
      <Grid container style={{ justifyContent: "center" }}>
        <Grid item lg={7} sm={10} md={9} xs={12}>
          <Meme
            likes={chosedMeme.likes}
            body={chosedMeme.body}
            title={chosedMeme.title}
            author={chosedMeme.author}
            img={chosedMeme.img}
            avatar={chosedMeme.avatar}
            id={chosedMeme.id}
            increaseLikes={chosedMeme.increaseLikes}
          />
        </Grid>
      </Grid>

      <Box className={styles.box}>
        <ul>
          <CommentUploader />
        </ul>

        <ArrangeComments options={comments} />
      </Box>
    </React.Fragment>
  );
}
const ArrangeComments = ({ options }) => {
  console.log(options);
  return (
    <div>
      {options &&
        options.map((option) => (
          <ul>
            <CommentPaper
              title={option.title}
              body={option.body}
              likes={option.likes}
              author={option.author}
              date={option.date}
            />
            {option.children.length > 0 && (
              <ArrangeComments options={option.children} />
            )}
          </ul>
        ))}
    </div>
  );
};
