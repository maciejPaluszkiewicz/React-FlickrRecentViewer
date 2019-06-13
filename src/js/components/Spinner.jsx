import React from "react";
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="cssload-loader">
      <div className="cssload-inner cssload-one" />
      <div className="cssload-inner cssload-two" />
      <div className="cssload-inner cssload-three" />
    </div>
  );
};

export default Spinner;
