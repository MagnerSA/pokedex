export const LOAD_POKEMONS_LOADING = 'LOAD_POKEMONS_LOADING';
export const LOAD_POKEMONS_SUCCESS = 'LOAD_POKEMONS_SUCCESS';
export const LOAD_POKEMONS_ERROR = 'LOAD_POKEMONS_ERROR';

export const loadPokemonsStart = () => {
  return ({
    type: LOAD_POKEMONS_LOADING,
  });
};

export const loadPokemonsSuccess = (pokemons: any) => {

  return ({
    type: LOAD_POKEMONS_SUCCESS,
    pokemons,
  })
};

export const loadPokemonsError = (errorMessage: string) => {

  return ({
    type: LOAD_POKEMONS_ERROR,
    errorMessage,
  })
};

