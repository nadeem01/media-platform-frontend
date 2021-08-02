import * as types from './constants';
import jwt from 'jsonwebtoken';
export const setCurrentUser = (token) => (dispatch) => {
  var decoded = jwt.verify(token, 'secret');
  dispatch({
    type: types.SET_CURRENT_USER,
    payload: {
      currentUser: decoded,
      authToken: token,
    },
  });
};

export const logout = () => (dispatch) => {
  dispatch({
    type: types.LOGOUT,
  });
  localStorage.removeItem('authToken');
};
