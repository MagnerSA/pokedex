import { AnyAction } from 'redux';
import { LOAD_POKEMONS_ERROR, LOAD_POKEMONS_LOADING, LOAD_POKEMONS_SUCCESS } from '../actions/pokemons';

const INITIAL_STATE = {
  pokemons: null,
  loading: false,
  error: null,
};

const pokemonsReducer = (state = INITIAL_STATE, action: AnyAction) => {

  switch (action.type) {
    case LOAD_POKEMONS_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case LOAD_POKEMONS_SUCCESS: {

      return {
        ...state,
        loading: false,
        pokemons: action.pokemons,

      };
    }
    case LOAD_POKEMONS_ERROR: {

      return {
        ...state,
        loading: false,
        error: action.errorMessage,
      };
    }
    default: {

      return state;
    }
  }

}

export default pokemonsReducer;
