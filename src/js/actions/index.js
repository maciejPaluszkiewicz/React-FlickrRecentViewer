// src/js/actions/index.js
import { SELECT_PHOTO } from "../constants/action-types";
export function selectPhoto(payload) {
  return { type: SELECT_PHOTO, payload };
}
