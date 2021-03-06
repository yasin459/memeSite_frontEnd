import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 2000,
    margin: 7,
    alignItems: "center",
    // backgroundColor: "#5d4037",
  },
  media: {
    height: 0,
    paddingTop: "70.25%", // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
}));
// function RedirectTosingleMemePage({ meme }) {
//   console.log("ajaab");
//   // const res =
//   return (
//     <Redirect
//       to={{
//         pathname: "singleMeme",
//         state: {
//           meme: meme,
//         },
//       }}
//     />
//   );
// }
export default function Meme(props) {
  const classes = useStyles();
  const [image, setImage] = useState();
  const handleIconButtonClicked = (e) => {
    e.stopPropagation();
    props.increaseLikes(props.id);
  };

  // const pic = props.img;
  return (
    <Card onClick={props.onClick} className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {props.avatar}
          </Avatar>
        }
        // action={
        // }
        title={props.title}
        subheader={props.author}
      />
      <CardMedia
        className={classes.media}
        image={`http://localhost/${props.img}`}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.body}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          onClick={handleIconButtonClicked}
          aria-label="add to favorites"
        >
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Typography>{props.likes}</Typography>
      </CardActions>
    </Card>
  );
}
