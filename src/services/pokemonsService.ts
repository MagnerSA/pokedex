import api from "./api";

class PokemonsService {
  getAllPokemons = () => {
    return api.get('pokemon?limit=898');
  };
  getPokemonData = (pokemonName: string) => {
    return api.get(`pokemon/${pokemonName}`);
  };
}

export default new PokemonsService();