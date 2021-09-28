// export function toggleButton({ selectedContent }: { selectedContent: number }) {
//   return {
//     type: 'TOGGLE_BUTTON',
//     selectedContent,
//   }
// }


export const LOAD_POKEMONS_LOADING = 'LOAD_POKEMONS_LOADING';
export const LOAD_POKEMONS_SUCCESS = 'LOAD_POKEMONS_SUCCESS';
export const LOAD_POKEMONS_ERROR = 'LOAD_POKEMONS_ERROR';

// export const loadPokemons = () => (dispatch: Dispatch) => {

//   dispatch({ type: LOAD_POKEMONS_LOADING });

//   api.get('pokemon?limit=1500').then(response => response.data).then(
//     data => dispatch({ type: LOAD_POKEMONS_SUCCESS, data }),
//     error => dispatch({ type: LOAD_POKEMONS_ERROR, error: error.message || '' })
//   );
// }

//////////////////////////////////////////////////////////////

// export function loadPokemons() {

//   return (dispatch: Dispatch) => {


//     dispatch({ type: LOAD_POKEMONS_LOADING });

//     return (
//       api.get('pokemon?limit=1500').then(response => response.data).then(
//         data => dispatch({ type: LOAD_POKEMONS_SUCCESS, data }),
//         error => dispatch({ type: LOAD_POKEMONS_ERROR, error: error.message || '' })
//       )
//     )
//   }
// }

////////////////////////////////////////////////////////

export const loadPokemonsStart = () => {
  console.log("COMECOU CARREGAR < < < (POKE ACTION)");
  return ({
    type: LOAD_POKEMONS_LOADING,
  });
};

export const loadPokemonsSuccess = (pokemons: any) => {
  console.log("CONSEGUIU CARREGAR < < < (POKE ACTION)");

  return ({
    type: LOAD_POKEMONS_SUCCESS,
    pokemons,
  })
};

export const loadPokemonsError = (errorMessage: string) => {
  console.log("NAO COMECOU CARREGAR < < < (POKE ACTION)");

  return ({
    type: LOAD_POKEMONS_ERROR,
    errorMessage,
  })
};

