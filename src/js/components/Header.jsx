import React from "react";
import "./Header.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

import Avatar from "@material-ui/core/Avatar";
import flckr from "../images/flckr.png";

const RecentPhotosLink = React.forwardRef((props, ref) => (
  <Link innerRef={ref} to="/" {...props} />
));

const FavoritesLink = React.forwardRef((props, ref) => (
  <Link innerRef={ref} to="/favs" {...props} />
));

const useStylesFunction = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  button: {
    display: "inline-block",
    position: "relative",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(1)
  },
  avatar: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(1),
    position: "relative"
  },
  input: {
    display: "none"
  }
}));

const Header = () => {
  const useStyles = useStylesFunction();

  return (
    <div className={useStyles.grow}>
      <AppBar position="static" m={12}>
        <Toolbar>
          <Typography variant="title" color="inherit" m={12}>
            FLICKRecentViewer
          </Typography>

          <div className={useStyles.grow} />
          <Box>
            <Button
              variant="contained"
              className={useStyles.button}
              component={RecentPhotosLink}
            >
              RECENT PHOTOS
            </Button>
          </Box>
          <Box>
            <Button
              variant="contained"
              className={useStyles.button}
              component={FavoritesLink}
            >
              FAVORITES
            </Button>
          </Box>

          <Avatar
            alt="LOG IN to FLICKR"
            src={flckr}
            className={useStyles.avatar}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Header;
