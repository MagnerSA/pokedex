import { AnyAction } from 'redux';
import { LOAD_POKEMON_DATA_ERROR, LOAD_POKEMON_DATA_START, LOAD_POKEMON_DATA_SUCCESS, SELECT_CURRENT_POKEMON } from '../actions/pokemonPageActions';

const INITIAL_STATE = {
  currentPokemonName: '',
  loading: false,
  error: null,
  pokemonData: null,
}

const pokemonPageReducer = (state = INITIAL_STATE, action: AnyAction) => {

  console.log(action.type);

  switch (action.type) {
    case SELECT_CURRENT_POKEMON: {
      return {
        ...state,
        currentPokemonName: action.newPokemonName,
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