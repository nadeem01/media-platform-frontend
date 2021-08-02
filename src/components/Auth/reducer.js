import { LOGOUT, SET_CURRENT_USER } from './constants';

const initialState = {
  currentUser: {},
  authToken: '',
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return action.payload;
    case LOGOUT:
      return {};

    default:
      return state;
  }
}
