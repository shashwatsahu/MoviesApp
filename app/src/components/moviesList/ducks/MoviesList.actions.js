import * as ActionTypes from './MoviesList.types';
import {MOVIES_API} from './MoviesList.services';

export const fetchMoviesLoading = () => ({
  type: ActionTypes.MOVIES_LIST_LOADING,
});

export const fetchMoviesSuccess = (data) => ({
  type: ActionTypes.MOVIES_LIST_SUCCESS,
  payload: {data},
});

export const fetchMoviesError = (error) => ({
  type: ActionTypes.MOVIES_LIST_ERROR,
  payload: {error},
});

export const clearMoviesState = () => ({
  type: ActionTypes.CLEAR_MOVIES_API_STATE,
});

export function fetchMovies(searchText) {
  return (dispatch) => {
    dispatch(fetchMoviesLoading());
    return fetch(MOVIES_API + searchText)
      .then(handleErrors)
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchMoviesSuccess(json.Search));
        return json.Search;
      })
      .catch((error) => dispatch(fetchMoviesError(error)));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const addShortListMovie = (data) => ({
  type: ActionTypes.ADD_SHORT_LIST_MOVIE,
  payload: data,
});
