import React from "react";
import Header from "./js/components/Header";
import RecentImages from "./js/components/RecentImages";
import Favorites from "./js/components/Favorites";
import SignIn from "./js/components/SignIn";
import UnderConstruction from "./js/components/UnderConstruction";
import "./App.css";
import { HashRouter, Route } from "react-router-dom";
import { StickyContainer, Sticky } from "react-sticky";

function App() {
  return (
    <HashRouter>
      <StickyContainer>
        <div>
          <Sticky position="fixed">
            {({ style = { relative: true } }) => <Header style={style} />}
          </Sticky>

          <Route path="/" exact component={RecentImages} />
          <Route path="/sign" exact component={UnderConstruction} />
          <Route path="/favs" exact component={Favorites} />
        </div>
      </StickyContainer>
    </HashRouter>
  );
}

export default App;
