import axios from "axios";

export const fetchPokemon = async () => {
  try {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0`
    );
    console.log("fetchPokemon", data);
    return data;
  } catch (error) {
    return error;
  }
};
