import axios from "axios";

const initUrl = `https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0`;

export const fetchPokemon = async (url = initUrl) => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    return error;
  }
};
