import {
  GET_POKEMON_REQUEST,
  GET_POKEMON_SUCCESS,
  GET_POKEMON_FAILURE,
} from '../actions/types';

const initialState = {
  collection: {},
  isFetched: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMON_REQUEST:
      return {
        ...state,
        isFetched: true,
      };
    case GET_POKEMON_SUCCESS:
      return {
        ...state,
        collection: {
          ...state.collection,
          ...action.payload.results.reduce((accumulator, item) => {
            const { url } = item;
            const id = url.substring(34, url.length - 1);
            return {
              ...accumulator,
              [id]: {
                id,
                ...item
              }
            }
          }, {})
        },
        isFetched: false
      }
    case GET_POKEMON_FAILURE:
      return {
        ...state,
        isFetched: false,
      }
    default: 
      return state
  }
}