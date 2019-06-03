import React from "react";
import { connect } from "react-redux";
import Image from "./Image";
import { selectPhoto } from "../actions";
import "./recentImages.css";

const mapStateToProps = state => {
  return { photos: state.photos };
};

const mapDispatchToProps = dispatch => {
  return {
    selectImage: id => dispatch(selectPhoto(id))
  };
};
const RecentImages = props => (
  <div className="recentBox">
    <div className="recentImages">
      {props.photos.map(el => (
        <Image {...el} key={el.id} handleClick={props.selectImage} />
      ))}
    </div>
  </div>
);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecentImages);
