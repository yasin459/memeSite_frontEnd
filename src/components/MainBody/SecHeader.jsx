import { useState, PureComponent, Component } from "react";
import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles";
import CardExpanded from "../MemeCard/CardExpanded";
import ScrollTop from "./ScrollToTop";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  Redirect,
} from "react-router-dom";
import BarMenu from "./barMenu";
import MemePage from "./memePage";
import { Button } from "@material-ui/core";

export default class BackToTop extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <BarMenu search={this.search} />

          <Switch>
            <Route path="/favorite">
              <MemePage />
            </Route>
            <Route path="/myMeme">
              <MemePage />
            </Route>

            <Route path="/subscribe">
              <MemePage />
            </Route>

            <Route path="/last">
              <MemePage />
            </Route>

            <Route path="/top/day">
              <MemePage />
            </Route>

            <Route path="/top/week">
              <MemePage />
            </Route>

            <Route path="/top/ever">
              <MemePage />
            </Route>
            <Route path="/random">
              <MemePage />
            </Route>
            <Route path="/singleMeme">
              <p>salam</p>
              <CardExpanded />
            </Route>
          </Switch>

          <ScrollTop {...this.props} />
        </React.Fragment>
      </Router>
    );
  }
}
