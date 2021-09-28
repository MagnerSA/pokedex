import { combineReducers } from "redux";

import navigation from "./navigation";
import pokemons from "./pokemonsReducer";

export const rootReducer = combineReducers({
  navigation,
  pokemons,
});

export type RootState = ReturnType<typeof rootReducer>