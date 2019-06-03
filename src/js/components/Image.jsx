import React from "react";
import "./Image.css";

const Image = props => {
  return (
    <div className="imageContainer">
      <span className={props.selected ? "selectedImage" : ""}>
        <img src={props.url} onClick={() => props.handleClick(props.id)} />
      </span>
    </div>
  );
};

export default Image;