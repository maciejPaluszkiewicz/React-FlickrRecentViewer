import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

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

const FavLegend = props => {
  const classes = useStyles();

  return (
    // <Grid className={classes.root} item xs={3}>
    <Typography component="div">
      <div className="favLegendBox">
        <Box
          className="imageTitle"
          fontFamily="Arial"
          fontSize="h2.fontSize"
          m={1}
          style={{ display: "block", fontSize: "2rem", weight: "bold" }}
        >
          {props.title}
        </Box>
        <Box
          className="imageOwner"
          fontFamily="Arial"
          fontSize="h3.fontSize"
          m={2}
          style={{ display: "block" }}
        >
          Owner: {props.owner}
        </Box>
        <Box
          className="imageDate"
          fontFamily="Arial"
          fontSize="h4.fontSize"
          m={3}
          style={{ display: "block" }}
        >
          Date: {props.date}
        </Box>
        <Box
          className="stats"
          fontFamily="Arial"
          fontSize="h4.fontSize"
          m={4}
          style={{ display: "block" }}
        >
          <span>
            Views: <Box style={{ fontSize: "1.5rem" }}>{props.stats.views}</Box>{" "}
          </span>
          <span>
            Favorites:{" "}
            <Box style={{ fontSize: "1.5rem" }}>{props.stats.favorites} </Box>
          </span>
          <span>
            Comments:{" "}
            <Box style={{ fontSize: "1.5rem" }}>{props.stats.comments} </Box>
          </span>
        </Box>
      </div>
    </Typography>
    //   <Grid item xs={3}>
    //       <paper className="imageTitle">{props.title}</paper>
    //     </Grid>
    //     <Grid item xs={3}>
    //       <paper className="imageOwner">{props.owner}</paper>
    //     </Grid>
    //     <Grid item xs={3}>
    //       <paper className="imageDate">{props.date}</paper>
    //     </Grid>
    //     <Grid item xs={3}>
    //       <paper className="stats">
    //         <span>{props.stats.views}</span>
    //         <span>{props.stats.favorites}</span>
    //         <span>{props.stats.comments}</span>
    //       </paper>
    //     </Grid>
    // </div>
    // </Grid>
  );
};

export default FavLegend;
