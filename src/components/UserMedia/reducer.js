import * as types from './constants';
const initialState = {
  assignedMedia: [],
};

export default function media(state = initialState, action) {
  switch (action.type) {
    case types.ASSIGNED_MEDIA:
      return { ...state, assignedMedia: action.payload };
    default:
      return state;
  }
}
