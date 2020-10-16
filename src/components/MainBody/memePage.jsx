import { useState, PureComponent, Component } from "react";
import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Meme from "../MemeCard/Card";
import ScrollTop from "./ScrollToTop";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  Redirect,
  useLocation,
} from "react-router-dom";
import BarMenu from "./barMenu";

export default function MemePage(props) {
  const { state, pathname } = useLocation();
  const { searchText } = state; // Read values passed on state
  const [memes, setMemes] = useState();
  const history = useHistory();
  const gotoSingleMeme = (meme) => {
    console.log("meme : ", meme);
    const res = {
      pathname: "/singleMeme",
      state: {
        meme: meme,
      },
    };
    history.push(res);
  };

  React.useEffect(() => {
    console.log("entered");
    const timer = setTimeout(() => {
      axios.get(`http://localhost:80/api/meme${pathname}`).then((res) => {
        console.log("input from server : ", res.data);
        for (const meme of res.data) {
          meme.searchKey = true;
        }
        setMemes(res.data);
      });
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const increaseLikes = (id) => {
    var result = this.state.memes;
    for (const meme of result) {
      if (meme.id === id) {
        meme.likes++;
        break;
      }
    }
    // this.setState({ memes: result });
  };

  return (
    <div>
      {searchText}
      {/* <RedirectTosingleMemePage meme={"sa"} /> */}
      <Grid container style={{ justifyContent: "center" }}>
        {/* {console.log("this is ..  ", memes)} */}
        {memes &&
          memes
            .filter((filtered) => filtered.searchKey === true)
            .map((meme) => (
              <Grid item xs={12} sm={6} lg={4}>
                <Meme
                  onClick={() => gotoSingleMeme(meme)}
                  likes={meme.like}
                  body={meme.body}
                  title={meme.title}
                  author={meme.username}
                  tag={meme.tag}
                  img={meme.picture}
                  avatar={meme.avatar}
                  id={meme.id}
                  increaseLikes={increaseLikes}
                />
              </Grid>
            ))}
      </Grid>
    </div>
  );
}
