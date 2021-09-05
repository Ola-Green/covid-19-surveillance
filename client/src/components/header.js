import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MoreVert from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/actions/authActions";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },

  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

function Header() {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const openMenu = (event) => setAnchorEl(event.currentTarget);
  const closeMenu = () => setAnchorEl(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <AppBar position="static">
      <Toolbar>
        <div className={classes.title}>
          <Button
            variant="contained"
            component={Link}
            to={auth.token ? "/survey" : "/login"}
          >
            Check Your Covid Status
          </Button>
        </div>

        <div>
          {isMobile ? (
            <>
              <IconButton
                className={classes.sectionMobile}
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={openMenu}
                onClose={closeMenu}
              >
                <MenuIcon />
              </IconButton>

              <Menu
                anchorEl={anchorEl}
                keepMounted
                id="mobile-menu"
                open={open}
              >
                <MenuItem component={Link} to="/" onClick={closeMenu}>
                  Home
                </MenuItem>
                <MenuItem component={Link} to="/login" onClick={closeMenu}>
                  Login
                </MenuItem>
                {auth.token && (
                  <MenuItem
                    component={Link}
                    to={`/profile/${auth.user._id}`}
                    onClick={closeMenu}
                  >
                    Profile
                  </MenuItem>
                )}
              </Menu>
            </>
          ) : (
            <div>
              <Button
                color="inherit"
                className="home-btn"
                component={Link}
                to="/"
              >
                Home
              </Button>

              {auth.token ? (
                <span color="inherit">{auth.user.firstName}</span>
              ) : (
                <Button
                  variant="contained"
                  color="secondary"
                  component={Link}
                  to="/login"
                >
                  Login
                </Button>
              )}

              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={openMenu}
                color="inherit"
              >
                <MoreVert />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={closeMenu}
              >
                <MenuItem>
                  {auth.token && (
                    <Button
                      variant="contained"
                      onClick={closeMenu}
                      component={Link}
                      to={`/profile/${auth.user._id}`}
                    >
                      Profile
                    </Button>
                  )}
                </MenuItem>

                <MenuItem>
                  <Button
                    variant="contained"
                    onClick={() => dispatch(logout())}
                    component={Link}
                  >
                    Logout
                  </Button>
                </MenuItem>
              </Menu>
            </div>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
