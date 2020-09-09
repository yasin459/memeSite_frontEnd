import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Meme from "./Card";
const Sender = (props) => {
  const result = "result 1";
  props.handler(result);
  console.log(result);
  return null;
};
class MemeHolder extends Component {
  state = {};
  render() {
    return (
      // <Grid
      //   container
      //   spacing={24}
      //   style={{
      //     padding: 15,
      //   }}
      // >
      <Switch>
        <Route path="/subscriptions"></Route>
        <Route
          path="/favorites"
          render={() => <Sender handler={this.props.handleClick} />}
        ></Route>
        <Route path="/myUploads"></Route>
        <Route path="/latestMemes"></Route>
        <Route path="/bestMemes/day"></Route>
        <Route path="/bestMemes/week"></Route>
        <Route path="/bestMemes/ever"></Route>
        <Route path="/randomMeme">
          {/* <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Meme
              voteNumber="12"
              votePercent="97%"
              body="dofnkgddnfkjd"
              title="title   title"
              uploader="uploooooader"
              myImg={require("./1.jpg")}
              avatar="rt"
            />
          </Grid> */}
        </Route>
        <Route path="/">
          <h1>salam</h1>
        </Route>
      </Switch>
      // </Grid>
    );
  }
}

export default MemeHolder;
