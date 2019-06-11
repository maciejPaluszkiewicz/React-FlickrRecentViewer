import React, { Fragment } from "react";
import { connect } from "react-redux";
import Image from "./Image";
import FavLegend from "./FavLegend";
import "./Favorites.css";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

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
    color: theme.palette.text.secondary,
    fontSize: 16
  }
}));

const Favorites = props => {
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
