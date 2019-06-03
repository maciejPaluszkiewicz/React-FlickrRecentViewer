import React from "react";
import { connect } from "react-redux";
import "./recentImages.css";

const mapStateToProps = state => {
  return { photos: state.photos };
};

const RecentImages = ({ photos }) => (
  <div className="recentBox">
    <div className="recentImages">
      {photos.map(el => (
        <span key={el.id} className={el.selected ? "selectedImage" : ""}>
          <img src={el.url} />
        </span>
      ))}
    </div>
  </div>
);
export default connect(mapStateToProps)(RecentImages);
