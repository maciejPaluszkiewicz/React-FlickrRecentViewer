import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import Image from "./Image";
import FavLegend from "./FavLegend";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { fetchFavPhoto } from "../actions/index";
import Spinner from "./Spinner";
import { spacing } from "@material-ui/system";

const mapStateToProps = state => {
  return { favs: state.root.favs };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchFavPhoto: () => dispatch(fetchFavPhoto())
  };
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingTop: 90
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    fontSize: 16,
    width: "40%",
    marginLeft: "2%",
    marginTop: "1%",
    display: "flex",
    direction: "row",
    alignContent: "space-between"
  }
}));

const Favorites = props => {
  const classes = useStyles();
  useEffect(props.fetchFavPhoto, []);

  if (props.favs.length > 0) {
    return (
      <div className={classes.root}>
        <Grid container spacing={6}>
          {props.favs.map(el => (
            // <Paper className={classes.paper}>
            <Fragment>
              <Paper className={classes.paper} key={el.id}>
                <Grid item xs={6}>
                  {/* <Paper className={classes.paper} key={el.id}> */}
                  <Image url={el.url} handleClick={() => {}} />
                  {/* </Paper> */}
                </Grid>
                <Grid item xs={6}>
                  {/* <Paper className={classes.paper}> */}
                  <FavLegend {...el} />
                  {/* </Paper> */}
                </Grid>
              </Paper>
            </Fragment>
            // </Paper>
          ))}
        </Grid>
      </div>
    );
  } else {
    return <Spinner />;
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites);
