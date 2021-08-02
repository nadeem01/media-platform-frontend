import * as types from './constants';
import axios from 'axios';
export const getAssignedMedia = (userId) => async (dispatch) => {
  const url = 'http://localhost:5000/api/v1/media/assignedMediaByUser';

  await axios
    .post(url, {
      userId,
    })
    .then((res) => {
      console.log(res, 'resssss');
      dispatch({
        type: types.ASSIGNED_MEDIA,
        payload: res.data,
      });
    });
};
