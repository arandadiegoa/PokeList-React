import axios from "axios";

//Armo la pegada a la API
const initUrl = `https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0`;

//Esta función es la que trae la data de la API. Recibe por parámetro una nueva url, si no la recibe, usa la url por default.
export const fetchPokemons = async (url = initUrl) => {
  try {
    const { data } = await axios.get(url);

    return { error: false, data };
  } catch (error) {
    return { error: true, data: {} };
  }
};

export const getInfoPokemon = async (id) => {
  try {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

    return { error: false, data };
  } catch (error) {
    return { error: true, data: {} };
  }
};

/* Tengo una función en un .svc, que es la encargada de comunicarse con mi API/Backend. Esa función devuelve algo.
Después en mi state, llamo a esa función a través de otra que es en verdad la que llamo en mis componentes 
(en este caso, sería getPokemons)
 */
