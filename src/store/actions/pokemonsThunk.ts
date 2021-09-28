import { Dispatch } from "redux";
import pokemonsService from "../../services/pokemonsService";
import { loadPokemonsError, loadPokemonsStart, loadPokemonsSuccess } from "./pokemons";

export const loadPokemonsAsync = () => (dispatch: Dispatch) => {

  dispatch(loadPokemonsStart());

  pokemonsService.getAllPokemons().then(
    (response: any) => dispatch(loadPokemonsSuccess(response.data.results))
  ).catch(
    (error) => dispatch(loadPokemonsError(error.message))
  );

};