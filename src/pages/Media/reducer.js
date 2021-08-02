import * as types from './constants';
const initialState = {
  isLoading: false,
  data: [],
  assignedMedia: [],
};

export default function media(state = initialState, action) {
  switch (action.type) {
    case types.GET_MEDIA_REQUEST:
      return { ...state, isLoading: true };
    case types.GET_MEDIA_SUCCESS:
      console.log('reducer action', action.payload);
      return { ...state, data: action.payload, isLoading: false };
    case types.GET_MEDIA_FAILED:
      return state;
    case types.UPDATE_AVAILABLE_IMAGES:
      let filteredData = state.data.filter(
        (f) => f.id != action.payload.imageId
      );
      return { ...state, data: filteredData };

    default:
      return state;
  }
}
