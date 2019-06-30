import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { borderRadius } from "@material-ui/system";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  notSelectedImage: {
    // padding: theme.spacing(2)
    borderRadius: "5px",
    border: "6px solid white"
  },
  selectedImage: {
    border: "6px solid red",
    borderRadius: "5px",
    boxSizing: "border-box"
  }
}));

const Image = props => {
  const classes = useStyles();

  return (
    <div>
      <span>
        <img
          className={
            !props.selected ? classes.notSelectedImage : classes.selectedImage
          }
          alt={props.url}
          src={props.url}
          onClick={() => props.handleClick(props.id)}
        />
      </span>
    </div>
  );
};

export default Image;
