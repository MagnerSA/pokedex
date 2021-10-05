import { Dispatch } from "redux";

export const UPDATE_POKEDEX_FILTER = "UPDATE_POKEDEX_FILTER";
export const LOAD_POKEMONS_LOADING = 'LOAD_POKEMONS_LOADING';
export const LOAD_POKEMONS_SUCCESS = 'LOAD_POKEMONS_SUCCESS';
export const LOAD_POKEMONS_ERROR = 'LOAD_POKEMONS_ERROR';

export const updatePokemonFilterDispatch = (newFilter: string) => (dispatch: Dispatch) => {

  dispatch(updatePokedexFilter(newFilter));

};

const updatePokedexFilter = (newFilter: string) => {
  return ({
    type: UPDATE_POKEDEX_FILTER,
    newFilter,
  });
}

export const loadPokemonsStart = () => {
  return ({
    type: LOAD_POKEMONS_LOADING,
  });
};

export const loadPokemonsSuccess = (pokemons: any) => {

  return ({
    type: LOAD_POKEMONS_SUCCESS,
    pokemons,
  })
};

export const loadPokemonsError = (errorMessage: string) => {

  return ({
    type: LOAD_POKEMONS_ERROR,
    errorMessage,
  })
};