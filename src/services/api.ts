import { AxiosResponse } from 'axios';
import { setup } from 'axios-cache-adapter';

const api = setup({
  baseURL: "https://pokeapi.co/api/v2/",
  cache: {
    maxAge: 15 * 60 * 1000
  }
});

export default api;