import React, { Fragment } from "react";
import { connect } from "react-redux";
import Image from "./Image";
import FavLegend from "./FavLegend";
import "./Favorites.css";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

const mapStateToProps = state => {
  return { favs: state.favs };
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const Favorites = props => {
  // return (
  // <ul className="recentImages">
  //   {props.favorites.map(favImage => {
  //     return <li key="{favImage.favImage_id}">{favImage.favImage_name}</li>;
  //   })}
  // </ul>

  // <div className="favoriteBox">
  //   <div className="favoriteImages">
  //     <Grid container spacing={12}>
  //       {props.favs.map(el => (
  //         <div key={el.id}>
  //           {/* <Grid item xs={3}> */}
  //           <Image url={el.url} handleClick={() => {}} />
  //           {/* </Grid> */}
  //           {/* <Grid item xs={3}> */}
  //           <FavLegend {...el} />
  //           {/* </Grid> */}
  //         </div>
  //       ))}
  //     </Grid>
  //   </div>
  // </div>;

  // );
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={6}>
        {props.favs.map(el => (
          <Fragment>
            <Grid item xs={3}>
              <Paper className={classes.paper} key={el.id}>
                <Image url={el.url} handleClick={() => {}} />
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <FavLegend {...el} />
              </Paper>
            </Grid>
          </Fragment>
        ))}
      </Grid>
    </div>
  );
};

export default connect(mapStateToProps)(Favorites);
