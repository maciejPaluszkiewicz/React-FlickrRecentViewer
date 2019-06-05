import React from "react";

const FavLegend = props => {
  return (
    <div className="favLegendBox">
      <div className="imageTitle">{props.title}</div>
      <div className="imageOwner">{props.owner}</div>
      <div className="imageDate">{props.date}</div>
      <div className="stats">
        <span>{props.stats.views}</span>
        <span>{props.stats.favorites}</span>
        <span>{props.stats.comments}</span>
      </div>
    </div>
  );
};

export default FavLegend;
