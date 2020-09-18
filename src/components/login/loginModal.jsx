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

export default function Login() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [view, setVeiw] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const InOrUp = () => {
    return (
      <div>
        {!view && <SignUp changeView={changeView} />}
        {view && <SignIn changeView={changeView} />}
      </div>
    );
  };
  const changeView = () => {
    setVeiw(!view);
  };
  return (
    <div>
      <Button onClick={handleOpen}>ورود/ثبت نام </Button>
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
