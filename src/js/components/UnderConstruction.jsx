import React from "react";
import UnderConstructionPicture from "../images/under-construction-2408061_640.png";

const UnderConstruction = () => {
  const divStyle = {
    width: "100%"
  };

  const imgStyle = {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "30%",
    paddingTop: 90
  };

  return (
    <div className="under-construction" style={divStyle}>
      <img
        style={imgStyle}
        src={UnderConstructionPicture}
        alt="Under Construction Image by Jose R. Cabello from Pixabay "
      />
    </div>
  );
};

export default UnderConstruction;
