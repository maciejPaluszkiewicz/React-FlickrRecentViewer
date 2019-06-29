// src/js/store/index.js

import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import thunkMiddleware from "redux-thunk";
import { reducer } from "react-redux-oauth2";

const store = createStore(
  combineReducers({ oauth: reducer, root: rootReducer }),
  applyMiddleware(thunkMiddleware)
);
export default store;
