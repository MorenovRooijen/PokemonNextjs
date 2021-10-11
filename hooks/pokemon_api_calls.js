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
const getSpecies = async (id) => {
  return await getFromPokemonAPi("pokemon-species/" + id);
};
const getEvolutionChain = async (id) => {
  return await getFromPokemonAPi("evolution-chain/" + id);
};

export const API = {
  pokemon: {
    list: getPokemonList,
    full: getPokemonListFull,
    get: getPokemon,
  },
  species: {
    get: getSpecies,
  },
  evolution: {
    get: getEvolutionChain,
  },
};
