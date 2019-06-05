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
  ],

  favs: [
    {
      url: "https://loremflickr.com/320/240?random=50",
      id: 50,
      title: "CAT_50",
      owner: "whoever",
      date: "today",
      stats: { views: 3, favorites: 4, comments: 5 }
    },
    {
      url: "https://loremflickr.com/320/240?random=51",
      id: 51,
      title: "CAT_51",
      owner: "w112r",
      date: "today",
      stats: { views: 32, favorites: 41, comments: 52 }
    },
    {
      url: "https://loremflickr.com/320/240?random=52",
      id: 52,
      title: "CAT_52",
      owner: "whoevernotme",
      date: "yestoday",
      stats: { views: 32, favorites: 4000, comments: 555 }
    },
    {
      url: "https://loremflickr.com/320/240?random=53",
      id: 53,
      title: "CAT_53",
      owner: "whoever2",
      date: "tomorrow",
      stats: { views: 444399, favorites: 41, comments: 5 }
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
