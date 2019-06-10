import React from "react";
import Header from "./js/components/Header";
import RecentImages from "./js/components/RecentImages";
import Favorites from "./js/components/Favorites";
import SignIn from "./js/components/SignIn";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route path="/" exact component={RecentImages} />
        <Route path="/sign" exact component={SignIn} />
        <Route path="/favs" exact component={Favorites} />
      </div>
    </BrowserRouter>
  );
}

export default App;
