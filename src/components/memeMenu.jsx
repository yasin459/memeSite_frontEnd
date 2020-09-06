import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import RTL from "../RTL";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

export default function MemeMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = createMuiTheme({
    direction: "rtl",
  });
  return (
    <React.Fragment>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        منو میم
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>جدید ترین میم ها</MenuItem>
        <MenuItem onClick={handleClose}>بهترین میم ها</MenuItem>
        <MenuItem onClick={handleClose}>میم رندوم</MenuItem>
      </Menu>
    </React.Fragment>
  );
}
