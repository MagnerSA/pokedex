import { AnyAction } from 'redux';
import { CLEAR_POKEMON_DATA, LOAD_POKEMON_DATA_ERROR, LOAD_POKEMON_DATA_START, LOAD_POKEMON_DATA_SUCCESS, SELECT_CURRENT_POKEMON } from '../actions/pokemonPageActions';

const INITIAL_STATE = {
  currentPokemonID: '',
  loading: false,
  error: null,
  pokemonData: null,
}

const pokemonPageReducer = (state = INITIAL_STATE, action: AnyAction) => {

  switch (action.type) {
    case SELECT_CURRENT_POKEMON: {
      return {
        ...state,
        currentPokemonID: action.newPokemonID,
      };
    }

    case CLEAR_POKEMON_DATA: {
      return {
        ...state,
        currentPokemonID: '',
        pokemonData: null,
      };
    }

    case LOAD_POKEMON_DATA_START: {
      return {
        ...state,
        loading: true,
      }
    }

    case LOAD_POKEMON_DATA_SUCCESS: {
      return {
        ...state,
        loading: false,
        pokemonData: action.pokemonData,
      }
    }

    case LOAD_POKEMON_DATA_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.errorMessage,
      }
    }

    default: {
      return state;
    }
  }

}

export default pokemonPageReducer;