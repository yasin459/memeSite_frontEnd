import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Button } from "@material-ui/core";
import SignUp from "./signUp";
import SignIn from "./signIn";

const useStyles = makeStyles((theme) => ({
  modal: {
    direction: "inherit",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Login(props) {
  const classes = useStyles();
  const [view, setVeiw] = useState(false);
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => {
    props.changeLoggedIn();
    setOpen(true);
  };

  const handleClose = () => {
    props.closeParentSwitch();
    setOpen(false);
  };
  const InOrUp = () => {
    return (
      <div dir="inherit">
        {!view && (
          <SignUp
            changeLoggedIn={props.changeLoggedIn}
            changeView={changeView}
          />
        )}
        {view && (
          <SignIn
            changeLoggedIn={props.changeLoggedIn}
            changeView={changeView}
          />
        )}
      </div>
    );
  };
  const changeView = () => {
    setVeiw(!view);
  };
  return (
    <div>
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
          <InOrUp />
        </Fade>
      </Modal>
    </div>
  );
}
