export const UPDATE_POKEDEX_FILTER = "UPDATE_POKEDEX_FILTER";

export function updatePokedexFilter({newFilter}: {newFilter: string}) {
  return {
    type: UPDATE_POKEDEX_FILTER,
    newFilter,
  };
}