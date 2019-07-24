import { RSAA } from 'redux-api-middleware';
export const GET_POKEMON_REQUEST = 'GET_POKEMON_REQUEST';
export const GET_POKEMON_SUCCESS = 'GET_POKEMON_SUCCESS';
export const GET_POKEMON_FAILURE = 'GET_POKEMON_FAILURE';


export const getPokemon = (options = {}) => dispatch => {
  const { limit = 784 } = options;
  console.log("Getting pokemon ...")
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