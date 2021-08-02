import * as types from './constants';
import axios from 'axios';

export const register = (state) => async (dispatch) => {
  const url = 'http://localhost:5000/api/v1/auth/signup';
  dispatch({
    type: types.GET_REGISTER_REQUEST,
  });

  const data = await axios
    .post(url, {
      ...state,
    })
    .then((res) => {
      dispatch({
        type: types.GET_REGISTER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      if (err.response) {
        dispatch({
          type: types.GET_REGISTER_FAILED,
          payload: err.response.data,
        });
      }
    });
};
export const resetError = () => (dispatch) => {
  dispatch({
    type: types.RESET_ERROR,
  });
};
