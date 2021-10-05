import { AnyAction } from 'redux';
import { LOAD_POKEMONS_ERROR, LOAD_POKEMONS_LOADING, LOAD_POKEMONS_SUCCESS, UPDATE_POKEDEX_FILTER } from '../actions/pokedexPageActions';

const INITIAL_STATE = {
  pokedexFilter: '',
  pokemons: null,
  loading: false,
  error: null,
};

const pokedexReducer = (state = INITIAL_STATE, action: AnyAction) => {

  switch (action.type) {
    case UPDATE_POKEDEX_FILTER: {
      return {
        ...state,
        pokedexFilter: action.newFilter,
      };
    }
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

export default pokedexReducer;