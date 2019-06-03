import React from "react";
import "./header.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import logo from "../images/spaceXlogo.png";

const Header = () => (
  <div>
    {/* <img src={logo} alt="logo" />
    <h1 className="header" />
    <div class="RecentImages">
      <h2>Recent Images</h2>
    </div>
    <div className="MyFavorites">
      <h2>Favorites</h2>
    </div> */}
    <AppBar position="static">
      <Toolbar>
        <Typography variant="title" color="inherit">
          SHIFTHOLDING WHATEVER SOMETHING
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
);

export default Header;
