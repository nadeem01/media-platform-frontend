import * as types from './constants';
import axios from 'axios';

export const login = (state) => async (dispatch) => {
  const url = 'http://localhost:5000/api/v1/auth/login';
  dispatch({
    type: types.GET_LOGIN_REQUEST,
  });

  await axios
    .post(url, {
      ...state,
    })
    .then((res) => {
      console.log(res, 'ressss');
      localStorage.setItem('authToken', res.data.data);
      dispatch({
        type: types.GET_LOGIN_SUCCESS,
      });
    })
    .catch((err) => {
      if (err.response) {
        dispatch({
          type: types.GET_LOGIN_FAILED,
          payload: err.response.data,
        });
      }
    });
};
export const clearError = () => (dispatch) => {
  dispatch({
    type: types.CLEAR_ERROR,
  });
};
