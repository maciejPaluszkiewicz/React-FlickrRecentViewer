import React from "react";
import { connect } from "react-redux";
import Image from "./Image";
import FavLegend from "./FavLegend";
import "./favorites.css";

const mapStateToProps = state => {
  return { favs: state.favs };
};

const Favorites = props => {
  return (
    // <ul className="recentImages">
    //   {props.favorites.map(favImage => {
    //     return <li key="{favImage.favImage_id}">{favImage.favImage_name}</li>;
    //   })}
    // </ul>

    <div className="favoriteBox">
      <div className="favoriteImages">
        {props.favs.map(el => (
          <div key={el.id}>
            <Image url={el.url} handleClick={() => {}} />
            <FavLegend {...el} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(Favorites);
