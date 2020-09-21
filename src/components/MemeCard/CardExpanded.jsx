import { makeStyles, Grid, Box, Container } from "@material-ui/core";
import React, { Component, useState } from "react";
import Meme from "./Card";
import CommentPaper from "./Comment";
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
}));
export default function CardExpanded({ chosedMeme }, ...props) {
  const styles = useStyles();
  const x = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [jsons, setJsons] = useState([
    {
      id: "1",
      title: "firstcommeent title",
      body: "dsdsd",
      author: "fadfdaf",
      date: "sfkndad",
      children: [
        {
          id: "11",
          title: "firstcommeent title",
          body: "dsdsd",
          author: "fadfdaf",
          date: "sfkndad",
          children: [],
        },
        {
          id: "12",
          title: "firstcommeent title",
          body: "dsdsd",
          author: "fadfdaf",
          date: "sfkndad",
          children: [],
        },
        {
          id: "13",
          title: "firstcommeent title",
          body: "dsdsd",
          author: "fadfdaf",
          date: "sfkndad",
          children: [
            {
              id: "131",
              title: "firstcommeent title",
              body: "dsdsd",
              author: "fadfdaf",
              date: "sfkndad",
              children: [],
            },
          ],
        },
      ],
    },
  ]);
  // console.log("padadsad  ", jsons);

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
          />
        </Grid>
      </Grid>

      <Box style={{ marginLeft: "5%", marginRight: "2%" }}>
        <ArrangeComments options={jsons} />
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
