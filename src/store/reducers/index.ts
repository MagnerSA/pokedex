import { combineReducers } from "redux";

import navigation from "./navigation";

export const rootReducer = combineReducers({
  navigation,
});

export type RootState = ReturnType<typeof rootReducer>