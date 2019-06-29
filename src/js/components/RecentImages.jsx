import React, { useEffect } from "react";
import { connect } from "react-redux";
import Image from "./Image";
import { fetchPhoto, selectPhoto } from "../actions";
import Spinner from "./Spinner";
import { makeStyles } from "@material-ui/core/styles";
import { flexbox } from "@material-ui/system";

const mapStateToProps = state => {
  return { photos: state.root.photos };
};

const mapDispatchToProps = dispatch => {
  return {
    selectImage: id => dispatch(selectPhoto(id)),
    fetchPhoto: () => dispatch(fetchPhoto())
  };
};

const useStyles = makeStyles(theme => ({
  // root: {
  //   flexGrow: 1,
  //   paddingTop: 90
  // },
  // paper: {
  //   padding: theme.spacing(2),
  //   textAlign: "center",
  //   color: theme.palette.text.secondary,
  //   fontSize: 16
  // },
  recentBox: {
    marginTop: "5%"
  },
  recentImages: {
    display: "flex",
    flexWrap: "wrap",
    alignContent: "flex-start",
    justifyContent: "space-around"
  }
}));
// .recentImages {
//   display: flex;
//   flex-wrap: wrap;
//   align-content: flex-start;
//   justify-content: space-around;
// }

const RecentImages = props => {
  const classes = useStyles();
  useEffect(props.fetchPhoto, []);

  if (props.photos.length > 0) {
    return (
      <div className={classes.recentBox}>
        <div className={classes.recentImages}>
          {props.photos.map(el => (
            <Image {...el} key={el.id} handleClick={props.selectImage} />
          ))}
        </div>
      </div>
    );
  } else {
    return <Spinner />;
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecentImages);
