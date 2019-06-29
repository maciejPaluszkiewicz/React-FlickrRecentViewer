import React from "react";
import Header from "./js/components/Header";
import RecentImages from "./js/components/RecentImages";
import Favorites from "./js/components/Favorites";
import SignIn from "./js/components/SignIn";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { StickyContainer, Sticky } from "react-sticky";

function App() {
  return (
    <BrowserRouter>
      <StickyContainer>
        <div>
          <Sticky position="fixed">
            {({ style = { relative: true } }) => <Header style={style} />}
          </Sticky>

          <Route path="/" exact component={RecentImages} />
          <Route path="/sign" exact component={SignIn} />
          <Route path="/favs" exact component={Favorites} />
        </div>
      </StickyContainer>
    </BrowserRouter>
  );
}

export default App;
