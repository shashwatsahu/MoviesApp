import * as ActionTypes from './MoviesList.types';

const initialState = {
  loading: false,
  apiState: {
    isError: false,
    isSuccess: false,
  },
  error: null,
  moviesData: [],
};

export default function MoviesReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.MOVIES_LIST_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case ActionTypes.MOVIES_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        moviesData:
          action.payload &&
          action.payload.data &&
          action.payload.data.length > 0
            ? action.payload.data
            : [],
        apiState: {
          ...state.apiState,
          isSuccess: true,
        },
      };

    case ActionTypes.MOVIES_LIST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        moviesData: [],
        apiState: {
          ...state.apiState,
          isError: true,
        },
      };

    case ActionTypes.CLEAR_MOVIES_API_STATE:
      return {
        ...state,
        apiState: {
          ...initialState,
        },
      };

    default:
      return state;
  }
}
