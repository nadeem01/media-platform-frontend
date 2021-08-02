import * as types from './constants';

const initialState = {
  isLoading: false,
  error: '',
  data: null,
};

export default function register(state = initialState, action) {
  switch (action.type) {
    case types.GET_REGISTER_REQUEST:
      return { ...state, isLoading: true };
    case types.GET_REGISTER_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };
    case types.GET_REGISTER_FAILED:
      return { isLoading: false, error: action.payload };
    case types.RESET_ERROR:
      return { ...state, error: '', data: null };
    default:
      return state;
  }
}
