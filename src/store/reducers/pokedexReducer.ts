import { AnyAction } from 'redux';
import { UPDATE_POKEDEX_FILTER } from '../actions/pokedex';

const INITIAL_STATE = {
  pokedexFilter: '',
};

const pokedexReducer = (state = INITIAL_STATE, action: AnyAction) => {

  if (action.type === UPDATE_POKEDEX_FILTER) {
    return {
      ...state,
      pokedexFilter: action.newFilter,
    };
  } else {
    return state;
  }
}

export default pokedexReducer;