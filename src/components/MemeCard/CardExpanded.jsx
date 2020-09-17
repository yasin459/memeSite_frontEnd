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
export default function CardExpanded(props) {
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
        <Grid item xs={12} sm={8} md={6}>
          <Meme
            voteNumber="12"
            votePercent="97%"
            body="dofnkgddnfkjd"
            title="title   title"
            uploader="uploooooader"
            myImg={require("../1.jpg")}
            avatar="rt"
          />
        </Grid>
      </Grid>

      <Container
        style={{
          alignItems: "center",
          justify: "center",
        }}
      >
        <ArrangeComments options={jsons} />
      </Container>
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
            <CommentPaper />
            {option.children.length > 0 && (
              <ArrangeComments options={option.children} />
            )}
          </ul>
        ))}
    </div>
  );
};
