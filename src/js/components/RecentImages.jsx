import React, { useEffect } from "react";
import { connect } from "react-redux";
import Image from "./Image";
import { fetchPhoto, selectPhoto } from "../actions";
import "./RecentImages.css";
import Spinner from "./Spinner";

const mapStateToProps = state => {
  return { photos: state.photos };
};

const mapDispatchToProps = dispatch => {
  return {
    selectImage: id => dispatch(selectPhoto(id)),
    fetchPhoto: () => dispatch(fetchPhoto())
  };
};
const RecentImages = props => {
  useEffect(props.fetchPhoto, []);

  if (props.photos.length > 0) {
    return (
      <div className="recentBox">
        <div className="recentImages">
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
