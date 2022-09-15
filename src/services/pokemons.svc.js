import axios from "axios";

//Armo la pegada a la API
const initUrl = `https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0`;

//Si no le paso ninguna url..que tome la uri inicial
export const fetchPokemon = async (url = initUrl) => {
  try {
    const { data } = await axios.get(url);

    return { error: false, data };
  } catch (error) {
    return { error: true, data: {} };
  }
};
