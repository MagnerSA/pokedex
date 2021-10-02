import { combineReducers } from "redux";

import navigation from "./navigation";
import pokedexReducer from "./pokedexReducer";
import pokemonPageReducer from "./pokemonPageReducer";
import pokemons from "./pokemonsReducer";

export const rootReducer = combineReducers({
  navigation,
  pokemons,
  pokedexReducer,
  pokemonPageReducer,
});

export type RootState = ReturnType<typeof rootReducer>