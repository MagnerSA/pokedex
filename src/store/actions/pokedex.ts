import { Dispatch } from "redux";

export const UPDATE_POKEDEX_FILTER = "UPDATE_POKEDEX_FILTER";


export const updatePokemonFilterDispatch = (newFilter: string) => (dispatch: Dispatch) => {

  dispatch(updatePokedexFilter(newFilter));

};

const updatePokedexFilter = (newFilter: string) => {
  return ({
    type: UPDATE_POKEDEX_FILTER,
    newFilter,
  });
}