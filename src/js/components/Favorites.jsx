import React from "react";
import "./favorites.css";

const Favorites = props => {
  return (
    <ul className="recentImages">
      {props.favorites.map(favImage => {
        return <li key="{favImage.favImage_id}">{favImage.favImage_name}</li>;
      })}
    </ul>
  );
};

export default Favorites;
