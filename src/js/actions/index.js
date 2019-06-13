// src/js/actions/index.js
import {
  SELECT_PHOTO,
  FETCH_PHOTO_PENDING,
  FETCH_PHOTO_SUCCESS,
  FETCH_PHOTO_FAILURE
} from "../constants/action-types";
import flickrService from "../services/flickr-service.js";
import utilService from "../services/util-service.js";

export const selectPhoto = payload => ({
  type: SELECT_PHOTO,
  payload
});

const fetchPhotoPending = () => ({
  type: FETCH_PHOTO_PENDING
});

const fetchPhotoSuccess = data => ({
  type: FETCH_PHOTO_SUCCESS,
  payload: data
});

const fetchPhotoFailure = error => ({
  type: FETCH_PHOTO_FAILURE,
  payload: error
});

export const fetchPhoto = () => {
  return (dispatch, getState) => {
    dispatch(fetchPhotoPending());
    flickrService
      .getRecentPhotos()
      .then(data => {
        dispatch(
          fetchPhotoSuccess(
            utilService.translateRecentPhotos(data.photos.photo)
          )
        );
      })
      .catch(error => {
        dispatch(fetchPhotoFailure(error));
      });
  };
};
