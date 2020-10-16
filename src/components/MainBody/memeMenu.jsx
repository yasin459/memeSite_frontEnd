import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import RTL from "../../RTL";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import {
  BrowserRouter as Router,
  useHistory,
  Redirect,
} from "react-router-dom";

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
  const MenuButton = ({ type, text }) => {
    const history = useHistory();
    return (
      <i
        onClick={() => {
          history.push({
            pathname: `${type}`,
            state: {
              searchText: "empty",
            },
          });
        }}
      >
        {text}
      </i>
    );
  };
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
        <MenuItem>
          <MenuButton text="جدید ترین میم ها" type="last" />
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
            <MenuItem>
              <MenuButton text="بهترین روز" type="top/day" />
            </MenuItem>

            <MenuItem>
              <MenuButton text="بهترین هفته" type="top/week" />
            </MenuItem>

            <MenuItem>
              <MenuButton text="بهترین از ابتدا" type="top/ever" />
            </MenuItem>
          </Menu>
        </MenuItem>

        <MenuItem>
          <MenuButton text="میم رندوم" type="random" />
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
