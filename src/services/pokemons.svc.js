import axios from 'axios';

//Armo la pegada a la API
const initUrl = `https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0`;

<<<<<<< HEAD
//Si no le paso ninguna url..que tome la uri inicial
export const fetchPokemon = async (url = initUrl) => {
=======
//Esta función es la que trae la data de la API. Recibe por parámetro una nueva url, si no la recibe, usa la url por default.
export const fetchPokemons = async (url = initUrl) => {
>>>>>>> a2ef3a0e6ab8461c5a4adda9ab514dd17f050351
  try {
    const { data } = await axios.get(url);

    return { error: false, data };
  } catch (error) {
    return { error: true, data: {} };
  }
};

/* Tengo una función en un .svc, que es la encargada de comunicarse con mi API/Backend. Esa función devuelve algo.
Después en mi state, llamo a esa función a través de otra que es en verdad la que llamo en mis componentes 
(en este caso, sería getPokemons)
 */
