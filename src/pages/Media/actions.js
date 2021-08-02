import * as types from './constants';
import axios from 'axios';

export const getMediaRequest = () => async (dispatch) => {
  const url = 'http://localhost:5000/api/v1/media/profile';

  dispatch({
    type: types.GET_MEDIA_REQUEST,
  });

  await axios
    .get(url)
    .then((res) => {
      console.log(res.data, ' res.data.data');
      dispatch({
        type: types.GET_MEDIA_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: types.GET_MEDIA_FAILED,
      });
    });
};

export const addMediaByUser = (userId, imageId) => async (dispatch) => {
  const url = 'http://localhost:5000/api/v1/media/addMediaByUser';
  dispatch({ type: types.ADD_MEDIA_BY_USER });

  await axios
    .post(url, {
      userId,
      imageId,
    })
    .then((res) => {
      console.log(res);
    });
};

export const updateAvailableimages = (userId, imageId) => async (dispatch) => {
  const url = 'http://localhost:5000/api/v1/media/addMediaByUser';
  dispatch({
    type: types.UPDATE_AVAILABLE_IMAGES,
    payload: { userId, imageId },
  });
  await axios
    .post(url, {
      userId,
      imageId,
    })
    .then((res) => {
      console.log(res);
    });
};
