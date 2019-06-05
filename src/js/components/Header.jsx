import React from "react";
import "./header.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const RecentPhotosLink = React.forwardRef((props, ref) => (
  <Link innerRef={ref} to="/" {...props} />
));

const FavoritesLink = React.forwardRef((props, ref) => (
  <Link innerRef={ref} to="/favs" {...props} />
));

const Header = () => (
  <div>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="title" color="inherit">
          FLICKRecentViewer
        </Typography>
        <Button color="inherit" component={RecentPhotosLink}>
          RECENT PHOTOS
        </Button>
        <Button color="inherit" component={FavoritesLink}>
          FAVORITES
        </Button>
      </Toolbar>
    </AppBar>
  </div>
);

export default Header;
