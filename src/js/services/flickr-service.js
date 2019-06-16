const URL = "https://www.flickr.com/services/rest/";
const API_KEY = "57ac7d609183a31ac9628fb3d9cc7c73";
const RECENT_PHOTOS_METHOD = "flickr.photos.getRecent";
const FAVORITE_PHOTOS_METHOS = "flickr.favorites.getList";
const FORMAT = "json&nojsoncallback=true";
const USER_ID = "181706557@N05";

// https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=57ac7d609183a31ac9628fb3d9cc7c73&per_page=30&format=json&nojsoncallback=true

const getRecentPhotos = () => {
  const shortcut = `${URL}?method=${RECENT_PHOTOS_METHOD}&api_key=${API_KEY}&per_page=12&format=${FORMAT}`;
  return fetch(shortcut).then(results => results.json());
};

const getFavoritePhotos = () => {
  const shortcut = `${URL}?method=${FAVORITE_PHOTOS_METHOS}&api_key=${API_KEY}&user_id=${USER_ID}&per_page=6&format=${FORMAT}`;
  return fetch(shortcut).then(results => results.json());
};

const flickrService = {
  getRecentPhotos,
  getFavoritePhotos
};

export default flickrService;
