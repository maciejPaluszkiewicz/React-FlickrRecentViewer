// src/js/actions/index.js
import { SELECT_PHOTO } from "../constants/action-types";
export function selectPhoto(payload) {
  console.log("a oto payload:", payload);
  return { type: SELECT_PHOTO, payload };
}
