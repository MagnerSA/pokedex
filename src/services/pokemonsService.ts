import api from "./api";

const numberOfPokemons = 898;

class PokemonsService {

  getAllPokemons = () => {
    return api.get(`pokemon?limit=${numberOfPokemons}`);
  };

  getPokemonData = (pokemonID: string) => {
    return api.get(`pokemon/${pokemonID}`);
  };
}

export default new PokemonsService();