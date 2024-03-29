import React from "react";
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

const LogInLink = React.forwardRef((props, ref) => (
  <Link innerRef={ref} to="/sign" {...props} />
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
  },
  standard: {
    fontWeight: 500,
    fontSize: 24,
    fontFamily: ("Roboto", "Helvetica", "Arial", "sans-serif")
  }
}));

const Header = () => {
  const useStyles = useStylesFunction();

  return (
    <div className={useStyles.grow}>
      <AppBar m={12} position="fixed">
        <Toolbar>
          <Box>
            <Typography
              className={useStyles.standard}
              // variant="title"
              // color="inherit"
              // m={12}
            >
              <Box className={useStyles.standard}>FLICKRecentViewer</Box>
            </Typography>
          </Box>
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
          <Button component={LogInLink}>
            <Avatar
              alt="LOG IN to FLICKR"
              src={flckr}
              className={useStyles.avatar}
            />
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Header;
