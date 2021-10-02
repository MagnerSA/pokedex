import { Dispatch } from "redux";
import pokemonsService from "../../services/pokemonsService";
import { loadPokemonDataError, loadPokemonDataStart, loadPokemonDataSuccess } from "./pokemonPageActions";

export const loadPokemonDataAsync = (pokemonName: string) => (dispatch: Dispatch) => {

  dispatch(loadPokemonDataStart());

  console.log("pokemonName");
  console.log(pokemonName);

  pokemonsService.getPokemonData(pokemonName).then(
    (response: any) => console.log(response.data)
  )

  pokemonsService.getPokemonData(pokemonName).then(
    (response: any) => dispatch(loadPokemonDataSuccess(response.data))
  ).catch(
    (error) => dispatch(loadPokemonDataError(error.message))
  );

};