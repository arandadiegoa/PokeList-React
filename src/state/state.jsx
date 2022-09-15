import { useReducer } from "react";
import { fetchPokemon } from "../services/pokemons.svc";
import { types } from "./actions";
import { PokeContext } from "./context";
import { pokeReducer } from "./reducer";

export const PokeState = ({ children }) => {
  const initialState = {
    pokeList: [],
    loadingList: false,
    errorList: false,
    nextPage: "",
    previousPage: "",
  };

  const [state, dispatch] = useReducer(pokeReducer, initialState);

  //llamando a la API, y le paso como parametro la nueva url
  const getPokemons = async (url) => {
    dispatch({ type: types.FETCH_LOADING, payload: { loadingList: true } });

    //Hago el destructuring, de lo que necesito, data y error. Y tengo que pasarle a fetch, la nueva url
    const { error, data } = await fetchPokemon(url);

    if (!error)
      dispatch({
        type: types.FETCH_SUCCESS,
        payload: {
          pokeList: data.results,
          errorList: false,
          loadingList: false,
          nextPage: data.next,
          previousPage: data.previous,
        },
      });

    if (error)
      dispatch({
        type: types.FETCH_FAILED,
        payload: { errorList: true, loadingList: false },
      });
  };


  return (
    <PokeContext.Provider
      value={{
        nextPage: state.nextPage,
        previousPage: state.previousPage,
        pokeList: state.pokeList,
        loadingList: state.loadingList,
        errorList: state.errorList,
        getPokemons,
      }}
    >
      {children}
    </PokeContext.Provider>
  );
};
