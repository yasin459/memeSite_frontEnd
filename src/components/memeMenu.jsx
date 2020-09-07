import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import RTL from "../RTL";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
export default function MemeMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
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
        <Link to="/latestMemes">
          <MenuItem>جدید ترین میم ها</MenuItem>
        </Link>

        <MenuItem>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick2}
          >
            بهترین میم ها
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl2}
            keepMounted
            open={Boolean(anchorEl2)}
            onClose={handleClose2}
            anchorOrigin={{ vertical: "center", horizontal: "left" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <Link to="/bestMemes/day">
              <MenuItem> بهترین روز</MenuItem>
            </Link>
            <Link to="/bestMemes/week">
              <MenuItem> بهترین هفته</MenuItem>
            </Link>
            <Link to="/bestMemes/ever">
              <MenuItem>بهترین از ابتدا</MenuItem>
            </Link>
          </Menu>
        </MenuItem>

        <Link to="/randomMeme">
          <MenuItem>میم رندوم</MenuItem>
        </Link>
      </Menu>
    </React.Fragment>
  );
}
