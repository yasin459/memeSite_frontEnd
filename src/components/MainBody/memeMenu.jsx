import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import RTL from "../../RTL";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
export default function MemeMenu(props) {
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
        <MenuItem onClick={() => props.showMeme("newestMeme")}>
          جدید ترین میم ها
        </MenuItem>

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
            <MenuItem onClick={() => props.showMeme("bestMemeDay")}>
              بهترین روز
            </MenuItem>

            <MenuItem onClick={() => props.showMeme("bestMemeWeek")}>
              {" "}
              بهترین هفته
            </MenuItem>

            <MenuItem onClick={() => props.showMeme("bestMemeEver")}>
              {" "}
              بهترین از ابتدا
            </MenuItem>
          </Menu>
        </MenuItem>

        <MenuItem onClick={() => props.showMeme("randomMeme")}>
          میم رندوم
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
