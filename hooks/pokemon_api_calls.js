//https://pokeapi.co/

import { nan_get } from "./api_call";

export const getPokemon = async () => {
  return await nan_get("https://pokeapi.co/api/v2/pokemon?limit=151");
};
