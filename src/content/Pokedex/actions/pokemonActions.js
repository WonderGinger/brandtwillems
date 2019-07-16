import { RSAA } from 'redux-api-middleware';
import { GET_POKEMON_REQUEST, GET_POKEMON_SUCCESS, GET_POKEMON_FAILURE } from './types';


export const getPokemon = (options = {}) => dispatch => {
  const { limit = 784 } = options;

  return dispatch({
    [RSAA]: {
      endpoint: `https://pokeapi.co/api/v2/pokemon/?limit=${limit}`,
      method: 'GET',
      types: [
        GET_POKEMON_REQUEST,
        GET_POKEMON_SUCCESS,
        GET_POKEMON_FAILURE
      ]
    }
  })
}