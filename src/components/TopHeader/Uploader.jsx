import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import AddIcon from "@material-ui/icons/Add";
import { Fab, Button } from "@material-ui/core";
import InOrUp from "../login/loginModal";
import { CardMedia, Paper, TextField, Typography } from "@material-ui/core";
import CloudUploadOutlinedIcon from "@material-ui/icons/CloudUploadOutlined";
import Meme from "../MemeCard/Card";
import Login from "../login/loginModal";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 2, 2),
    width: "50%",
    direction: "rtl",
  },
  media: {
    height: 0,
    paddingTop: "70.25%", // 16:9
  },
  title: {
    width: "90%",
  },
  body: {
    width: "90%",
  },
}));

export default function UploaderModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [uploadSwitch, setUploadSwitch] = useState(false);
  const changeUploadSwitch = () => setUploadSwitch(!uploadSwitch);

  const handleOpen = () => {
    if (props.loggedIn) {
      setOpen(true);
    } else {
      changeUploadSwitch();
    }
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button onClick={handleOpen}>
        <CloudUploadOutlinedIcon />
      </Button>
      {uploadSwitch && (
        <Login
          changeLoggedIn={props.changeLoggedIn}
          closeParentSwitch={changeUploadSwitch}
        />
      )}

      {!uploadSwitch && (
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Uploader />
          </Fade>
        </Modal>
      )}
    </div>
  );
}
function Uploader() {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Typography>upload mmeme</Typography>
      <label htmlFor="upload-photo">
        <input
          style={{ display: "none" }}
          id="upload-photo"
          name="upload-photo"
          type="file"
        />

        <CardMedia
          className={classes.media}
          image={require("../insertPictureIcon.png")}
          title="Paella dish"
        />
      </label>
      <label className={classes.title}>
        <TextField placeholder="enter title for meme" />
      </label>
      <label className={classes.body}>
        <TextField placeholder="enter body" />
      </label>
      <Typography>sVBKJFNNKJFB</Typography>
      <Button color="secondary" variant="contained" component="span">
        Upload button
      </Button>
    </Paper>
  );
}
