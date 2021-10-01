import { combineReducers } from "redux";

import navigation from "./navigation";
import pokedexReducer from "./pokedexReducer";
import pokemons from "./pokemonsReducer";

export const rootReducer = combineReducers({
  navigation,
  pokemons,
  pokedexReducer,
});

export type RootState = ReturnType<typeof rootReducer>