import * as types from './constants';

const initialState = {
  isLoading: false,
  error: '',
  success: false,
};
export default function login(state = initialState, action) {
  switch (action.type) {
    case types.GET_LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case types.GET_LOGIN_SUCCESS:
      return { ...state, isLoading: false, success: true };
    case types.GET_LOGIN_FAILED:
      return { ...state, error: action.payload, isLoading: false };
    case types.CLEAR_ERROR:
      return { ...state, error: '', isLoading: false };

    default:
      return state;
  }
}
