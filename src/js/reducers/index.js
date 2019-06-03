// src/js/reducers/index.js

import { SELECT_PHOTO } from "../constants/action-types";
const initialState = {
  photos: [
    {
      url: "https://loremflickr.com/320/240?random=1",
      id: 111,
      selected: false
    },
    {
      url: "https://loremflickr.com/320/240?random=2",
      id: 112,
      selected: false
    },
    {
      url: "https://loremflickr.com/320/240?random=3",
      id: 113,
      selected: false
    },
    {
      url: "https://loremflickr.com/320/240?random=4",
      id: 114,
      selected: false
    },
    {
      url: "https://loremflickr.com/320/240?random=5",
      id: 115,
      selected: false
    },
    {
      url: "https://loremflickr.com/320/240?random=6",
      id: 116,
      selected: false
    },
    {
      url: "https://loremflickr.com/320/240?random=7",
      id: 117,
      selected: false
    },
    {
      url: "https://loremflickr.com/320/240?random=8",
      id: 118,
      selected: false
    },
    {
      url: "https://loremflickr.com/320/240?random=9",
      id: 119,
      selected: false
    },
    {
      url: "https://loremflickr.com/320/240?random=10",
      id: 120,
      selected: false
    },
    {
      url: "https://loremflickr.com/320/240?random=11",
      id: 121,
      selected: false
    },
    {
      url: "https://loremflickr.com/320/240?random=12",
      id: 122,
      selected: false
    }
  ]
};
function rootReducer(state = initialState, action) {
  if (action.type === SELECT_PHOTO) {
    return Object.assign({}, state, {
      photos: state.photos.map(el => {
        if (el.id === action.payload) el.selected = !el.selected;
        return el;
      })
    });
  }

  return state;
}
export default rootReducer;
