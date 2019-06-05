import React from "react";
import Header from "./js/components/Header";
import RecentImages from "./js/components/RecentImages";
import Favorites from "./js/components/Favorites";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route path="/" exact component={RecentImages} />
        <Route path="/favs" exact component={Favorites} />
      </div>
    </BrowserRouter>
  );
}

export default App;
