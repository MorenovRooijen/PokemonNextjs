//https://pokeapi.co/

import { nan_get } from "./api_call";
const getFromPokemonAPi = async (url) => {
  return await nan_get("https://pokeapi.co/api/v2/" + url);
};
const getPokemonList = async () => {
  return await getFromPokemonAPi("pokemon");
};
const getPokemonListFull = async () => {
  return await getFromPokemonAPi("pokemon/?limit=1118");
};
const getPokemon = async (name) => {
  return await getFromPokemonAPi("pokemon/" + name);
};

const getPokemonListPaginated = async (page) => {
  return await getFromPokemonAPi("pokemon?limit=20&offset=" + page * 20);
};

export const API = {
  pokemon: {
    list: getPokemonList,
    full: getPokemonListFull,
    paginated: getPokemonListPaginated,
    get: getPokemon,
  },
};
