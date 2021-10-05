import { combineReducers } from "redux";

import navigationReducer from "./navigationReducer";
import pokedexReducer from "./pokedexPageReducer";
import pokemonPageReducer from "./pokemonPageReducer";

export const rootReducer = combineReducers({
  navigationReducer,
  pokedexReducer,
  pokemonPageReducer,
});

export type RootState = ReturnType<typeof rootReducer>