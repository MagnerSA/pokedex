import { Dispatch } from "redux";

export const SELECT_CURRENT_POKEMON = 'SELECT_CURRENT_POKEMON';
export const CLEAR_POKEMON_DATA = 'CLEAR_POKEMON_DATA';
export const LOAD_POKEMON_DATA_START = 'LOAD_POKEMON_DATA_START';
export const LOAD_POKEMON_DATA_SUCCESS = 'LOAD_POKEMON_DATA_SUCCESS';
export const LOAD_POKEMON_DATA_ERROR = 'LOAD_POKEMON_DATA_ERROR';

export const selectCurrentPokemonDispatch = (newPokemonName: string) => (dispatch: Dispatch) => {

  dispatch(selectCurrentPokemon(newPokemonName));

}

const selectCurrentPokemon = (newPokemonName: string) => {

  return ({
    type: SELECT_CURRENT_POKEMON,
    newPokemonName,
  });
}

export const clearPokemonDataDispatch = () => (dispatch: Dispatch) => {

  dispatch(clearPokemonData());

}

const clearPokemonData = () => {

  return ({
    type: CLEAR_POKEMON_DATA,
  });
}

export const loadPokemonDataStart = () => {
  return ({
    type: LOAD_POKEMON_DATA_START,
  });
}

export const loadPokemonDataSuccess = (pokemonData: any) => {
  return ({
    type: LOAD_POKEMON_DATA_SUCCESS,
    pokemonData,
  });
};

export const loadPokemonDataError = (errorMessage: string) => {
  return ({
    type: LOAD_POKEMON_DATA_ERROR,
    errorMessage,
  });


};
