import api from "./api";

class PokemonsService {
  getAllPokemons = () => {
    return api.get('pokemon?limit=151');
  };
}

export default new PokemonsService();