import React from "react";
import "./Image.css";
import Grid from "@material-ui/core/Grid";

const Image = props => {
  return (
    // <Grid item xs={3}>
    <div className="imageContainer">
      <span className={props.selected ? "selectedImage" : ""}>
        <img src={props.url} onClick={() => props.handleClick(props.id)} />
      </span>
    </div>
    // </Grid>
  );
};

export default Image;
